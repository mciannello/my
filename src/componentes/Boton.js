export default function Button ({clickHandler, name}){
  const handleClick =() => clickHandler(name)
  return(
    <div>
      <button className="boton" onClick={handleClick}>{name}</button>
    </div>
  )
}