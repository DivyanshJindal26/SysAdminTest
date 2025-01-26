class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.integer :rating
      t.text :notes
      t.integer :nutrient_id

      t.timestamps
    end
  end
end
