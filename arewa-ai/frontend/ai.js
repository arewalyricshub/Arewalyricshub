const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");
const sendBtn = document.getElementById("sendBtn");

const suggestions = document.querySelectorAll(".suggestion");

// ======================================
// BACKEND URL
// ======================================

// Za mu saka Render backend URL a nan
// bayan mun gama backend.

const API_URL = "https://arewalyricshub.onrender.com/api/ai";";

// ======================================
// ESCAPE HTML
// ======================================

function escapeHTML(text) {

const div = document.createElement("div");

div.textContent = text;

return div.innerHTML;

}

// ======================================
// ADD MESSAGE
// ======================================

function addMessage(text, type) {

const message = document.createElement("div");

message.classList.add(
    "message",
    type === "user"
        ? "user-message"
        : "ai-message"
);


const avatar = document.createElement("div");

avatar.className = "avatar";

avatar.textContent =
    type === "user"
        ? "YOU"
        : "AI";


const bubble = document.createElement("div");

bubble.className = "bubble";

bubble.innerHTML =
    escapeHTML(text)
    .replace(/\n/g, "<br>");


message.appendChild(avatar);

message.appendChild(bubble);

messages.appendChild(message);


scrollToBottom();

}

// ======================================
// SCROLL CHAT DOWN
// ======================================

function scrollToBottom() {

messages.scrollTop =
    messages.scrollHeight;

}

// ======================================
// TYPING INDICATOR
// ======================================

function showTyping() {

typing.style.display = "flex";

scrollToBottom();

}

function hideTyping() {

typing.style.display = "none";

}

// ======================================
// SEND MESSAGE TO AI
// ======================================

async function sendMessage(message) {

if (!message || !message.trim()) {
    return;
}


addMessage(
    message.trim(),
    "user"
);


userInput.value = "";

sendBtn.disabled = true;

showTyping();


try {

    const response = await fetch(
        API_URL,
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                message:
                    message.trim()
            })
        }
    );


    const data =
        await response.json();


    if (!response.ok) {

        throw new Error(
            data.error ||
            "An error occurred."
        );

    }


    addMessage(
        data.reply,
        "ai"
    );


} catch (error) {

    console.error(
        "Arewa AI Error:",
        error
    );


    addMessage(
        "Yi haƙuri, Arewa AI bai samu damar amsa yanzu ba. Ka sake gwadawa.",
        "ai"
    );

} finally {

    hideTyping();

    sendBtn.disabled = false;

    userInput.focus();

}

}

// ======================================
// CHAT FORM
// ======================================

chatForm.addEventListener(
"submit",
function(event) {

    event.preventDefault();


    const message =
        userInput.value.trim();


    if (!message) {
        return;
    }


    sendMessage(message);

}

);

// ======================================
// QUICK SUGGESTIONS
// ======================================

suggestions.forEach(
function(button) {

    button.addEventListener(
        "click",
        function() {

            const prompt =
                button.dataset.prompt;


            if (!prompt) {
                return;
            }


            userInput.value =
                prompt;


            userInput.focus();

        }
    );

}

);

// ======================================
// TEXTAREA AUTO RESIZE
// ======================================

userInput.addEventListener(
"input",
function() {

    this.style.height =
        "auto";


    this.style.height =
        Math.min(
            this.scrollHeight,
            130
        ) + "px";

}

);

// ======================================
// ENTER TO SEND
// ======================================

userInput.addEventListener(
"keydown",
function(event) {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        chatForm.requestSubmit();

    }

}

);

// ======================================
// MENU BUTTON
// ======================================

const menuBtn =
document.getElementById("menuBtn");

if (menuBtn) {

menuBtn.addEventListener(
    "click",
    function() {

        alert(
            "Arewa AI Menu zai zo nan ba da jimawa ba."
        );

    }
);

      }
