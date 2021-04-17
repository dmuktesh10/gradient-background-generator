function ColourTile(props){
  const styleObj = {
    backgroundColor: props.tileColour,
    height: "40px",
    width: "40px",
    display: 'inline-block'
  };
  console.log(props)
  const handleClick = () => {
    props.onColorChange(props.tileColour)
    // props.onChangeCleanup()
  }
  return(
    <div onClick={handleClick} style={styleObj}>
      
    </div>
  )
}

export default ColourTile;