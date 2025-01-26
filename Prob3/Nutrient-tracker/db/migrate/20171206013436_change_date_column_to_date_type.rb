class ChangeDateColumnToDateType < ActiveRecord::Migration[5.1]
  def change
  	change_column :ratings, :date, :date
  end
end
