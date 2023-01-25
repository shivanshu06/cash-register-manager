const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noofnotes=document.querySelectorAll(".no-of-notes");

const availablenotes=[2000,500,100,20,10,5,1];



checkButton.addEventListener("click",function validatebillamount(){
hidemessage();
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
               const amounttobereturned=cashGiven.value-billAmount.value;
               calculatechange(amounttobereturned);
        }
        else{
            showmessage("bartan dhone hai kya?")
        }
    }
    else{
        showmessage("Invalid bill amount!")
    }
});

function showmessage(msg){
    message.style.display="block";
    message.innerText=msg;
}

function hidemessage(){
    message.style.display="none";
}

function calculatechange(amounttobereturned){
    for(let i=0;i<availablenotes.length;i++){

        const numberofnotes=Math.trunc(amounttobereturned/availablenotes[i]);

        amounttobereturned=amounttobereturned % availablenotes[i];

        noofnotes[i].innerText=numberofnotes;


    }
}



