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
   var e=document.getElementsByClassName("app-header");
   e[0].style.display="block";
   var e=document.getElementsByClassName("app-content");
   e[0].style.display="block";
   var e=document.getElementsByClassName("app-footer");
   e[0].style.display="block";
}

function reduceChatbox(){
   var e=document.getElementsByClassName("hidden-app");
   e[0].style.display="block";
//   e[0].style.right="10px"none;
//   e[0].style.bottom="0";
   var e=document.getElementsByClassName("app-header");
   e[0].style.display="none";
   var e=document.getElementsByClassName("app-content");
   e[0].style.display="none";
   var e=document.getElementsByClassName("app-footer");
   e[0].style.display="none";
}
