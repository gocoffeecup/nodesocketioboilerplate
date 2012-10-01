$(function(){
  var sockets = io.connect()  
  
  $('.clickme').on('click',function(){
    sockets.emit('clicked')
  })
  
  sockets.on('count',function(msg){
    $('#counts').append($('<div>'+msg.count+'</div>'))
  })
})

