class TournamentsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @tournaments = Tournament.all
    @date = params[:date]

    if @date != "" && @date != nil
      @tournaments = @tournaments.select { |tournament| tournament[:date] == Date.parse(@date) }
    end

    render json: @tournaments
  end

  def show
    @tournament = Tournament.find(params[:id])
    @tournament_caddies = Tournament.find(params[:id]).caddies

    # TODO: There must be an interface that'll make this cleaner, but I can't find it
    @other_caddies = Caddie.all.select{ |caddie| !@tournament_caddies.include? caddie }

    render json: {
      "tournament"         => @tournament,
      "tournament_caddies" => @tournament_caddies,
      "other_caddies"      => @other_caddies
    }
  end

  def create
    @tournament = Tournament.create(tournament_params)

    render json: @tournament
  end

  def update
    puts "Updating tournament"
    puts params

    @tournament = Tournament.find(params[:id])
    @tournament.update(tournament_params)

    render json: "#{@tournament.tournament_name} has been updated!"
  end

  def add_caddie
    @tournament = Tournament.find(params[:tournament_id])
    @caddie = Caddie.find(params[:caddie_id])

    @tournament.caddies << @caddie
  end

  def remove_caddie
    @tournament = Tournament.find(params[:tournament_id])
    @caddie = Caddie.find(params[:caddie_id])

    @tournament.caddies.delete(@caddie)
  end

  def destroy
    @tournament = Tournament.find(params[:id])
    @tournament.destroy

    render json: "#{@tournament.tournament_name} has been destroyed!"
  end

  private
  def tournament_params
    params.require(:tournament).permit(:tournament_name, :course_name, :date, :start_time, :end_time)
  end
end
