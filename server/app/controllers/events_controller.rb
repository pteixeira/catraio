class EventsController < ApplicationController
  def index
    secret = ENV['FB_ACCESS_TOKEN']
    app_id = ENV['FB_APP_ID']
    now = Time.now.to_i

    @graph = Koala::Facebook::API.new(secret)
    events_info = @graph.get_connection("#{app_id}", "events", {
      since: now,
      fields: %w(cover attending_count start_time place name description)
    })

    render json: events_info
  end
end
