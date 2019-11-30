$(function () {

  function buildHTML(message){

    image = (message.image) ? `<img class= "lower-message__image" src="${message.image}" >` : ""; 

    var html = `<div class="message" data-id="${message.id}"> 
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-meesage">
            <p class="lower-message__content">
              ${message.content}
            </p>
            ${image}
          </div>
        </div>`
    return html;
  }
    $('#new_message').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action');
        $('.form__submit').removeAttr('data-disable-with');
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,

        })
        .done(function(messages){
          var html = buildHTML(messages);
          $('.messages').append(html);
          $('#new_message')[0].reset();
          $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
          return false
        })
        
        .fail(function(data){
          alert('エラーが発生したためメッセージは送信できませんでした。');
        })
        
        .always(function(data){
          $('.form__submit').prop('disabled', false);
        })
      });

        var reloadMessages = function (){
          if (window.location.href.match(/\/groups\/\d+\/messages/)){
          var last_message_id = $('.message:last').data("id") || 0;
          $.ajax({
            url: "api/messages",
            type: 'GET',
            dataType: 'json', 
            data: {id: last_message_id}
          }
          )
          .done(function (messages){
            console.table(messages)
            var insertHTML = '';
          messages.forEach(function(message){
            if (message.id > last_message_id )
            insertHTML = buildHTML(message);
            $('.messages').append(insertHTML);
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
          })
        })
        .fail(function (){
          alert('自動更新に失敗しました');
        });
      };
    }
    setInterval(reloadMessages, 7000);
}); 























































































































































// $(function(){


//  function buildHTML(message){
//    var content = message.content?`${message.content}` : "" ;
//    var image= message.image?`<img src= ${message.contentid}>` : ""
//    var html= `<div class="message" data-message-id = ${message.id}>
//               <div class="message__upper-info">
//               <div class="message__upper-info__talker>"
//               ${message.user_name}
//               </div>
//               <div class=" message__upper__date">
//              < ${message.created_at}
//              </div>
//              </div>
//             <div class="message_text">
//             </div>
//             </div>
//             <div class="message_text">
//             <p class="message_text">
            
//             <p class="message_text__content">
//                <div>
//               ${content}
//               </div>
//               ${image}
//            </p>

//            </div>
//            </div>`
// return html;
//  } 
 
//   console.log(content)
  
  
//   var buildMessgeInContentAndImage = function(message) {
//     return '${
//       (message.content)? (
//         '<p class="lower-message__content">'
//           message.content 
//         '</p>'
//       ) : ''
//     }' 
//      '<div class="message" data-id= message.id  >
//         <div class="upper-message">
//           '<div class="upper-message__user-name">' 
//             message.user_name 
//           '</div>'
//           '<div class="upper-message__date">' 
//             message.created_at 
//           '</div>' 
//         '</div>` 
//         '<div class="lower-message">'
//           (message.content)? ('<p class="lower-message__content">'
//             message.content 
//           `</p>`) : '' 
//           ('<img src="' + message.image.url  ''" class="lower-message__image" >') 
//         '</div>'
//       '</div>
//   }



//   var buildMessgeInContentAndImage = function(message) {
//     return '${
//       (message.content)? (
//         '<p class="lower-message__content">' 
//           message.content 
//         '</p>'
//       ) : ''
//     }'
//       var html = '<div class="message" data-id='  message.id  '>'
//             '<div class="upper-message">'
//           '<div class="upper-message__user-name">'
//             message.user_name 
//           '</div>'
//           '<div class="upper-message__date">'
//             message.created_at 
//           '</div>'
//         '</div>'
//         '<div class="lower-message">'
//           '<p class="lower-message__content">'
//             message.content
//           '</p>'
//         '</div>'
//       '</div>'
//     } else if (message.image.url) {
  
//       var html = '<div class="message" data-id=' message.id  ''>'
//         '<div class="upper-message">'
//           '<div class="upper-message__user-name">'
//             message.user_name 
//           '</div>'
//           '<div class="upper-message__date">'
//             message.created_at 
//           '</div>'
//         '</div>'
//         '<div class="lower-message">'
//           '<img src="' message.image.url  ''" class="lower-message__image" >'
//         '</div>'
//       '</div>'
//     };
//     return html;
//   };



