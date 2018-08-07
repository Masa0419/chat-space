if @new_message.present?
  json.array! @new_message do |message|
    json.content message.content
    json.name    message.user.name
    json.image   message.image.url
    json.created_at    simple_time(@message.created_at)
    json.id      message.id
  end
end
