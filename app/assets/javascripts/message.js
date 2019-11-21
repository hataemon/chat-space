$(function(){


function buildPost(message){
 var html = '<div class = "content">
              ${message.text}
              </div>'
 return html;
}

  $('.new_message').on('submit', function(e){
    e.preventDefault(e);
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  
      type: 'POST', 
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    function resetForm(message){
      document.getElementById('.contents').submit();
    }
    function resetForm(message){
     document.getElementById('#message_text').submit();
    }

    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
})