class CaddiesController < ApplicationController
  def index
    @caddies = Caddie.all
  end

  def show
    @caddie = Caddie.find(params[:id])
    @tournaments = Caddie.find(params[:id]).tournaments
  end

  def new
    @caddie = Caddie.new
  end

  def create
    @caddie = Caddie.new(caddie_params)

    if @caddie.save
      redirect_to @caddie
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @caddie = Caddie.find(params[:id])
  end

  def update
    @caddie = Caddie.find(params[:id])

    if @caddie.update(caddie_params)
      redirect_to @caddie
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @caddie = Caddie.find(params[:id])
    @caddie.destroy

    redirect_to root_path, status: :see_other
  end

  private
  def caddie_params
    params.require(:caddie).permit(:caddie_name, :location, :rating)
  end
end