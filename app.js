const travelTips = {
  "best time to visit": "The best time to visit Sri Lanka is from December to March for the west & south coasts, and May to September for the east coast.",
  "colombo": "Colombo offers a mix of modern city life and colonial history — try Galle Face Green.",
  "kandy": "Kandy is home to the Temple of the Tooth and surrounded by lush hills.",
  "galle": "Galle is famous for its Dutch Fort, beaches, and colonial charm.",
  "ella": "Ella offers scenic train rides, tea plantations, and hikes like Little Adam’s Peak.",
  "sigiriya": "Sigiriya Rock Fortress is a UNESCO World Heritage site with ancient frescoes.",
  "hello":"Hello! How can I help you plan your Sri Lanka trip? What would you like to know?",
  "hi": "Hello! How can I help you plan your Sri Lanka trip? What would you like to know?",
  "beach": "Sri Lanka has amazing beaches like Mirissa, Unawatuna, and Arugam Bay.",
  "culture": "Visit Kandy for the Temple of the Tooth and Anuradhapura for ancient ruins.",
  "wildlife": "Yala National Park is famous for leopards, and Minneriya for elephant gatherings.",
  "tea": "Nuwara Eliya and Ella have beautiful tea plantations and cool weather.",
  "food": "Try rice and curry, hoppers (appa), kottu roti, string hoppers, and delicious fresh tropical fruits.",
  "internet": "You can buy local SIM cards from Dialog or Mobitel at the airport or shops. They offer affordable data packages.",
  "packing": "Pack light clothes, sun protection, a raincoat (especially if visiting during monsoon), and comfortable shoes for walking and hiking.",
  "thanks": "You’re welcome! Have a fantastic trip to Sri Lanka! 🇱🇰",
  "thank you": "You’re welcome! Have a fantastic trip to Sri Lanka! 🇱🇰",
};

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const userText = userInput.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");

  let botReply = "Sorry, I don’t have info on that. Try asking about beaches, culture, wildlife, tea, or Colombo.";

  for (let key in travelTips) {
    if (userText.toLowerCase().includes(key)) {
      botReply = travelTips[key];
      break;
    }
  }

  setTimeout(() => addMessage(botReply, "bot"), 500);
  userInput.value = "";
}

function addMessage(text, sender) {
  const messages = document.getElementById("messages");
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.style.marginBottom = "10px";
  msg.style.padding = "8px 12px";
  msg.style.borderRadius = "15px";
  msg.style.maxWidth = "70%";

  if (sender === "user") {
    msg.style.backgroundColor = "#007bff";
    msg.style.color = "white";
    msg.style.marginLeft = "auto";
    msg.style.textAlign = "right";
  } else {
    msg.style.backgroundColor = "#e2e3e5";
    msg.style.color = "black";
    msg.style.marginRight = "auto";
    msg.style.textAlign = "left";
  }

  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
