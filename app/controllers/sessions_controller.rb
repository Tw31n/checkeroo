class SessionsController < ApplicationController
  def create
    self.current_user  = User.where(name: params[:user_name]).first_or_create
    self.current_party = User.where(name: params[:party_name]).first_or_create
    head :no_content
  end
end
