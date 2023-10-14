const rtspStream = require('node-rtsp-stream');

// //@desc     Camera Authentication
// var ip_address = "10.0.17.11" //NOTE: replace it with your camera IP address

// //@desc     Camera username and password
// var username = "admin";
// var password="admin";

//@desc     A channel of camera stream
stream = new rtspStream({
    streamUrl: 'rtsp://admin:abcd1234@10.14.26.28:554/Streaming/Channels/101',
    wsPort: 9999    
});