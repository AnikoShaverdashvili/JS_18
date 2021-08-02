/* container under this line */
let text_div = document.createElement('div');

/* text under this line */
let text_p = document.createElement('p');
text_p.setAttribute('class', 'changable-text');
text_p.setAttribute('value', '1');
text_p.innerHTML = 'პამიდორი'
text_div.appendChild(text_p);


let button = document.createElement('button');
button.innerHTML = 'შეცვლა';
button.setAttribute('id', 'btn-change');

/* append element */
document.getElementById('container').appendChild(text_div);
document.getElementById('container').appendChild(button);

/* btn-change event  */
document.getElementById('btn-change').addEventListener('click', () => {
    if (text_p.textContent == 'ყველი') {
        // alert('ყველია');
        text_p.innerHTML = 'პამიდორი';
        button.style.background = "red";
    } else {
        // alert('პამიდორია');
        button.style.background = "orange";
        text_p.innerHTML = 'ყველი';
    }
    //alert('იიიიფფფ რა პამიდორია');
});