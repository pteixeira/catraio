# == Schema Information
#
# Table name: beers
#
#  id         :integer          not null, primary key
#  brand      :string
#  name       :string
#  style      :string
#  abv        :float
#  country    :string
#  city       :string
#  string     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BeersController < ApplicationController

  def index
    beers = Beer.all

    render json: beers
  end

  def create
    beer = Beer.create(beer_params)

    render json: beer
  end

  def update
    beer = Beer.find(params[:id])
    beer.update(beer_params)

    render json: beer.reload
  end

  def destroy
    Beer.destroy(params[:id])

    render json: {}
  end

  private

  def beer_params
    params.require(:beer).permit(
      :brand,
      :name,
      :style,
      :abv,
      :country,
      :city
    )
  end
end
