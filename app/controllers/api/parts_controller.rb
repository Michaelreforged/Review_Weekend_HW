class Api::PartsController < ApplicationController
  before_action :set_computer
  before_action :set_part, only:[:update,:destroy]
  def index
    render component: "Parts", props:{computer:@computer, part: @computer.parts}
  end
  
  private

  def parts_params
    params.require(:part).permit(:name)
  end

  def set_computer
    @computer = Computer.find(params[:computer_id])
  end

  def set_part
    @part = Part.find(params[:id])
  end
end
