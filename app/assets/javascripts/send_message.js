$(function(){
  function buildHTML(message){
    var content = message.content ?  `${ message.content }` : ''
    var img = message.image ? `<img src= ${message.image}>` : "";
    var html = `<div class= 'messagebox' data-id= ${message.id}>
                  <div class=user-name>
                    ${message.user_name}
                  </div>
                  <div class=post-time>
                    ${message.created_at}
                  </div>
                  <div class=messagebox__list>
                    <div class=messagebox__text>
                    ${content}
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
  $(function(){
    setInterval(update, 5000);
  });
   function update(){
    if (window.location.pathname.match(/\/groups\/\d+\/messages/)) {
      if($('.message__main')[0]){
        var message_id = $('.messagebox:last').data('id') || 0;
      }
      $.ajax({
       url: location.pathname,
       type: 'GET',
       data: {
        message: { id: message_id }
       },
       dataType: 'json'
      })
      .always(function(messages){
        if (messages.length > 0){
          messages.forEach(function(message){
            var html = buildHTML(message);
            $('.message__main').append(html)
            scroll();
          });
        }
      });
    }
    else {
      clearInterval(interval)
    }
  }
});
