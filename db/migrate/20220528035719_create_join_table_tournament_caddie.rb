class CreateJoinTableTournamentCaddie < ActiveRecord::Migration[7.0]
  def change
    create_join_table :tournaments, :caddies do |t|
      t.index [:tournament_id, :caddie_id]
      t.index [:caddie_id, :tournament_id]
    end
  end
end
