var PlugAPI = require('./plugapi');
var ROOM = 'christian-anything-2';
var UPDATECODE = '_:8s[H@*dnPe!nNerEM'; 

// Instead of providing the AUTH, you can use this static method to get the AUTH cookie via twitter login credentials:
PlugAPI.getAuth({
    username: 'PlugDJBot2',
    password: 'Starwarskotor1'
}, function(err, auth) { // if err is defined, an error occurred, most likely incorrect login
    if(err) {
        console.log("An error occurred: " + err);
        return;
    }
    var bot = new PlugAPI(auth, UPDATECODE);
	
    bot.connect(ROOM);

    bot.on('roomJoin', function(data) {
        // data object has information on the room - list of users, song currently playing, etc.
        console.log("Joined " + ROOM + ": ", data);
        bot.chat('Mega-Bot is now online!');
        
    bot.on('userJoin', function(data) {
        bot.chat('Welcome to Christian Anything. All Christian Bands and Christian Songs are allowed in this epic room. Have fun and worship with us to celebrate our king, God.');
        
    bot.on('vote', function(data) {
        bot.woot('up');
    
    var reconnect = function() { bot.connect('coding-soundtrack'); };

    bot.on('close', reconnect);
    bot.on('error', reconnect); 
            });
        });
    });
});