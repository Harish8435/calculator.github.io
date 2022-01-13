let myInput = document.getElementById('myInput');
let buttons = document.querySelectorAll('button');
let screenVal = '';

for(item of buttons){
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;

        if(btnText == 'X'){
            btnText = '*';
            screenVal += btnText;
            myInput.value = screenVal;
        }
        else if(btnText == 'C'){
            screenVal = "";
            myInput.value = screenVal;
        }
        else if(btnText == '='){
            screenVal = eval(screenVal);
            myInput.value = screenVal;
        }
        else{
            screenVal += btnText;
            myInput.value = screenVal;
        }
    })
}