var myNodeList = document.getElementsByTagName("LI");
console.log("myNodeList.length: " + myNodeList.length);

var i;
for(i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  
  myNodeList[i].appendChild(span);
}

// close button to delete list item
var close = document.getElementsByClassName("close");
for(i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Click list item to cross to-do item
var list = document.querySelector('ul');
list.addEventListener('click', function(evt) {
  console.log("list clicked");
  if(evt.target.tagName === "LI") {
    //console.log("list item clicked");
    evt.target.classList.toggle("checked");
  }
}, false);

// Create new to-do item on clicking <Add-button>
function newElement() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("my-input").value;
  var liText = document.createTextNode(inputValue);
  li.appendChild(liText);
  if(inputValue === "") {
    alert("You must write something!!!");
  }
  else {
    document.getElementById("my-ul").appendChild(li);
  }
  
  document.getElementById("my-input").value = ""
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}