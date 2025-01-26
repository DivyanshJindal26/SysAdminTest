class CreateNutrients < ActiveRecord::Migration[5.1]
  def change
    create_table :nutrients do |t|
      t.string :name
      t.string :moreOrLess
      t.text :goal
      t.integer :user_id

      t.timestamps
    end
  end
end
