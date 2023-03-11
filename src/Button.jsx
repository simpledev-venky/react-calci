import React, { useState } from 'react'

const Button = () => {
   const [input,setInput] = useState("")
   const [result,setResult] = useState("")

    const num = [0,1,2,"+",3,4,5,"-",6,7,8,"*",9,".","/"]

const gatherInput = (n)=>{
const inp = String(`${input}${n}`)
setInput(inp)
}



const calResult = ()=>{
 const res = eval(input)
setResult(res)
setInput("")
}

const deleteInput =()=>{
setInput(input.slice(0,-1))
}


  return (
    <div className='claci-container'>
    <div className='header'>Wandel Calculator</div>
        <input type="text" value={input} 
        onChange={(e)=>{setInput(e.target.value)}}
        />
        <h2>{result ? `THE RESULT IS ${result}`:""}</h2>
    <div className='btn-container'>
    {
    num.map((n)=>{
    return(
        <button key={n} onClick = {()=>{gatherInput(n)}}>{n}
        </button>
        )
    })
    }
    <button onClick={calResult}>=</button>
    <button onClick={deleteInput}>X</button>
    <button className='clr' 
    onClick={()=>{setInput("")}}>Clear</button>
     </div>
    </div>
  )
}

export default Button