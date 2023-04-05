import React from 'react';
import { Link } from "react-router-dom";


function ColorList(props) {
    const { colors } = props;
  
    if (!colors || !Array.isArray(colors)) {
      return (
        <div>
          <p>No colors to display</p>
          <Link to="/">Go back to homepage</Link>
        </div>
      );
    }
  
    return (
        <div>
            <ul>
                {colors.map((color, index) => (
                <li key={index} style={{ backgroundColor: color }}>{color}</li>
                ))}
            </ul>
            <Link to="/">Go back to homepage</Link>
        </div>
      
    );
  }
  
  export default ColorList;

  
  
  
  