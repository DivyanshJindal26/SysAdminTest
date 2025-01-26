class AddDateColumnToRating < ActiveRecord::Migration[5.1]
  def change
  	add_column :ratings, :date, :date
  end
end
