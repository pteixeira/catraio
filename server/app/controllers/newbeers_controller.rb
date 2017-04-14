require 'base64'
require 'net/https'
require 'uri'
require 'json'

class NewbeersController < ApplicationController
  # def index
  #   events = getEvents("since")

  #   render json: events
  # end

  def index
    authToken = Base64.encode64("#{ENV['UNTAPPD_EMAIL']}:#{ENV['UNTAPPD_READ_TOKEN']}")

    # create base64 token to use in Authorization header -> <email>:<token> | base64
    # Get location associated with the account
    # Get menus in location
    # Get menus information
    locationsUrl = "https://business.untappd.com/api/v1/locations"
    locations = makeRequest(locationsUrl, authToken)
    locationId = locations["locations"][0]["id"]

    # menus
    menusUrl = "https://business.untappd.com/api/v1/locations/#{locationId}/menus"
    menusFromServer = makeRequest(menusUrl, authToken)
    menus = menusFromServer["menus"]

    menusIds = []
    menus.each { |menu|
      menusIds.push(menu["id"])
    }

    menuContent = []
    # make as many requests as menus (?!)
    menusIds.each { |id|
      # full = true -> get all info from a menu
      menuUrl = "https://business.untappd.com/api/v1/menus/#{id}?full=true"
      menu = makeRequest(menuUrl, authToken)
      menuContent.push(menu)
    }

    render json: menuContent
  end

  def makeRequest(url, authToken)
    uri = URI.parse(url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.start
    request = Net::HTTP::Get.new(uri.request_uri)
    request.add_field("Authorization", "Basic #{authToken}")
    body = http.request(request).body
    return JSON.parse(body)
  end

  def getEvents(timeframe)
    # secret = ENV['FB_ACCESS_TOKEN']
    # app_id = ENV['FB_APP_ID']
    # now = Time.now.to_i

    # @graph = Koala::Facebook::API.new(secret)
    # events_info = @graph.get_connection("#{app_id}", "events", {
    #   limit: 10,
    #   "#{timeframe}": now,
    #   fields: %w(cover attending_count start_time place name description)
    # })
  end
end
