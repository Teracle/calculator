const calculator=document.querySelector('.calculator');

const result=document.querySelector('.result-field');

const buttons=document.querySelectorAll('.button');

let node1=document.createElement('p');
node1.textContent='-';

let resultPressed=0;

const buttonClick=(e)=>{

  if(e.target.innerHTML==='C')
  result.innerHTML='';

  else if(e.target.innerHTML==='AC'){
  result.innerHTML='';
  delete localStorage.value;
  
  }

  else if (e.target.innerHTML === '=') {
  result.innerHTML = eval(result.innerHTML);
    
  }
  // else if (result.innerHTML === '0') 
  // result.innerHTML = e.target.innerHTML;
  else if(e.target.innerHTML==='&lt;-') 
  result.innerHTML=result.textContent.slice(0, -1);

  else if(e.target.innerHTML==='MS'){
   localStorage.setItem('value',result.textContent);
   result.innerHTML='';
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
    // console.log(Number(localStorage.getItem('value'))+Number(result.textContent));
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

      console.log(negative);
      
      let result1=negative.replace('-','+');

      console.log(result1);
      console.log(result.textContent);

      console.log(result1+result.textContent);
      
      result.innerHTML=result1+localStorage.getItem('previous');

      // let result1=negative.replace('-','+');

      // result.innerHTML=result1+result.textContent;
      
    }



  }

  else if(e.target.innerHTML==='Rvt'){
    if(resultPressed>0)
    result.innerHTML=localStorage.getItem('previous');
  }
  else {
  result.innerHTML += e.target.innerHTML;
  localStorage.setItem('previous',result.innerHTML);
  console.log(localStorage.getItem('previous'));
  
  }


}


buttons.forEach((button)=>{
  button.addEventListener('click',buttonClick);
});

