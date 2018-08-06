if @new_message.present?
  json.array! @new_message do |message|
    json.content message.content
    json.name    message.user.name
    json.image   message.image.url
    json.date    message.created_at.to_s(:datetime)
    json.id      message.id
  end
end
