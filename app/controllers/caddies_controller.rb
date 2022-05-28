class CaddiesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @caddies = Caddie.all

    render json: @caddies
  end

  def show
    @caddie = Caddie.find(params[:id])
    @tournaments = Caddie.find(params[:id]).tournaments

    render json: {
      "caddie": @caddie,
      "tournaments": @tournaments
    }
  end

  def create
    @caddie = Caddie.create(caddie_params)

    render json: @caddie
  end

  def update
    @caddie = Caddie.find(params[:id])
    @caddie.update(caddie_params)

    render json: "#{@caddie.caddie_name} has been updated!"
  end

  def destroy
    @caddie = Caddie.find(params[:id])
    @caddie.destroy

    render json: "#{@caddie.caddie_name} has been destroyed!"
  end

  private
  def caddie_params
    params.require(:caddie).permit(:caddie_name, :location, :rating)
  end
end