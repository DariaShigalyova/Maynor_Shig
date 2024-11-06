const changeButton = document.getElementById("change");


function change_all() {
    if (document.getElementsByTagName ('div')[5].innerText==='ШИГАЛЁВА') {
        document.getElementsByTagName('div')[5].innerText='SHIGALYOVA';
        document.getElementsByTagName('div')[6].innerText='DARIA';
        document.getElementsByTagName('div')[7].innerText='KONSTANTINOVNA';
        document.getElementsByTagName('div')[8].innerText='F';
        document.getElementsByTagName('div')[10].innerText='ULYANOVSK';

    }

    else {
        if (document.getElementsByTagName('div')[5].innerText==='SHIGALYOVA'){
            document.getElementsByTagName('div')[5].innerText='ШИГАЛЁВА';
            document.getElementsByTagName('div')[6].innerText='ДАРЬЯ';
            document.getElementsByTagName('div')[7].innerText='КОНСТАНТИНОВНА'
            document.getElementsByTagName('div')[8].innerText='ЖЕН.';
            document.getElementsByTagName('div')[10].innerText='Г. УЛЬЯНОВСК';
        }
    }
}

changeButton.addEventListener("click", change_all);