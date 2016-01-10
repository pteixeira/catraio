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
    @beers = Beer.all

    render json: @beers
  end

  def show
    @beer = Beer.find(params[:id])

    render json: @beer
  end

end
