import Card from './Card'
function CardContainer(props){
  return (
      <div className="card-container">
        <Card      
        color={props.colorOne}
        onColorChange={props.onColorOneChange}
        />
        <Card
         color={props.colorTwo}
         onColorChange={props.onColorTwoChange} 
        />
      </div>)
}

export default CardContainer;