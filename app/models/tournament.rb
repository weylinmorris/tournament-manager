class Tournament < ApplicationRecord
  has_and_belongs_to_many :caddies

  validates :tournament_name, presence: true
  validates :course_name, presence: true
  validates :date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
