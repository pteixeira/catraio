class EventsController < ApplicationController
  def index
    render json: get_events(:future)
  end

  def past_events
    render json: get_events(:past)
  end

  def get_events(timeframe)
    graph = Koala::Facebook::API.new(ENV['FB_ACCESS_TOKEN'])
    now = Time.now
    delta = 3

    events = graph.get_connection(ENV['FB_APP_ID'], "events", {
      limit: 5,
      since: timeframe == :future ? now.to_i                  : (now - delta.months).to_i,
      until: timeframe == :future ? (now + delta.months).to_i : now.to_i,
      fields: %w(cover attending_count start_time place name description cursor)
    })

    events
  end
end
