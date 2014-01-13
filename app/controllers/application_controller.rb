class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_party= party
    session[:party_id] = party.id
    @current_party = party
  end

  def current_user= user
    session[:user_id] = user.id
    @current_user = user
  end

  def current_party
    @current_party ||= Party.where(id: session[:party_id]).take
  end

  def current_user
    @current_user ||= User.where(id: session[:user_id]).take
  end

end
