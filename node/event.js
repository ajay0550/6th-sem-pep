import EventEmitter from "events"


const emitter = new EventEmitter()

//Register an Event Listener

emitter.on("userRegistered", (username)=>{
    console.log("User registered:",username)
})

// Exit the event
emitter.emit("userRegistered","JANE") 