var i, text;
i = 0;
text = "AYÚDANOS, REALIZA UNA DONACIÓN";

function typing(){
    if (i < text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);

    }
}

typing();