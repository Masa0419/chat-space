$(function(){
	function buildHTML(message){
    var html = `<div class=user-name>
                  ${message.user_name}
                </div>
                <div class=post-name>
                  ${message.created_at}
                </div>
                <div class=messagebox__list>
                  <div class=messagebox__text>
                    ${message.content}
                  </div>
                </div>`
    return html;
  }

  function scroll(messagebox){
    messagebox.animate({scrollTop: $('.messagebox')[0].scrollHeight},'fast');
  }

	$('#new_message').on('submit', function(e){
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action');

  	$.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
     })
    .done(function(data){
        var html = buildHTML(data);
        $('.messagebox').append(html)
        $('.form__submit').prop('disabled',false);
        scroll($('.messagebox'))
        $('#new_message')[0].reset();
    })
    .fail(function() {
      alert('メッセージを入力してください');
    })
  })
});
