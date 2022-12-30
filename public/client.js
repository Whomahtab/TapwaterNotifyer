const socket = io();



const currentDate = new Date().toLocaleString().replace(',', '')



const btn = document.querySelector('#notifyAll');
const alertMsg = document.querySelector('.alertMsg');


btn ?.addEventListener('click', (e) => {
    sendData()
})

const msg = {
    date: currentDate,
    waterTank: true
}

// share with server
function sendData() {
    socket.emit('message', msg)

}


// recieve froms - server

socket.on('alertWater', (msg) => {
    insertDom(msg)
})

// Insert 
function insertDom(msg) {
    console.log(msg.waterTank === true)
    // if(msg.waterTank === true){ 
    alertMsg.textContent = `🔥${msg.date}`;
    playAudio();
    // }
}


// playNotification
function playAudio() {
    var sound = new Howl({
        src: ['./notification_sound.mp3'],
        loop: true
    });
    sound.play();
   pushMe("mahtb");

}



function pushMe (name) {
Push.Permission.request();
		Push.create("🍉 Water Droper", {
		    body: `Hello! ${name} please fill your bottel with hot water`,
		    icon: 'https://icons8.com/icon/stdEXlVErsEe/shorten-urls',
		    timeout: 8000,
		    vibrate:500,
		    onClick: function () {
		        window.focus();
		        this.close();
		    }
		});
}

