import './App.css';
import {useState}  from 'react'

function App() {
       const [calc,setCalac] = useState("")
       const [result,setResult] = useState("")

       const ops = ['/','*', '+', '-', '.', ];
      

        
       const updateCalac = (value) =>{
       
       if(
        ops.includes(value) && calc === ' ' ||
        ops.includes(value) && ops.includes(calc.slice(-1)
        )
       ){
             return ;
        }

        if(calc == '0'){
              if(value ==  '0'){
                  value.stopPropagation()
              }else{
                if(value == '.'){
                    setCalac(prev => prev + value); 
                }else{
                    setCalac(value); 
                }
              }
        }
      else{
        setCalac(calc+value)
      }
       }


  const createDigits = () => {
          const digits = [];
          const arr =['zero','one','two','three','four','five','six','seven','eight','nine']
        
          for (let i = 0; i  <=9;  i++){
            console.log(arr[i])
            digits.push(
              <button id={arr[i]}   onClick={ () => updateCalac(i.toString())}>{i}</button>
            )
          }
          return digits
  }

  const calculate = () =>{
      setResult(eval(calc).toString());
      setCalac(eval(calc).toString());
  }

  const deleteL = () =>{
     if(calc === ' '){
      return;
     }
     const value = calc.slice(0, -1);
     const v= setCalac (value);
     setResult(v)
  }
  const allclear = () =>{
    const num=0
    setCalac(num);
    setResult(num);
  }

  return (
    <div className="App">
          <div className="calculator">
                <div className="display" id ='display'>
                     {result ? <span>({result})</span> : ""}
                     &nbsp;{calc || "0"}
                      <div className="opreators">
                                <button id="divide"  onClick={ () => updateCalac('/')}>/</button>
                                <button id="multiply" onClick={ () => updateCalac('*')}>*</button>
                                <button id='add' onClick={ () => updateCalac('+')}>+</button>
                                <button id="subtract" onClick={ () => updateCalac('-')}>-</button>
                                <button id='clear' onClick={allclear}>C</button>
                                <button id='clear' onClick={deleteL}>AC</button>
                      </div>
                      <div className="digits">
                                  {createDigits()}
                                
                                <button id='decimal' onClick={ () => updateCalac('.')}>.</button>
                                <button onClick={calculate} id ="equals">=</button>
                      </div>

                    

                </div>
          </div>
          <div>
                              
                      </div>
   
    </div>
  );
}

export default App;