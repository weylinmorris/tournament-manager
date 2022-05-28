class CreateTournaments < ActiveRecord::Migration[7.0]
  def change
    create_table :tournaments do |t|
      t.string :tournament_name
      t.string :course_name
      t.date :date
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
