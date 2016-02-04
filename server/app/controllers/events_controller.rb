class EventsController < ApplicationController
  def index
    secret = ENV['FB_ACCESS_TOKEN']
    app_id = ENV['FB_APP_ID']

    @graph = Koala::Facebook::API.new(secret)
    events_info = @graph.get_connection("#{app_id}", "events", {
      fields: %w(cover attending_count start_time place name description)
    })

    render json: {"data": events_info}
  end
end
