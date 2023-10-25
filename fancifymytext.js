
function myAlert() {
    alert("Hello, world!");

    document.getElementById('input-text').style.fontSize = '24pt';
}

function handleRadioButtons(){

    var myText = document.getElementById('input-text');
    var fancyShmancyRadioButton = document.getElementById('FancyShmancy');
    var boringBettyRadioButton = document.getElementById('BoringBetty');

    if(fancyShmancyRadioButton.checked){
        alert("FancyShmancy");
        myText.style.fontWeight = 'bold'
        myText.style.color = 'blue';
        myText.style.textDecoration = 'underline';
    }
    else if(boringBettyRadioButton.checked){
        alert("BoringBetty");
        myText.style.fontWeight = 'normal';
        myText.style.color = 'black';
        myText.style.textDecoration = 'none';
    }
}

function handleMoo() {

    var textArea = document.getElementById('input-text');
    var text = textArea.value;

    text = text.toUpperCase();

    var sentences = text.split('.');

   
    for (var i = 0; i < sentences.length - 1; i++) {
        sentences[i] += "-Moo";
    }

    text = sentences.join('. ');
    textArea.value = text;
}


