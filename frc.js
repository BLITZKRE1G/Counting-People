let getH2 = document.getElementById('greet');
let count = 0;
let saved;
let total = 0;

function increment(){
    count++;
    getH2.innerHTML = "Count: "+count;
}

document.getElementById('hello').innerHTML = "Take people according to Space";
let entered = document.getElementById('entered');
entered.innerHTML = 'Occupied by: 0';

function save(){
    console.log('Count:',count);
    let countString = ' + '+count+'';
    total+=count;
    entered.innerHTML += countString;
    document.getElementById('h3').innerHTML = "Total people in room: "+total;
    if (total >=10){
        window.alert("NO CAPACITY");
        document.getElementById('ok').innerHTML = "NO CAPACITY";
    }
    count = 0;
}


