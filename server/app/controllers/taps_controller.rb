require 'base64'
require 'faraday'
require 'hashie'
require 'json'

class TapsController < ApplicationController
  def index
    # create base64 token to use in Authorization header -> <email>:<token> | base64
    authToken = Base64.encode64("#{ENV["UNTAPPD_BUSINESS_EMAIL"]}:#{ENV["UNTAPPD_BUSINESS_READ_TOKEN"]}")

    # full = true -> get all info from a menu
    menuUrl = "https://business.untappd.com/api/v1/menus/#{ENV["UNTAPPD_BUSINESS_MENU_ID"]}?full=true"
    menu = makeRequest(menuUrl, authToken)
    formattedMenu = formatMenu(menu)

    render json: formattedMenu
  end

  def formatMenu(menu)
    # usar https://github.com/intridea/hashie#deeplocate
    menu.extend(Hashie::Extensions::DeepLocate)

    # maintain this until we figure out how information is getting on untappd
    #newMenu = menu.deep_locate -> (key, value, object) {
    #  key == "description" && value.include?("Draft")
    #}

    return menu["menu"]["sections"][0]["items"].map do |beer|
      beer.extend(Hashie::Extensions::DeepLocate)

      containerInfo = beer.deep_locate -> (k, v, o) {
        k == "container_size"
      }

      containers = {}
      containerInfo.map do |container|
        key = container["container_size"]["name"]
        value = container["price"]
        containers["#{key}"] = value
      end

      {
        brand: beer["brewery"],
        name: beer["name"],
        style: beer["style"],
        abv: beer["abv"]
      }.merge(containers)
    end

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
