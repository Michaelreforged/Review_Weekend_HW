class Api::ComputersController < ApplicationController
  before_action :set_computer, only:[:update, :destroy]

  def index
    render json: Computer.all.order(:id)
  end

  def create
    computer = Computer.new(computers_params)
    if (computer.save)
      render json: computer
    else
      
    end
  end

  def update
    if (@computer.update(computers_params))
      render json: @computer
    else
    end

  end

  def destroy
    render json: @computer.destroy
  end

  private 
  def computers_params 
    params.require(:computer).permit(:owner,:purpose,:os)
  end

  def set_computer
    @computer = Computer.find(params[:id])
  end
end
