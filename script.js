// Initialize Telegram Web App SDK
const tg = window.Telegram.WebApp;
// Informs Telegram that WebApp is ready to interact
tg.ready();
const dataToSend = {
  is_pressed: true
};

// Send data back to the bot
function sendDataToBot() {
  const dataString = JSON.stringify(dataToSend); // Convert data to string
  tg.sendData(dataString);  // Send the stringified data back to the bot
}

// Add event listener to button click
document.getElementById("sendButton").addEventListener("click", sendDataToBot);