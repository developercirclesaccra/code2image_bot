'use strict'

const sendApi = require('./send-api');
const getUserProfile = require('./get-user-profile');

const handleMessage = (event) => {
  const message = event.message;
  const senderId = event.sender.id;

  if (!message.text) {
    return;
  }

  getUserProfile(senderId, (error, response, body) => {
    if (error) {
      throw error;
    };
    let user = JSON.parse(body);
    console.log('User profile result: ', user);
    let text = message.text, reply = "";

    let welcomeText = "Hey " + user.first_name + "! I can format and highlight syntax in code you type here. You only need to enclose them in backticks '``' and I'll understand B-)";

    let pendingText = "Sorry " + user.first_name + "! Peter is yet to provide endpoints I can call to parse your code! Blame him!! :poop:";

    if (text.charAt(0) == '`') {
      reply = pendingText;
    } else {
      reply = welcomeText;
    }

    sendApi.sendMessage(senderId, { text: reply });
  });  
};

module.exports = {
  handleMessage,
};