let page = 0;
const element = document.getElementsByClassName('container');
// let list = [element[0],element[1],element[2],element[3]];
//list[1].style.backgroundColor = 'yellow';

for(let i = 0; i<element.length; i++){
    element[i].style.display = 'none';
} 
//element[1].style.display = "none";



if(element[0].style.display == 'none' ){
    element[0].style.display = 'block';
    // changingPage(1,'block')

}else{
    console.log('Your program is being failed');
    
}

const button = document.getElementById('java');
button.addEventListener('click', runEvent);
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    
}


function changingPage(elementIndex, dstatus){
    const button = document.getElementsByTagName('button');
    button.addEventListener('click', callback);


    function callback(){
        element[elementIndex-1].style.display = 'none';
        element[elementIndex].style.display = dstatus;
    }
}






