class Rating < ApplicationRecord
	belongs_to :nutrient
	validates_presence_of :rating
	validates_uniqueness_of :nutrient_id, :scope => :date, :message => " already has a rating for on this date."
end
