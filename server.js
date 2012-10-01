var express = require('express')
  , http = require('http')
  , app = express()
  , stylus = require('stylus')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)


app.set('views',__dirname+'/views')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(stylus.middleware({src:__dirname+'/public',force:true,compress:true}))
app.use(express.static(__dirname+'/public'))
  

app.get('/',function(req,res){
  res.render('index.jade')
})


var count = 0

io.set('log',0)
io.on('connection',function(socket){
  socket.on('clicked',function(){
    socket.emit('count',{count:count++})
  })
})


server.listen(8000)