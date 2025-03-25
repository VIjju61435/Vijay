let Result= document.getElementById('display');
function Value(value){
    display.value+=value;
}
function Remove(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
}