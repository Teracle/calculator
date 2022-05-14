const calculator=document.querySelector('.calculator');
const result=document.querySelector('.result-field');
const buttons=document.querySelectorAll('.button');

let resultPressed=0;

let regex='/[0-9]{3}/'.replace(',');


const buttonClick=(e)=>{

  // if(result.textContent.length>2){
  //   result.innerHTML+='.';
  // }
  // let res;

  // res=result.textContent.replace(/(.{2})/g,"$1,");
  // result.innerHTML=res;


  let res;
   
   res=result.textContent.replace(/(.{3})/g,"$1,");
   console.log(res);

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
  }

  else if(e.target.innerHTML==='AC'){
    result.innerHTML='';
    delete localStorage.value;
    delete localStorage.previous;
    delete localStorage.result;
  }

  else if (e.target.innerHTML === '=') {
    result.innerHTML = eval(result.innerHTML);
    resultPressed++;
    localStorage.setItem('result',result.textContent);
  }
  
  else if(e.target.innerHTML==='&lt;-') {
    result.innerHTML=result.textContent.slice(0, -1);
  }

  else if(e.target.innerHTML==='MS'){
    localStorage.setItem('value',result.textContent);
    console.log(localStorage.getItem('value'));
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

  else if(e.target.innerHTML==='Rvt'){
    
    if(resultPressed>0){
      result.innerHTML=localStorage.getItem('result');
    }

  }

  else {
    result.innerHTML += e.target.innerHTML;
    localStorage.setItem('previous',result.innerHTML);
  }

}


buttons.forEach((button)=>{
  button.addEventListener('click',buttonClick);
});

