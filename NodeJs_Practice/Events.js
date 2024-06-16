const EventEmitter=require('events')
var eventEmitter=new EventEmitter()

eventEmitter.on('avi',(msg)=>{
    console.log(msg)
})


eventEmitter.on('xxx',(msg)=>{ 
    console.log(msg)
})

eventEmitter.emit('avi',"First event")
eventEmitter.emit('avi',"Second event")
eventEmitter.removeAllListeners('avi')
eventEmitter.emit('avi',"Third event")
