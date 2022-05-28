class TournamentsController < ApplicationController
  def index
    @tournaments = Tournament.all

    @start_date = params[:start_date]
    @end_date = params[:end_date]

    if @start_date != "" && @start_date != nil
      puts "", @start_date, ""
      @tournaments = @tournaments.select { |tournament| tournament[:date] >= Date.parse(@start_date) }
    end
    if @end_date != "" && @end_date != nil
      puts "", @end_date, ""
      @tournaments = @tournaments.select { |tournament| tournament[:date] <= Date.parse(@end_date) }
    end
  end

  def show
    @tournament = Tournament.find(params[:id])
    @tournament_caddies = Tournament.find(params[:id]).caddies

    # TODO: There must be an interface that'll make this cleaner, but I can't find it
    @other_caddies = Caddie.all.select{ |caddie| !@tournament_caddies.include? caddie }
  end

  def new
    @tournament = Tournament.new
  end

  def create
    @tournament = Tournament.new(tournament_params)

    if @tournament.save
      redirect_to @tournament
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @tournament = Tournament.find(params[:id])
  end

  def update
    @tournament = Tournament.find(params[:id])

    if @tournament.update(tournament_params)
      redirect_to @tournament
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def add_caddie
    @tournament = Tournament.find(params[:tournament_id])
    @caddie = Caddie.find(params[:caddie_id])

    @tournament.caddies << @caddie

    redirect_to @tournament
  end

  def remove_caddie
    @tournament = Tournament.find(params[:tournament_id])
    @caddie = Caddie.find(params[:caddie_id])

    @tournament.caddies.delete(@caddie)

    redirect_to @tournament
  end

  def destroy
    @tournament = Tournament.find(params[:id])
    @tournament.destroy

    redirect_to root_path, status: :see_other
  end

  private
  def tournament_params
    params.require(:tournament).permit(:tournament_name, :course_name, :date, :start_time, :end_time)
  end
end
