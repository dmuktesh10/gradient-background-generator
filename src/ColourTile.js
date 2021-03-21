function ColourTile(props){
  const styleObj = {
    backgroundColor: props.tileColour,
    height: "20px",
    width: "20px",
    display: 'inline-block'
  };
  return(
    <div style={styleObj}>
      
    </div>
  )
}

export default ColourTile;