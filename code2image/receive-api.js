'use strict'

const sendApi = require('./send-api');

const handleMessage = (event) => {
  const message = event.message;
  const senderId = event.sender.id;

  if (!message.text) {
    return;
  }

  let text = message.text;

  switch (text) {
    case 'Code2Image':
      let response = 'Hey smart';
      sendApi.sendMessage(senderId, { text: response });
    default:
      sendApi.sendMessage(senderId, { text: text });
  }

};

module.exports = {
  handleMessage,
};