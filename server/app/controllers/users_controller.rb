class UsersController < ApplicationController
  before_action :authenticate
  def me
    if current_user
      render json: {"email": current_user.email}
    else
      render json: {}, status: :unauthorized
    end
  end
end
