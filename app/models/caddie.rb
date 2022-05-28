class Caddie < ApplicationRecord
  has_and_belongs_to_many :tournaments

  validates :caddie_name, presence: true
  validates :location, presence: true
  validates :rating, presence: true
end
