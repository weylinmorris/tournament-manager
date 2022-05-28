class CreateCaddies < ActiveRecord::Migration[7.0]
  def change
    create_table :caddies do |t|
      t.string :caddie_name
      t.string :location
      t.integer :rating

      t.timestamps
    end
  end
end
