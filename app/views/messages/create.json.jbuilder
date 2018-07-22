 json.text  @comment.text
 json.user_id  @comment.user.id
 json.user_name  @comment.user.nickname
 json.created_at simple_time(@message.created_at)
 json.group_id @message.group.id
