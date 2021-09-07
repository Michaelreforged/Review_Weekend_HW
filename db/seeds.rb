# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Part.delete_all
Computer.delete_all

c1 = Computer.create(owner: "Michael", purpose: "Gaming", os:"Windows")
c2 = Computer.create(owner: "Angela", purpose: "Content Consumption", os:"Windows")
c3 = Computer.create(owner: "Monica", purpose: "Work", os:"Mac OS")

c1p1 = c1.parts.create(name: "32GB Ram")
c1p2 = c1.parts.create(name: "Ryzen 5900X")
c2p1 = c1.parts.create(name: "8GB Ram")
c2p2 = c1.parts.create(name: "Intel I3 7300")
c3p1 = c1.parts.create(name: "16GB Ram")
c3p2 = c1.parts.create(name: "M1 Silicon")

puts "seeded Computer size: #{Computer.all.size}"
puts "seeded Part size: #{Part.all.size}"