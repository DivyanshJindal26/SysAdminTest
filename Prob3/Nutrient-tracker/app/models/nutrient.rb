class Nutrient < ApplicationRecord
	belongs_to :user
	has_many :ratings
	validates_presence_of :name, :moreOrLess, :goal 
end
