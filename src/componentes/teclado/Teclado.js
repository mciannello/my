import Button from "../Boton"


export default function Teclado ({clickHandler}){

  const handleClick =nombreDeBoton=> clickHandler(nombreDeBoton)

  return (
    <div className="botonera">
       <div className="fila">
        <Button name="In" clickHandler={handleClick}/>
        <Button name="xⁿ" clickHandler={handleClick}/>
        <Button name="e" clickHandler={handleClick}/>
        <Button name="√" clickHandler={handleClick}/>

      </div>
      <div className="fila">
        <Button name="AC" clickHandler={handleClick}/>
        <Button name="(" clickHandler={handleClick}/>
        <Button name=")" clickHandler={handleClick}/>
        <Button name="log" clickHandler={handleClick}/>

      </div>
      <div className="fila">
        <Button name="7" clickHandler={handleClick}/>
        <Button name="8" clickHandler={handleClick}/>
        <Button name="9" clickHandler={handleClick}/>
        <Button name="x" clickHandler={handleClick}/>
      </div>
      <div className="fila">
        <Button name="4" clickHandler={handleClick}/>
        <Button name="5" clickHandler={handleClick}/>
        <Button name="6" clickHandler={handleClick}/>
        <Button name="-" clickHandler={handleClick}/>
      </div>
      <div className="fila">
        <Button name="1" clickHandler={handleClick}/>
        <Button name="2" clickHandler={handleClick}/>
        <Button name="3" clickHandler={handleClick}/>
        <Button name="+" clickHandler={handleClick}/>
      </div>
      <div className="fila">
        <Button  name="0" clickHandler={handleClick}/>
        <Button  name="." clickHandler={handleClick}/>
        <Button name="=" clickHandler={handleClick}/>
        <Button name="AC" clickHandler={handleClick}/>
      </div>
    </div>
  )
}