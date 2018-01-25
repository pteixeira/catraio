require 'base64'
require 'faraday'
require 'hashie'
require 'json'

class TapsController < ApplicationController

  def index
    render json: Untappd.new.menu
  end

end
