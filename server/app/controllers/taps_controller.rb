class TapsController < ApplicationController
  def index
    taps = Tap.rank(:position).all

    render json: taps
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

  def destroy
    Tap.destroy(params[:id])

    render head: :ok
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
      :full_price,
      :position
    )
  end
end
