const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + '/public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.get("/admin", (req, res) => {
    res.sendFile(__dirname + '/admin.html')
})



http.listen(PORT, () => console.log(`listening on port ${PORT}`));


// Socket 



io.on('connection', (socket) => {
    console.log("Connected")
    socket.on('message', (msg) => {
        // console.log(msg )
        socket.broadcast.emit('alertWater', msg);
    })
})