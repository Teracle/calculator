const calculator=document.querySelector('.calculator');
const result=document.querySelector('.result-field');
const buttons=document.querySelectorAll('.button');

let resultPressed=0;

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
  }

  else if(e.target.innerHTML==='AC'){
    result.innerHTML='';
    delete localStorage.value;
    delete localStorage.previous;
    delete localStorage.result;
  }

  else if (e.target.innerHTML === '=') {
    result.innerHTML = eval(result.innerHTML.replace(/,/g,''));
    resultPressed++;
    localStorage.setItem('result',result.textContent);
    
    let res=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=res;
  
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
      
    let res=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML=res;

    }

  }

  else {
    let split=result.textContent.split('.')[1];


      if(split.length<=8){
        result.innerHTML += e.target.innerHTML;
        localStorage.setItem('previous',result.innerHTML);
      }


  

    // var parts = result.textContent.toString().split(".");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
  let content=result.textContent;
  if(!result.textContent.includes('.')){
  let res=result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  result.innerHTML=res;

  }

  
  if(result.textContent.includes('.')){
  if(split.length>=2){
    result.innerHTML+='';
  }
}

  // let numberCount = n => Math.abs(n).toFixed().length;

  // if(numberCount(result.textContent)===3)
  // console.log('true'); 
  
  
  console.log(content.replace(/,/g,''));
  
  
  


    // result.innerHTML=parts;


//     var commas = result.textContent.toLocaleString("en-US");

// var commas = result.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// console.log(commas);

// result.innerHTML=commas;

    
  }

}


buttons.forEach((button)=>{
  button.addEventListener('click',buttonClick);
});

