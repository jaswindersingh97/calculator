function calc(event){
    var output=document.getElementById('output');
    var text=output.innerText;
    var val=event.target.id;
    if (val==='reset'){
        text=0;
    }
    else if(val==='equal'){
        try {
            text=eval(text);
        } catch (error) {
            // console.log(text);
            text=undefined;
        }
    }
    else if(val==='Delete'){
        text=text.slice(0,-1);
    }
    else{
        if(text=="0"){
            text=val;
            }
        else if(text=="undefined"){
            text=0;
        }    
        else{
            text=text+val;
            }
        }
    output.innerText=text;
}

// function test(val){
//     console.log(val.target.id) ;
//     console.log(val);
// }
