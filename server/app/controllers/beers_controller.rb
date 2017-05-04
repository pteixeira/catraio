class BeersController < ApplicationController

  # Integrate with Untappd API ?
  # Or just add menu
  def index
    render json: { beers: "SOON"}
  end
end
