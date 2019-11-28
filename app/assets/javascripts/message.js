$(function(){


  // $.ajax({
  //   url: 取得したリクエストURL,  //同期通信でいう『パス』
  //   type: 'POST',  //同期通信でいう『HTTPメソッド』
  //   data: 取得したFomeData,  
  //   dataType: 'json',
  //   processData: false,
  //   contentType: false
  // })

  var buildMessgeInContentAndImage = function(message) {
    return '${
      (message.content)? (
        '<p class="lower-message__content">'
          message.content 
        '</p>'
      ):
    }
     '<div class="message" data-id=' + message_id'>' +
        '<div class="upper-message">'  +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.created_at 
          '</div>' 
        '</div>'
        '<div class="lower-message">' +
          (message.content)? ('<p class="lower-message__content">' +
          //  message.content 
          `</p>`) : '' +
          ('<img src="  + message.image.url + " class="lower-message__image" >')  +
        '</div>' +
      '</div>' +
  }

  var buildMessgeInContentAndImage = function(message) {
    return '${
      (message.content)? (
        '<p class="lower-message__content">' +
          message.content +
        '</p>' +
      ) :
    }
      var html = '<div class="message" data-id=' +  message.id + '>' +
            '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.created_at + 
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<p class="lower-message__content">' +
            message.content +
          '</p>' +
        '</div>' +
      '</div>'
    } else if (message.image.url) {
  
      var html = '<div class="message" data-id=' message.id +  ''>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name + 
          '</div>' +
          '<div class="upper-message__date">' +
            message.created_at + 
          '</div>' +
        '</div>' +
        '<div class="lower-message">'
          '<img src="' + message.image.url + " class="lower-message__image" >' +
        '</div>' +
      '</div>'
    };
    return html;
  }

message.js
 
$(function() {


  var reloadMessages = function() {
    last_message_id = $(".message").data("message_id")
    $.ajax({
      url: app/messages,
      type: 'get',
      dataType: 'json',
      data: {;Last_id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      insertHTML = buildHTML(message);  
      $('.messages').append(insertHTML);
    })
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');/
    .fail(function() {
      alert('自動更新に失敗しました');//ダメだったらアラートを出す
      });
     }
  };  
    setInterval(reloadMessages, 5000);
  });
});



// console.log('alert');
// $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');/