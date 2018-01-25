class EventsController < ApplicationController

  def index
    render json: Untappd.new.events["events"]
  end

end
