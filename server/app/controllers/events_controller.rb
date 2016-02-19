class EventsController < ApplicationController
  def index
    events = getEvents("since")

    render json: events
  end

  def pastevents
    events = getEvents("until")

    render json: events
  end

  def getEvents(timeframe)
    secret = ENV['FB_ACCESS_TOKEN']
    app_id = ENV['FB_APP_ID']
    now = Time.now.to_i

    @graph = Koala::Facebook::API.new(secret)
    events_info = @graph.get_connection("#{app_id}", "events", {
      limit: 10,
      "#{timeframe}": now,
      fields: %w(cover attending_count start_time place name description)
    })
  end
end
