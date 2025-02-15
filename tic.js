let a = document.querySelectorAll(".box");
let resetbg = document.querySelectorAll(".resetbtn");
let c=document.querySelectorAll("#set");
let patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    ];
let turn=0;   
resetbg.forEach(button => {
    button.onclick = () => {
        for (let box of a) {
            box.disabled = false;
            box.innerText = "";
        }
        turn = 0;
        set.innerText = ""; 
    };
});
a.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("click");
        if(turn===0){
            box.innerText="X";
            turn=1;
        }
        else if(turn===1){
            box.innerText="O";
            turn=0;
        }
        box.disabled=true;

        winner();
    })
    
});
const winner =() =>{
    for (let pattern of patterns){
        console.log(pattern[0], pattern[1],pattern[2])
       let pos1= a[pattern[0]].innerText;
       let pos2=a[pattern[1]].innerText;
       let pos3=a[pattern[2]].innerText;

       if(pos1!=="" && pos2!=="" && pos3!==""){
        if(pos1===pos2 && pos2===pos3){
            console.log(pos1+"winner")
            
                for(let box of a){
                    box.disabled=true;
                    
                    
                } 
                turn=0;
            
            set.innerText=`!! Congratulations1!!  Winner is ${pos1}`;
        }
       }
    }
};



