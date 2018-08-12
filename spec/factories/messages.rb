FactoryBot.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/no_image.jpg")
    user
    group
  end
end
