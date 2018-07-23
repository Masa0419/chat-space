 json.content  @message.content
 json.user_id  @message.id
 json.user_name  @message.user.name
 json.created_at simple_time(@message.created_at)
 json.group_id @message.group.id
