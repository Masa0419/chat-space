json.messages @messages.each do |message|
  json.name     message.user.name
  json.date     simple_time(@message.created_at)
  json.body     message.body
  json.image    message.image
  json.id       message.id
end
