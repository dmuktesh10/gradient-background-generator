import ColourTile from './ColourTile'
function ColourPallete(props) {
  return(
    <div className='ColourPallete'>
      <ColourTile tileColour='tomato'></ColourTile>
      <ColourTile tileColour='yellowgreen'></ColourTile>
      <ColourTile tileColour='crimson'></ColourTile>
      <ColourTile tileColour='yellow'></ColourTile>
      <ColourTile tileColour='black'></ColourTile>
      <ColourTile tileColour='white'></ColourTile>
      <ColourTile tileColour='blue'></ColourTile>
      <ColourTile tileColour='pink'></ColourTile>

    </div>
  )
}

export default ColourPallete;