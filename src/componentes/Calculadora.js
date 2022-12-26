import React, {useState} from "react";


const Calculadora =()=>{


  const [val, setVal] =useState("");
  
  const  backspace =() =>{
    try {
        setVal(val.slice(0,-1))
    } catch (error) {
      setVal("")
    }
  }
  const calcular =()=>{
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error")
    }
  }
  const borrar =()=>{
   try {
    setVal("")
   } catch (error) {
    
   }
  }
 const cose =()=>{
  try {
    setVal(Math.cos(val))
    
  } catch (error) {
    setVal("Error")
  }
 }
 const seno =()=>{
  try {
    setVal(Math.sin(val))
    
  } catch (error) {
    setVal("Error")
  }
 }
 const loga =()=>{
  try {
    setVal(Math.log(val))
    
  } catch (error) {
    setVal("Error")
  }
 }
 const tang =()=>{
  try {
    setVal(Math.tg(val))
    
  } catch (error) {
    setVal("Error")
  }
 }
 const pi =()=>{
  try {
    setVal(Math.PI())
    
  } catch (error) {
    setVal("Error")
  }
 }
const cuadrado =()=>{
  const numero= 2;
  try {
    setVal(Math.pow(val,numero));
  } catch (error) {
    setVal("Error")
  }
}
const cubo =()=>{
  const numero= 3;
  try {
   
    setVal(Math.pow(val,numero));

  } catch (error) {
    setVal("Error")
  }
}
const elevado =()=>{
  const numero= 3;
  try {
   
    setVal(Math.pow(val,numero));

  } catch (error) {
    setVal("Error")
  }
}
const raiz =()=>{
  
  try {
   
    setVal(Math.sqrt(val));

  } catch (error) {
    setVal("Error")
  }
}
const raizc =()=>{
  
  try {
   
    setVal(Math.cbrt(val));

  } catch (error) {
    setVal("Error")
  }
}
const raizn =()=>{
  
  try {
   
    setVal(Math.cbrt(val));

  } catch (error) {
    setVal("Error")
  }
}
const exp =()=>{
  
  try {
   
    setVal(Math.E(val));

  } catch (error) {
    setVal("Error")
  }
}
const porciento =()=>{
  
  try {
   
    setVal(val*(1/100));

  } catch (error) {
    setVal("Error")
  }
}
  return (
  <div> 
    <div className="display" value={val}>{val}</div>
    <div className="botonera">
        <div className="fila">
        <button className="boton" value="cuadrado" onClick={()=>cuadrado()}>x²</button>
        <button className="boton"  value="cubo" onClick={()=>cubo()}>x³</button>
        <button className="boton"  value="elevado" onClick={()=>elevado()}>xⁿ</button>
        <button className="boton"  value="log" onClick={()=>loga()}>log</button>
        <button className="boton"  value="sen" onClick={()=>seno()}>sen</button>
       
      </div>
       <div className="fila">
         <button className="boton"  value="raiz" onClick={()=>raiz()}>√x</button>
         <button className="boton"  value="raizc" onClick={()=>raizc()}>³√x</button>
         <button className="boton"  value="raizn" onClick={()=>raizn()}>×√y</button>
        <button className="boton"  value="cos" onClick={()=>cose()}>cos</button>
        <button className="boton"  value="tg" onClick={()=>tang()}>tg</button>
        

      </div>
      <div className="fila">
      <button className="boton"  value="in" onClick={(e)=>setVal(val+e.target.value)}>In</button>
      <button className="boton"  value="(" onClick={(e)=>setVal(val+e.target.value)}>(</button>
      <button className="boton"  value=")" onClick={(e)=>setVal(val+e.target.value)}>)</button>
      <button className="boton"  value="e" onClick={()=>exp()}>e</button>
      <button className="boton"  value="!" onClick={(e)=>setVal(val+e.target.value)}>!</button>
      </div>
      <div className="fila">
        <button className="boton"  value="7" onClick={(e)=>setVal(val+e.target.value)}>7</button>
        <button className="boton"  value="8" onClick={(e)=>setVal(val+e.target.value)}>8</button>
        <button className="boton"  value="9" onClick={(e)=>setVal(val+e.target.value)}>9</button>
        <button className="boton"  value="del" onClick={()=>backspace()}>DEL</button>
        <button className="boton"  value="AC" onClick={()=>borrar()}>AC</button>
      </div>
      <div className="fila">
        <button className="boton"  value="4" onClick={(e)=>setVal(val+e.target.value)}>4</button>
        <button className="boton"  value="5" onClick={(e)=>setVal(val+e.target.value)}>5</button>
        <button className="boton" value="6" onClick={(e)=>setVal(val+e.target.value)}>6 </button>
        <button className="boton"  value="*" onClick={(e)=>setVal(val+e.target.value)}>x</button>
        <button className="boton" value="/" onClick={(e)=>setVal(val+e.target.value)}>/ </button>
      </div>
      <div className="fila">
        <button className="boton"  value="1" onClick={(e)=>setVal(val+e.target.value)}>1</button>
        <button className="boton"  value="2" onClick={(e)=>setVal(val+e.target.value)}>2</button>
        <button className="boton"  value="3" onClick={(e)=>setVal(val+e.target.value)}>3</button>
        <button className="boton" value="+" onClick={(e)=>setVal(val+e.target.value)}>+</button>
        <button className="boton"  value="-" onClick={(e)=>setVal(val+e.target.value)}>-</button>
        
        
      </div>
      <div className="fila">
        <button className="boton"  value="0" onClick={(e)=>setVal(val+e.target.value)}>0</button>
        <button className="boton"  value="." onClick={(e)=>setVal(val+e.target.value)}>.</button>
        <button className="boton" value="π" onClick={()=>pi()}>π</button>
        <button className="boton" value="=" onClick={()=>calcular()}>= </button>
        <button className="boton" value="%" onClick={()=>porciento()}>%</button>
        
      </div>
    </div>
    </div>
  )
}
  
export default Calculadora;