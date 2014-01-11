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
    @current_party ||= Party.find(session[:party_id])
  end

  def current_user
    @current_user ||= User.find(session[:user_id])
  end

end
