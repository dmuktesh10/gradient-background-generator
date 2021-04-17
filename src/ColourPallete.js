import ColourTile from './ColourTile'
function ColourPallete(props) {
  return(
    <div className='ColourPallete'>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='tomato'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='yellowgreen'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='crimson'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='yellow'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='black'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='white'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='blue'></ColourTile>
      <ColourTile onColorChange={props.onColorChange} onChangeCleanup={props.onChangeCleanup} tileColour='pink'></ColourTile>
    </div>
  )
}

export default ColourPallete;