require 'rails_helper'

RSpec.describe Tournament, :type => :model do
  it "is valid with valid attributes" do
    expect(Tournament.new(
      tournament_name: "Tournament 1",
      course_name: "Course 1",
      date: "2022-11-15",
      start_time: "08:00:00",
      end_time: "11:00:00"
    )).to be_valid
  end

  it "is not valid without a tournament_name" do
    expect(Tournament.new(
      tournament_name: nil,
      course_name: "Course 1",
      date: "2022-11-15",
      start_time: "08:00:00",
      end_time: "11:00:00"
    )).to_not be_valid
  end

  it "is not valid without a course_name" do
    expect(Tournament.new(
      tournament_name: "Tournament 1",
      course_name: nil,
      date: "2022-11-15",
      start_time: "08:00:00",
      end_time: "11:00:00"
    )).to_not be_valid
  end

  it "is not valid without a date" do
    expect(Tournament.new(
      tournament_name: "Tournament 1",
      course_name: "Course 1",
      date: nil,
      start_time: "08:00:00",
      end_time: "11:00:00"
    )).to_not be_valid
  end

  it "is not valid without a start_time" do
    expect(Tournament.new(
      tournament_name: "Tournament 1",
      course_name: "Course 1",
      date: "2022-11-15",
      start_time: nil,
      end_time: "11:00:00"
    )).to_not be_valid
  end

  it "is not valid without an end_time" do
    expect(Tournament.new(
      tournament_name: "Tournament 1",
      course_name: "Course 1",
      date: "2022-11-15",
      start_time: "08:00:00",
      end_time: nil
    )).to_not be_valid
  end
end
