
let passw = document.getElementById('pass');
let input_name = document.getElementById('email');

passw.onclick = () =>{
    let name = document.getElementById('left-hand')

    if(name){
        document.getElementById('left-hand').style.transform = "rotate(53deg)";
        document.getElementById('right-hand').style.transform = "rotate(-53deg)";
    }
}


input_name.onclick = () =>{
    let right_name = document.getElementById('right-hand');
    if(right_name){
        document.getElementById('left-hand').style.transform = "rotate(90deg)";
        document.getElementById('right-hand').style.transform = "rotate(-90deg)";
    }
    
}