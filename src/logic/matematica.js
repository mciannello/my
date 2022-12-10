
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
          case "cos":
                return Math.cos(numeroUno) * numeroDos;
          case "log": 
            return Math.log(numeroDos) / Math.log(numeroUno);
          case "sen":
              return Math.sin(numeroUno);
          case "tg":
              return Math.tan(numeroUno);
          case "x²": 
          numeroDos=2;
          return Math.pow(numeroUno, numeroDos);
          case "x³": 
          numeroDos=3;
          return Math.pow(numeroUno,numeroDos);
          case "xⁿ": 
          return Math.pow(numeroUno, numeroDos);
          case "√x": 
          return Math.sqrt(numeroUno);
          case "e": 
          return numeroUno * (Math.E ** numeroDos);
          default:
            return "0"
        }
        
      }
      
    
  
  export default operate
 
  