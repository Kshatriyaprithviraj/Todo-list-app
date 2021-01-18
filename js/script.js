// Addong a close symbol to list items
var nodeList = document.getElementsByTagName("li");
var inputText = document
    .getElementById('myInput')
    .addEventListener(
        // Enter key is number 13
        "keyup",
        function (enteredKey) {
            if (enteredKey.key === 'Enter') {
                enteredKey.preventDefault();
                document.getElementById("myButton").click();
            }
        }
    );

for (var i = 0; i < nodeList.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(text);
    nodeList[i].appendChild(span);
}

// Hiding the item or say adding event to close button on list item
var hideItem = document.getElementsByClassName("close");

for (var i = 0; i < hideItem.length; i++) {

    hideItem[i].onclick = function () {
        var itemVisibility = this.parentElement;
        itemVisibility.style.display = "none";
    };
}

// Adding items to the list
function newElement() {
    var listItem = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    var textNode = document.createTextNode(inputValue);
    listItem.appendChild(textNode);

    if (inputValue === "") {
        alert('You\' to provide in some input buddy ! 🔣');
    } else {
        document.getElementById("myUl").appendChild(listItem);
        listItem.className = "list-group-item";
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(text);
    listItem.appendChild(span);

    for (var i = 0; i < hideItem.length; i++) {
        hideItem[i].onclick = function () {
            var visibility = this.parentElement;
            visibility.style.display = "none";
        };
    }
}