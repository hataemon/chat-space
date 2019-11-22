$(function(){



  var buildMessgeInContentAndImage = function(message) {
    return `${
      (message.content)? (
        `<p class="lower-message__content">` +
          message.content +
        `</p>`
      ) : ''
    }` 
     '<div class="message" data-id=` + message.id + '>'' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          `</div>` +
          `<div class="upper-message__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="lower-message">` +
          (message.content)? (`<p class="lower-message__content">` +
            message.content +
          `</p>`) : '' +
          (`<img src="` + message.image.url + `" class="lower-message__image" >`) +
        `</div>` +
      `</div>`
  }

  var buildMessgeInContentAndImage = function(message) {
    return `${
      (message.content)? (
        `<p class="lower-message__content">` +
          message.content +
        `</p>`
      ) : ''
    }` 
      var html = `<div class="message" data-id=` + message.id + `>` +
      `<div class="upper-message">` +
          `<div class="upper-message__user-name">` +
            message.user_name +
          `</div>` +
          `<div class="upper-message__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="lower-message">` +
          `<p class="lower-message__content">` +
            message.content +
          `</p>` +
        `</div>` +
      `</div>`
    } else if (message.image.url) {
      //同様に、data-idが反映されるようにしている
      var html = `<div class="message" data-id=` + message.id + `>` +
        `<div class="upper-message">` +
          `<div class="upper-message__user-name">` +
            message.user_name +
          `</div>` +
          `<div class="upper-message__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="lower-message">` +
          `<img src="` + message.image.url + `" class="lower-message__image" >` +
        `</div>` +
      `</div>`
    };
    return html;
  };

message.js
 
$(function() {


  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = ※※※
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: ※※※,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる

      //メッセージが入ったHTMLを取得

      //メッセージを追加

    })
    .fail(function() {
      console.log('alert');
    });
  };
});