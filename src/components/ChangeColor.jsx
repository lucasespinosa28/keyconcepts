import React, { useState } from "react";

export default function  ChangeColor(){
    const [styleColor,setStyleColor] = useState("white");
    return(
            <div>
              <input type="text" onChange={(e) => setStyleColor(e.target.value)}/>
              <p style={{color: styleColor}}>This text's color changes dynamically!</p>
            </div>
    )
}