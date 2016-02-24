class TapsController < ApplicationController
  before_action :authenticate, except: %w(index)

  def index
    taps = Tap.all

    render json: Hash[taps.map(&:id).zip(taps)]
  end

  def create
    tap = Tap.create(tap_params)

    render json: tap
  end

  def update
    tap = Tap.find(params[:id])

    tap.update!(tap_params)

    render json: tap
  end

  def move
    tap = Tap.find(move_params[:id])

    if order = move_params[:action]
      case order
      when "move_up"
        tap.move_higher
      when "move_down"
        tap.move_lower
      end
    end

    taps = Tap.all

    render json: Hash[taps.map(&:id).zip(taps)]
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

  def move_params
    params.require(:tap).permit(:id, :action)
  end
end
