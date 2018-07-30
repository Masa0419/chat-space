$(function(){
	function buildHTML(message){
    var img = message.image ? `<img src= ${message.image}>` : "";
    var html = `<div class=messagebox>
                  <div class=user-name>
                    ${message.user_name}
                  </div>
                  <div class=post-time>
                    ${message.created_at}
                  </div>
                  <div class=messagebox__list>
                    <div class=messagebox__text>
                      ${message.content}
                    </div>
                    ${ img }
                  </div>
                </div>`
    return html;
  }

  function scroll(){
    $('.message__main').animate({scrollTop: $('.message__main')[0].scrollHeight},'fast');
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
      $('.message__main').append(html)
      $('.form__submit').attr('disabled', false);
      $('.new_message')[0].reset();
      scroll()
    })
    .fail(function() {
      alert('error');
      $('.form__submit').attr('disabled', false);
      $('.new_message')[0].reset();
    })
  })
});
