class Api::ComputersController < ApplicationController
  
  def index
    render json: Computer.all.order(:id)
  end

  def create
    computer = Computer.new(computers_params)
    if (computer.save)
      render json:computer
    else
      
    end
  end

  def update
    @computer = Computer.find(params[:id])
    if (@computer.update(computers_params))
      render json: @computer
    else
    end

  end

  def destroy
    @computer = Computer.find(params[:id])
    render json: @computer.destroy
  end

  private 
  def computers_params 
    params.require(:computer).permit(:owner,:purpose,:os)
  end


end
