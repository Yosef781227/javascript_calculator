import './App.css';
import {useState}  from 'react'

function App() {

  const [Display,setDisplay] = useState('0')

  const AC = () =>{
        const number = 0;
         setDisplay(number)
  }

  const handlenumber = (event) =>{
      const number = event.target.textContent;
      if(Display == '0'){
            if(number ==  '0'){
                event.stopPropagation()
            }else{
              if(number == '.'){
                  setDisplay(prev => prev + number); 
              }else{
                  setDisplay(number); 
              }
            }
      }
    else{
      setDisplay(Display+number)
    }
     

  }

  const handleopreator = (event) =>{
      const opreator = event.target.textContent
      setDisplay(Display + ' ' + opreator + ' ')
  }

  const  handleequal = () =>{

       setDisplay(eval(Display));

  }

  const handledecimal = () =>{
      // const array = Display.split('');
      // const lastEleme = array[array.length - 1];
      
      // if(!lastEleme.includes('.')){
      //    setDisplay(Display+'.')
      // }
  }

  return (
    <div className="App">

      
  <div className="calculator">
  <div id="display" className="row">
    {Display}
  </div>
  <div id="clear" className="row" onClick={AC}>
    AC
  </div>
  <div id="seven" onClick={handlenumber}>7</div>
  <div id="eight" onClick={handlenumber}>8</div>
  <div id="nine"onClick={handlenumber}>9</div>
  <div id="four" onClick={handlenumber}>4</div>
  <div id="five"  onClick={handlenumber} >5</div>
  <div id="six"  onClick={handlenumber}>6</div>
  <div id="one"  onClick={handlenumber}>1</div>
  <div id="two"  onClick={handlenumber}>2</div>
  <div id="three"  onClick={handlenumber}>3</div>
  <div id="zero"  onClick={handlenumber}>0</div>
  <div id="multiply" onClick={handleopreator}>*</div>
  <div id="add" onClick={handleopreator}>+</div>
  <div id="divide" onClick={handleopreator}>/</div>
  <div id="decimal" onClick={handlenumber}>.</div>
  <div id="equals" onClick={handleequal}>=</div>
  <div id="subtract" onClick={handleopreator}>-</div>
</div>;

    </div>
  );
}

export default App;