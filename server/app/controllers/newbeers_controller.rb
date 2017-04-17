require 'base64'
require 'faraday'
require 'hashie'
require 'json'

class NewbeersController < ApplicationController
  def index
    # create base64 token to use in Authorization header -> <email>:<token> | base64
    authToken = Base64.encode64("#{ENV["UNTAPPD_EMAIL"]}:#{ENV["UNTAPPD_READ_TOKEN"]}")

    # full = true -> get all info from a menu
    menuUrl = "https://business.untappd.com/api/v1/menus/#{ENV["UNTAPPD_MENU_ID"]}?full=true"
    menu = makeRequest(menuUrl, authToken)
    formattedMenu = formatMenu(menu)

    render json: formattedMenu
  end

  def formatMenu(menu)
    # usar https://github.com/intridea/hashie#deeplocate
    menu.extend(Hashie::Extensions::DeepLocate)

    newMenu = menu.deep_locate -> (key, value, object) {
      key == "description" && value.include?("Draft")
    }

    return newMenu[0]["items"].map do |beer|
      beer.extend(Hashie::Extensions::DeepLocate)

      pintInfo = beer.deep_locate -> (k, v, o) {
        k == "container_size" && v["name"] == "Pint"
      }

      halfPintInfo = beer.deep_locate -> (k, v, o) {
        k == "container_size" && v["name"].include?("1/2")
      }

      {
        brand: beer["brewery"],
        name: beer["name"],
        style: beer["style"],
        abv: beer["abv"],
        half_pint: halfPintInfo[0]["price"],
        pint: pintInfo[0]["price"]
      }
    end

    # return newMenu
    # menu["menu"]["sections"][0]["items"].map do |beer|
    #   {
    #     brand: beer["brewery"],
    #     name: beer["name"],
    #     style: beer["style"],
    #     abv: beer["abv"],
    #     half_pint: beer["containers"][0]["price"],
    #     pint: beer["containers"][1]["price"]
    #   }
    # end
  end

  def makeRequest(url, authToken)
    con = Faraday.new

    res = con.get do |req|
      req.url url
      req.headers["Authorization"] = "Basic #{authToken}"
    end

    return JSON.parse(res.body)
  end
end
