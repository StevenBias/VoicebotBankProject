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
   var e=document.getElementById("app-header");
   e.style.display="block";
   var e=document.getElementById("app-content");
   e.style.display="block";
   var e=document.getElementById("app-footer");
   e.style.display="block";
}

function reduceChatbox(){
   var e=document.getElementById("app-header");
   e.style.display="block";
   var e=document.getElementById("app-content");
   e.style.display="none";
   var e=document.getElementById("app-footer");
   e.style.display="none";
}
