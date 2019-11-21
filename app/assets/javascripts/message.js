$(function(){


function buildPost(message){
 var html = '<div class = "content">
              ${message.text}
              </div>'
 return html;
}

  $('.new_message').on('submit', function(e){
    e.preventDefault(e);
    console.log("イベント発火")
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
     var html = buildPost(message);
     $('.contents').append(html)
     $('#message?text').val('')
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");

    })
  })
})







// $(function(){
//   $(*****).on(*****, function(){
//     e.preventDefault()
//     console.log(2020)　// console.logを用いてイベント発火しているか確認
//   })
// })