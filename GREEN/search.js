// JavaScript code
function search_papelaria() {
    let input = document.getElementById('searchpesquisar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('papelaria');
     
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                
        }
    }
}