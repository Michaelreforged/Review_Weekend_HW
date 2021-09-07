class Api::ComputersController < ApplicationController
  
  def index
    render json: Computer.all
  end

  def show

  end

  def new
  end

  def create
  end

  def update
  end

  def delete
  end

end
