const piEvents = require('../helpers/piEvents')

io.on('connection', (socket) => {
    // const userId = await fetchUserId(socket);
    // socket.join(userId);
    let group = socket.handshake.query.group;
    console.log(group)
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });


    if(group == "pi_station"){
        socket.join("pi-station");
    }else if(group == "user_station"){
        socket.join("user-station")
    }
    socket.on(piEvents.PI_COV_FROM_PI, (msg)=>{
        console.log("message from PI to Users")
        io.to("user-station").emit(piEvents.PI_COV_FROM_SERVER, msg)
    })
    socket.on(piEvents.SENSOR_COV_FROM_PI, (msg)=>{
        console.log("message from PI to Users")
        io.to("user-station").emit(piEvents.SENSOR_COV_FROM_SERVER, msg)
    })
    socket.on(piEvents.USER_COV_FROM_USER, (data)=>{
        console.log("message from User to PI")
        io.to("pi-station").emit(piEvents.USER_COV_FROM_SERVER, data)
    })
});