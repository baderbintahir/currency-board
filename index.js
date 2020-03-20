window.onload = function(){
    let inputs = document.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++)
    {
        let country = `country${i}`;
        let val = localStorage.getItem(country);
        inputs[i].value = val;
    }
}

function saveData(){
    let inputs = document.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++)
    {
        let country = `country${i}`;
        localStorage.setItem(country, inputs[i].value);
    }
}