class Untappd

  def initialize
    @authToken = Base64.strict_encode64("#{ENV["UNTAPPD_BUSINESS_EMAIL"]}:#{ENV["UNTAPPD_BUSINESS_READ_TOKEN"]}")
  end

  def menu
    url = "https://business.untappd.com/api/v1/menus/#{ENV["UNTAPPD_BUSINESS_MENU_ID"]}?full=true"

    format_menu(get(url))
  end

  def events
    url = "https://business.untappd.com/api/v1/locations/#{ENV["UNTAPPD_BUSINESS_VENUE_ID"]}/events"

    get(url)
  end

  private
  def get(url)
    conn = Faraday.new

    res = conn.get do |req|
      req.url url
      req.headers["Authorization"] = "Basic #{@authToken}"
    end

    return JSON.parse(res.body)
  end

  def format_menu(menu)
    # usar https://github.com/intridea/hashie#deeplocate
    menu.extend(Hashie::Extensions::DeepLocate)

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
        abv: beer["abv"],
        pint: containers["Pint"],
        halfPint: containers["1/2 Pint"],
      }
    end

  end

end
