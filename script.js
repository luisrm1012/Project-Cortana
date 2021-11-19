var myTab;
var myButton = document.getElementById("button");
var myText = document.getElementById("text");


function openTab(value) {
  myTab = window.open("https://www.bing.com/search?q=" + value);
}

function closeTab() {
    myTab.close()
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function setValues() {
    let values = [];
    let i;
    for (i = 0; i < 30; i++){
        values[i] = Math.floor( (Math.random() * (1000000 - 0) + 0) );
    }
    return values
}

function main() {
    myText.innerHTML = "Getting your rewards...";
    myButton.style.display = "none";

    let values = setValues();
    let i = 0;

    while (true) {

        openTab(values[i]);
        sleep(500)
        closeTab();
        i++;

        if (i == 29) {
            break
        }
    }

    //When finishes
    myText.innerHTML = "Congrats, enjoy your rewards!!!";
    myText.style.color = "#45f248";

}

myButton.addEventListener('click', main)