require 'rails_helper'

RSpec.describe Caddie, :type => :model do
  it "is valid with valid attributes" do
    expect(Caddie.new(
      caddie_name: "Caddie 1",
      location: "Idaho",
      rating: 5
    )).to be_valid
  end

  it "is not valid without a caddie_name" do
    expect(Caddie.new(
      caddie_name: nil,
      location: "Idaho",
      rating: 5
    )).to_not be_valid
  end

  it "is not valid without a location" do
    expect(Caddie.new(
      caddie_name: "Caddie 1",
      location: nil,
      rating: 5
    )).to_not be_valid
  end

  it "is not valid without a rating" do
    expect(Caddie.new(
      caddie_name: "Caddie 1",
      location: "Idaho",
      rating: nil
    )).to_not be_valid
  end
end
