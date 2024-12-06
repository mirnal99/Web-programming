function rac(br){
    var rez;
    if(br==="="){
        let rez=document.screen1.display1.value;
        document.screen1.display1.value=eval(rez);
        document.screen2.display2.value=eval(rez);
    }
    else if(br==="C"){
        document.screen1.display1.value="";
        document.screen2.display2.value="";
        
    }
    else if(br==="del"){
        document.screen1.display1.value =  document.screen1.display1.value.slice(0,-1);
        document.screen2.display2.value= document.screen2.display2.value.slice(0,-1);
        
    }
    else {
        document.screen1.display1.value += br; 
        document.screen2.display2.value=eval(br);
        let rez=document.screen1.display1.value;

        document.screen2.display2.value=eval(rez);

        /* if(eval(rez) === "undefined"){
            document.screen2.display2.value="";
        }else{
            document.screen2.display2.value=eval(rez);
        } */

    }

}