import  { useState} from 'react'
import  './Colorcss.css';
const App = () => {
  const [color, setColor] = useState();


  const handleColorChange = (e) => {
    setColor(e.target.value);
  }
  
  return (
    <>
      
      <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{ backgroundColor: color }}>
          <p>Selected Color:{color}</p>
        </div>

        <label>select a color:: </label>
        <input type='color' value={color} onChange={handleColorChange} />
      </div>

      
    </>
  );
}

export default App