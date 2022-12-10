
// const Random =(numeroUno, numeroDos, operador)=> {
//     const uno=numeroUno || "0"
//     const dos= numeroDos||(operador==="/"|| operador==="x"?"1":"0")
    
//     if(operador==="+") return uno+dos

// }



     
      const operate = (numeroUno, numeroDos, operador) => {
        
        switch(operador){
          case "+":
            return numeroUno =parseInt(numeroUno)+parseInt(numeroDos)
          case "-": 
            return  numeroUno =parseInt(numeroUno)-parseInt(numeroDos)
            case "x":
              return numeroUno =parseInt(numeroUno)*parseInt(numeroDos)
            case "/": 
              return  numeroUno =parseInt(numeroUno)/parseInt(numeroDos)
          default:
            return "0"
        }
        
      }
      
    
  
  export default operate
 
  