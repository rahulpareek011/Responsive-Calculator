let btn = document.querySelectorAll("button");
let inp = document.querySelector("input");

let string = "";
let arr = Array.from(btn);

arr.forEach(btn => {

    btn.addEventListener("click", (e) => {
        e.target.classList.add("color-sec");

        setTimeout(() =>{
            e.target.classList.remove("color-sec");
        },200);

        if(e.target.innerHTML === "="){
            string = eval(string);
            inp.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            inp.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inp.value = string;
        }
        else{
            string += e.target.innerHTML;
            inp.value = string;
        }  
    })
})
