# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

caddies = Caddie.create(caddie_name: "Caddie 1", location: "Idaho", rating: 5),
  Caddie.create(caddie_name: "Caddie 2", location: "New York", rating: 4),
  Caddie.create(caddie_name: "Caddie 3", location: "California", rating: 3)

tournaments = Tournament.create(tournament_name: "Tournament 1",
                                course_name: "Course 1",
                                date: "2022-11-05",
                                start_time: "08:00:00",
                                end_time: "11:00:00"),
  Tournament.create(tournament_name: "Tournament 2",
                    course_name: "Course 2",
                    date: "2022-11-07",
                    start_time: "08:00:00",
                    end_time: "11:00:00"),
  Tournament.create(tournament_name: "Tournament 3",
                    course_name: "Course 3",
                    date: "2022-11-08",
                    start_time: "08:00:00",
                    end_time: "11:00:00")

caddie = Caddie.first
tournament = Tournament.first

caddie.tournaments << tournament
