let buttons = document.querySelectorAll('.button');
let input =document.querySelector('input');
let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        
        if(e.target.innerHTML=='='){
            try{  // ye error math karne pai print kare ga 
                string=eval(string);
            }catch (error){
                string="Math Error"
                input.value=string;
            }
            string=eval(string);//ye in build funcation h jo help karna h math mai auto
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){ //e.target.innerHTML help to print the content value 
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);//remove the last value;
            input.value=string;
        }
        else{
        console.log(e.target);
        string +=e.target.innerHTML;
        input.value=string;
        }
    });
});