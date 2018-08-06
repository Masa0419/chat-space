if @new_message.present?
  json.array! @new_message do |message|
    json.text  message.text
    json.user_name message.user.name
    json.created_at l message.created_at, format: :long
    json.image message.image.url
    json.id message.id
  end
end
