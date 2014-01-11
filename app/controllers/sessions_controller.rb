class SessionsController < ApplicationController
  def create
    self.current_user  = User.where(login: params[:user_name]).first_or_create
    self.current_party = Party.where(name: params[:party_name]).first_or_create
    Participant.where(user: current_user, party: current_party).first_or_create
    head :no_content
  end
end
