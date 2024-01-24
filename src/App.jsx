import { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function App() {
  const[rule,setRule]=useState('Credit Score');
  const[opertor,setOperator]=useState('<');
  const[value,setValue]=useState(0);
  const[score,setScore]=useState(0);
  const[combinator,setCombinator]=useState('And');
  const[expression,setExpression]=useState([]);

  const deleteTask=(index)=>{
    const newExpression=expression.filter((item,i)=>i!==index);
    setExpression(newExpression);
  }

  const handleAdd=()=>{
    setExpression([...expression,{rule,opertor,value,score}])
    setRule('Credit Score');
    setOperator('<');
    setValue(0);
    setScore(0);
   
  }
  useEffect(()=>{
    console.log(`{\n\t'rules': [\n\t\t{\n\t\t\t'key': '${rule}',\n\t\t\t'output':{\n\t\t\t\t'value':${value},\n\t\t\t\t'operator':'${opertor}',\n\t\t\t\t'score':${score}\n\t\t\t},\n\t\t},\n\t],`);
  },[rule,opertor,value,score,combinator,expression])
  
  useEffect(()=>{
    // console.log(`{\n\t'rules': [`)
    expression.map((item,index)=>{
      console.log(`\n\t\t{\n\t\t\t'key': '${rule}',\n\t\t\t'output':{\n\t\t\t\t'value':${value},\n\t\t\t\t'operator':'${opertor}',\n\t\t\t\t'score':${score}\n\t\t\t},\n\t\t},\n\t],`);
    })
    console.log(`\t'combinator': '${combinator}',\n}`)
  },[rule,opertor,value,score,expression,combinator,deleteTask])
  return (
    <>
    <h1 className="text-primary text-center">Expression Form</h1>
    {expression.map((item,index)=>(
      <div key={index} className='w-50 m-auto mt-4 border p-2'>
        <div className='d-flex flex-column gap-3'>
        <label htmlFor='rule' className=''>Rule Type</label>
      
      <select id='rule' onChange={(e)=>setRule(e.target.value)}>
        <option value='Credit Score'>Credit Score</option>
        <option value='Age'>Age</option>
        <option value='Account Balance'>Account Balance</option>
      </select>
      <label htmlFor='operator'>Operator</label>
      
      <select id='operator' onChange={(e)=>setOperator(e.target.value)}>
      <option value='<'>{'<'}</option>
      <option value='>'>{'>'}</option>
      <option value='=>'>{'=>'}</option>
      <option value='<='>{'<='}</option>
      <option value='='>{'='}</option>
      </select>
      <label htmlFor='value'>Value</label>
      <input type='number' id='value' onChange={(e)=>setValue(e.target.value)}></input>
      <label htmlFor='score'>Score</label>
      <input type='number' id='score' onChange={(e)=>setScore(e.target.value)} ></input>
      <button onClick={()=>deleteTask(index)} type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    )
    )}
    <form className='w-50 m-auto border p-2'>
      <div className='d-flex flex-column gap-3'>
      <label htmlFor='rule' className=''>Rule Type</label>
      
      <select id='rule' onChange={(e)=>setRule(e.target.value)}>
        <option value='Credit Score'>Credit Score</option>
        <option value='Age'>Age</option>
        <option value='Account Balance'>Account Balance</option>
      </select>
      <label htmlFor='operator'>Operator</label>
      
      <select id='operator' onChange={(e)=>setOperator(e.target.value)}>
      <option value='<'>{'<'}</option>
      <option value='>'>{'>'}</option>
      <option value='=>'>{'=>'}</option>
      <option value='<='>{'<='}</option>
      <option value='='>{'='}</option>
      </select>
      <label htmlFor='value'>Value</label>
      <input type='number' id='value' onChange={(e)=>setValue(e.target.value)}></input>
      <label htmlFor='score'>Score</label>
      <input type='number' id='score' onChange={(e)=>setScore(e.target.value)} ></input>
      <button type="button" className="btn btn-danger">Delete</button>
      </div>
    </form>
    <div className='d-flex align-items-center gap-2 flex-column'>
    <label className='' htmlFor='combinator'>Combinator</label>
    <select id='combinator' onChange={(e)=>setCombinator(e.target.value)}>
      <option value='And'>And</option>
      <option value='Or'>Or</option>
    </select>
    <button type="button" className="btn btn-primary" onClick={handleAdd}>ADD Expression</button>
    </div>
    
    

    </>
  )
}

export default App
