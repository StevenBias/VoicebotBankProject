function addBotItem(text) {
   const appContent = document.querySelector(".app-content");
   appContent.innerHTML += '<div class="item-container item-container-bot"><div class="item"><p>' + text + '</p></div></div>';
   appContent.scrollTop = appContent.scrollHeight; // scroll to bottom
}

function addUserItem(text) {
   const appContent = document.querySelector(".app-content");
   appContent.innerHTML += '<div class="item-container item-container-user"><div class="item"><p>' + text + '</p></div></div>';
   appContent.scrollTop = appContent.scrollHeight; // scroll to bottom
}

function addError(text) {
   addBotItem(text);
   const footer = document.querySelector(".app-footer");
   footer.style.display = "none";
}

function loadChatbox(){
   var e=document.getElementsByClassName("hidden-app");
   e[0].style.display="none";
   var e=document.getElementsByClassName("chatbox");
   e[0].style.display="block";
}

function reduceChatbox(){
   var e=document.getElementsByClassName("hidden-app");
   e[0].style.display="block";
   e[0].style.width="350px";
   var e=document.getElementsByClassName("chatbox");
   e[0].style.display="none";
}
