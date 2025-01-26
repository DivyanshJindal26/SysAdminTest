class ChangeDateColumnToString < ActiveRecord::Migration[5.1]
  def self.up
  	change_column :ratings, :date, :string
  end
  def self.down
  	change_column :ratings, :date, :date
  end
end
