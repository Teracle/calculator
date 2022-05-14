const calculator=document.querySelector('.calculator');
const result=document.querySelector('.result-field');
const buttons=document.querySelectorAll('.button');
const bracket=document.querySelectorAll('.open-bracket');
const operation=document.querySelectorAll('[data-operation]');

let resultPressed=0;
let operationButton=false;
let numberClick=false;
let operClicked=0;
let numberCounter=0;
let numberAfterComma=0;


const buttonClick=(e)=>{

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
    operClicked=1;
    result.innerHTML=result.innerHTML.replace(/,/g,'');
    let commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=commas;
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
  
  else if(e.target.innerHTML=='1' || e.target.innerHTML=='2' || e.target.innerHTML=='3' || e.target.innerHTML=='4' || e.target.innerHTML=='5' || e.target.innerHTML=='6' || e.target.innerHTML=='7' || e.target.innerHTML=='8' || e.target.innerHTML=='9' || e.target.innerHTML=='0' & operationButton) {

    numberCounter++;
    operationButton=true;
    numberClick=true;
    operClicked=true;
    if(numberCounter<10){
      result.innerHTML += e.target.innerHTML;
      localStorage.setItem('previous',result.innerHTML);
    }
    console.log(numberCounter);


    if(numberCounter==4){
      console.log('3 numbers');
      

    var commas = result.textContent.toLocaleString("en-US");

    var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(commas);
    result.innerHTML=commas;
    }

    if(numberCounter==5){
      console.log('4 numbers');
      result.innerHTML=result.innerHTML.replace(/,/g,'');

    commas = result.textContent.toLocaleString("en-US");

    var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(commas);
    result.innerHTML=commas;
    }

    if(numberCounter==6){
      console.log('5 numbers');
      result.innerHTML=result.innerHTML.replace(/,/g,'');

     var commas = result.textContent.toLocaleString("en-US");

    var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(commas);
    result.innerHTML=commas;
    }

    if(numberCounter==7){
      console.log('6 numbers');
      result.innerHTML=result.innerHTML.replace(/,/g,'');

   
    let commas2=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=commas2;
    }

     if(numberCounter==8){
      console.log('7 numbers');
      result.innerHTML=result.innerHTML.replace(/,/g,'');

   
    let commas2=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=commas2;
    }

    if(numberCounter==9){
      console.log('8 numbers');
      result.innerHTML=result.innerHTML.replace(/,/g,'');

   
    let commas3=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=commas3;
    }

    else{

      result.innerHTML=result.innerHTML.replace(/,/g,'');

   
    let commas3=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=commas3;

    }


  // if(numberCounter>=4){
  // var commas = result.textContent.toLocaleString("en-US");

  // var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(commas);
  // result.innerHTML=commas;
  
  // }

  // else if(numberCounter==5){
  //    commas = result.textContent.toLocaleString("en-US");

  //  commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(commas);
  // result.innerHTML=commas;
  // }

  }
 

}

operation.forEach((oper)=>{
  oper.addEventListener('click',(e)=>{
    operClicked++;
    numberCounter=0;
    if(numberClick){

      if(operClicked<3)
        result.innerHTML+=e.target.innerHTML;
    
    }

  })
})

bracket.forEach((item)=>{
  item.addEventListener('click',()=>{
    result.innerHTML+=item.getAttribute('value');
  })
})


buttons.forEach((button)=>{
  button.addEventListener('click',buttonClick);
});
