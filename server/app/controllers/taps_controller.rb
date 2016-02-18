class TapsController < ApplicationController
  before_action :authenticate, except: %w(index)

  def index
    taps = Tap.order(position: "asc").all

    render json: taps
  end

  def create
    tap = Tap.create(tap_params)

    render json: tap
  end

  def update
    tap = Tap.find(params[:id])
    tap.update!(tap_params)

    if (params[:action])
      case params[:action]
      when "move_up"
        tap.move_higher
      when "move_down"
        tap.move_lower
      end
    end

    render json: tap
  end

  def destroy
    Tap.destroy(params[:id])

    render json: {}
  end

  private

  def tap_params
    params.require(:tap).permit(
      :brand,
      :name,
      :style,
      :abv,
      :country,
      :city,
      :half_price,
      :full_price
    )
  end
end
