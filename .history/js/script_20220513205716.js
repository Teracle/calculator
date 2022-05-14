const calculator=document.querySelector('.calculator');
const result=document.querySelector('.result-field');
const buttons=document.querySelectorAll('.button');

const operation=document.querySelectorAll('[data-operation]');

let resultPressed=0;
let operationButton=false;
let numberClick=false;
let operClicked=false;
let numberCounter=0;
let numbercounterBefore=0;

let regex='/[0-9]{3}/'.replace(',');



const buttonClick=(e)=>{

  

  // let nums=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(nums);


  // if(result.textContent.length>2){
  //   result.innerHTML+='.';
  // }
  // let res;

// var commas = result.textContent.toLocaleString("en-US");

// var commas = result.textContent.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");

// console.log(commas);



  // res=result.textContent.replace(/(.{2})/g,"$1,");
  // result.innerHTML=res;


  // let res;
   
  //  res=result.textContent.replace(/(.{3})/,"$1,");
  //  console.log(res);
  //  result.innerHTML=res;

  // if(result.textContent<4){
  // res=result.textContent.replace(/(.{3})/g,"$1,");
  // result.innerHTML=res;
  // console.log('in 1st block');
  // }

  // else{
  //   res=result.textContent.replace(/(.{2})/g,"$1,");
  //   result.innerHTML=res;

  //   console.log('in 2nd block');
  // }



  if(e.target.innerHTML==='C'){
  result.innerHTML='';
  operationButton=false;
  numberClick=false;
  numberCounter=0;
}

  else if(e.target.innerHTML==='AC'){
    result.innerHTML='';
    delete localStorage.value;
    delete localStorage.previous;
    delete localStorage.result;
    operationButton=false;
    numberClick=false;
    numberCounter=0;
  }

  else if (e.target.innerHTML === '=') {
    if(numberClick){
    result.innerHTML = eval(result.innerHTML.replace(/,/g,''));
    resultPressed++;
    localStorage.setItem('result',result.textContent);
    
    let res=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=res;
    }
  }
  
  else if(e.target.innerHTML==='&lt;-') {
    result.innerHTML=result.textContent.slice(0, -1);
    

  }

  else if(e.target.innerHTML==='MS'){
    if(numberClick){
    localStorage.setItem('value',result.textContent);
    console.log(localStorage.getItem('value'));
    }
    
  }

  else if(e.target.innerHTML==='MR'){
    result.innerHTML=localStorage.getItem('value');
  }

  else if(e.target.innerHTML==='MC'){
    delete localStorage.value; 
    console.log(localStorage.getItem('value'));  
  }

  else if(e.target.innerHTML==='M+'){
    localStorage.setItem('value',Number(localStorage.getItem('value'))+Number(result.textContent));
    console.log(localStorage.getItem('value'));
  }

  else if(e.target.innerHTML==='M-'){
    localStorage.setItem('value',Number(localStorage.getItem('value'))-Number(result.textContent));
    console.log(localStorage.getItem('value'));
  }

  else if(e.target.innerHTML==='+/-'){
    if(numberClick){
    if(result.textContent>'0'){
      result.innerHTML='-'+result.textContent;
    }

    else if(result.textContent<'0'){
      result.innerHTML='';
      let negative=result.textContent.charAt(0);
      let result1=negative.replace('-','+');
      result.innerHTML=result1+localStorage.getItem('previous');
    }
  }

  }

  else if(e.target.innerHTML==='Rvt'){
    operClicked=true;
    
    if(resultPressed>0 && operClicked){
      result.innerHTML=localStorage.getItem('result');
      let res=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      result.innerHTML=res;
    }

  }
  


  else if(e.target.innerHTML==='.'){
   
  }

  else if(e.target.innerHTML=='1' || e.target.innerHTML=='2' || e.target.innerHTML=='3' || e.target.innerHTML=='4' || e.target.innerHTML=='5' || e.target.innerHTML=='6' || e.target.innerHTML=='7' || e.target.innerHTML=='8' || e.target.innerHTML=='9' || e.target.innerHTML=='0' & operationButton) {

  


    operationButton=true;
    numberClick=true;
    operClicked=true;
    

      result.innerHTML += e.target.innerHTML;
      localStorage.setItem('previous',result.innerHTML);



  

    // var parts = result.textContent.toString().split(".");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
  // let content=result.textContent;
  // if(!result.textContent.includes('.')){
  // let res=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // result.innerHTML=res;

  // }

 
  
 
  
//   if(result.textContent.includes('.')){
//   if(split.length>=8){
//     result.innerHTML+='';
//   }
// }

  // let numberCount = n => Math.abs(n).toFixed().length;

  // if(numberCount(result.textContent)===3)
  // console.log('true'); 
  
  

  
  
  


    // result.innerHTML=parts;


    var commas = result.textContent.toLocaleString("en-US");

var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(commas);
numberCounter++;
console.log(numberCounter);

// if(numberCounter===3)
// var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// else if(numberCounter===4)
// var commas = result.textContent.toString().replace(/\B(?=(\d{1})+(?!\d))/g, ",");
// console.log(numberCounter);

    // result.innerHTML=commas;
    // commas='';

    // if(numberCounter===4){
    // var commas = result.textContent.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",");
   

    // }

    if(numberCounter===4){
    var commas = result.textContent.toString().replace(/\B(?=(\d{1})+(?!\d))/g, ",");
    result.innerHTML=commas; 
    
    }

    // else if(numberCounter===4){
    // var commas = result.textContent.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",");
    // result.innerHTML=commas; 
    // numberCounter=0;
    
    // }
    
    
  }
 

}


operation.forEach((oper)=>{
  oper.addEventListener('click',(e)=>{
    
    if(numberClick){
    result.innerHTML+=e.target.innerHTML;
    
    }
  
  //   if(operClicked){
  //     console.log(oper.getAttribute('value'));
  //     result.innerHTML+=oper.getAttribute('value');
  //   }
  //         if(operationButton && operClicked){
      
  //     result.innerHTML += '.';
      
      
  // }

  operClicked=false;
    
  })
})



buttons.forEach((button)=>{
  button.addEventListener('click',buttonClick);
});

