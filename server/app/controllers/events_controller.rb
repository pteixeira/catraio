class EventsController < ApplicationController

  def index
    render json: Untappd.new.events["events"].select{ |ev| ev["id"].to_s == "195300" }
  end

end