// // #自動更新

// $(function() {
//   var reloadMessages = function() {
//     last_message_id = ※※※
//     $.ajax({
//       url: ※※※,
//       type: 'get',
//       dataType: 'json',
//       data: {id: last_message_id}
//     })
//     .done(function(messages) {
//       var insertHTML = '';
//     })
//     .fail(function() {
//       console.log('alert');
//     });
//   };
// });


// ____________________________________________________________

// // $(function(){


// //   // $.ajax({
// //   //   url: 取得したリクエストURL,  //同期通信でいう『パス』
// //   //   type: 'POST',  //同期通信でいう『HTTPメソッド』
// //   //   data: 取得したFomeData,  
// //   //   dataType: 'json',
// //   //   processData: false,
// //   //   contentType: false
// //   // })

// //   var buildMessgeInContentAndImage = function(message) {
// //     return '${
// //       (message.content)? (
// //         '<p class="lower-message__content">'
// //           message.content 
// //         '</p>'
// //       ):
// //     }
// //      '<div class="message" data-id=' + message_id'>' +
// //         '<div class="upper-message">'  +
// //           '<div class="upper-message__user-name">' +
// //             message.user_name +
// //           '</div>' +
// //           '<div class="upper-message__date">' +
// //             message.created_at 
// //           '</div>' 
// //         '</div>'
// //         '<div class="lower-message">' +
// //           (message.content)? ('<p class="lower-message__content">' +
// //           //  message.content 
// //           `</p>`) : '' +
// //           ('<img src="  + message.image.url + " class="lower-message__image" >')  +
// //         '</div>' +
// //       '</div>' +
// //   }

// //   var buildMessgeInContentAndImage = function(message) {
// //     return '${
// //       (message.content)? (
// //         '<p class="lower-message__content">' +
// //           message.content +
// //         '</p>' +
// //       ) :
// //     }
// //       var html = '<div class="message" data-id=' +  message.id + '>' +
// //             '<div class="upper-message">' +
// //           '<div class="upper-message__user-name">' +
// //             message.user_name +
// //           '</div>' +
// //           '<div class="upper-message__date">' +
// //             message.created_at + 
// //           '</div>' +
// //         '</div>' +
// //         '<div class="lower-message">' +
// //           '<p class="lower-message__content">' +
// //             message.content +
// //           '</p>' +
// //         '</div>' +
// //       '</div>'
// //     } else if (message.image.url) {
  
// //       var html = '<div class="message" data-id=' message.id +  ''>' +
// //         '<div class="upper-message">' +
// //           '<div class="upper-message__user-name">' +
// //             message.user_name + 
// //           '</div>' +
// //           '<div class="upper-message__date">' +
// //             message.created_at + 
// //           '</div>' +
// //         '</div>' +
// //         '<div class="lower-message">'
// //           '<img src="' + message.image.url + " class="lower-message__image" >' +
// //         '</div>' +
// //       '</div>'
// //     };
// //     return html;
// //   }



// // $(function() {


// //   var reloadMessages = function() {
// //     last_message_id = 
// //     $.ajax({
// //       url: 
// //       type: 'get',
// //       dataType: 'json',
// //       data: {;Last_id: last_message_id}
// //     })
// //     .done(function(messages) {
// //       var insertHTML = '';
// //       insertHTML = buildHTML(message);  
// //       $('.messages').append(insertHTML);
// //     })
// //     $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');/
// //     .fail(function() {
// //       alert('自動更新に失敗しました');//ダメだったらアラートを出す
// //       });
// //      }
// //   };  
// //     setInterval(reloadMessages, 5000);
// //   });
// // });



// // console.log('alert');
// // $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');/


// // 

// // function buildHTML(message){
// //   // 「もしメッセージに画像が含まれていたら」という条件式
// //   if (message.image) {
// //     // var html =  buildHTML(data); <p class = user-image">                                                          //メッセージに画像が含まれる場合のHTMLを作る
// //   } else {
// //     var html = buildHTML(data);
// //     <p class = "posted-user-name",message" /P> 
// //     //メッセージに画像が含まれない場合のHTMLを作る
// //   }
// //   return html
// // }

