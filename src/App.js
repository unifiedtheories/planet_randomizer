import {useState} from 'react';
import * as React from 'react';

export default function App() {
  
  //planet stuff
  const [radius, setRadius] = useState(0);
  const [circumference, setCirc] = useState(0);
  const [mass, setMass] = useState(0);
  const [surfaceArea, setSurfaceArea] = useState({
      total: 0,
      ocean: 0,
      land: 0
  })

  function getRandomMass() {
      setMass(Math.random() * (7.5 - 0.4 + 1) + 0.4);
  }

  function setPlanet() {
    //mass
    getRandomMass()

    //radius
    const rad = ((Math.random() * (2.5 - 0.7 + 1) + 0.7) * 6371).toFixed(2)
    setRadius(rad)

    //circumference
    setCirc((2 * Math.PI * rad).toFixed(2));

    //surface Area
    const totalSA = (4 * Math.PI * Math.pow(rad, 2)).toFixed(2);
    const randomOcean = (Math.random() * (0.80 - 0.60 + 1) + 0.60);

    const newSA = {
      total: totalSA,
      ocean: (totalSA * randomOcean).toFixed(2),
      land: ((totalSA * randomOcean) - totalSA).toFixed(2)
    }
    setSurfaceArea(newSA);
  }

  //star stuff
  const [starMass, setStarMass] = useState(0);
  const [starRadius, setStarRad] = useState(0);
  const [luminosity, setLuminosity] = useState(0);
  const [semimajorAxis, setSemimajor] = useState(0);
  

  const [starType, setStarType] = useState("")

  const handleStarChange = (event) => {
    setStarType(event.target.value);
  }
  
  function setStar() {
    if (starType == "M - Red Dwarf") {
      //mass
      setStarMass((Math.random() * (0.6 - 0.08 + 1) + 0.08));
      //radius
      setStarRad((Math.random() * (0.6 - 0.1 + 1) + 0.1));
      //luminosity
      setLuminosity((Math.random() * (0.07 - 0.0005 + 1) + 0.0005));
  } else if (starType == "K - Orange Dwarf") {
      //mass
      setStarMass((Math.random() * (0.9 - 0.6 + 1) + 0.6));
      //radius
      setStarRad((Math.random() * (0.8 - 0.6 + 1) + 0.6));
      //luminosity
      setLuminosity((Math.random() * (0.5 - 0.08 + 1) + 0.08));
  } else if (starType == "G - Yellow Dwarf") {
      //mass
      setStarMass((Math.random() * (1.05 - 0.9 + 1) + 0.9));
      //radius
      setStarRad((Math.random() * (1.1 - 0.9 + 1) + 0.9));
      //luminosity
      setLuminosity((Math.random() * (1.4 - 0.6 + 1) + 0.6));
  }

    
  }

  const [orbitalPeriod, setOP] = useState(0);

  function setOrbit() {
    const goldiInner = (Math.sqrt(luminosity/1.1));
    const goldiOuter = (Math.sqrt(luminosity/0.53));
    const semi = (Math.random() * (goldiOuter - goldiInner) + goldiInner).toFixed(2);

    setSemimajor(semi);
    
    const sunKG = starMass * (2 * Math.pow(10, 30));
    const semiM = semi * ( 1.48 * Math.pow(10,11));
    const p = Math.sqrt( (4 * Math.pow(Math.PI,2) * Math.pow(semiM,3)) /  (( 6.67 * Math.pow(10, -11) ) * sunKG) );
    setOP(p / 86400);


  }



  

  /*
  const dropdownBtn = document.getElementById("btn");
  const dropdownMenu = document.getElementById("dropdown");
  const toggleArrow = document.getElementById("arrow");

  const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  }

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  })

  document.documentElement.addEventListener("click",
  function() {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  })
  */

  return (
    
       <body>
        <button onClick={() => setPlanet()}>
          new planet
        </button>
        <div> RADIUS: {radius}km </div>
        <div> CIRCUMFERENCE: {circumference}km </div>
        <div> TOTAL SURFACE AREA: {surfaceArea.total}km<sup>2</sup></div>

        <div>
          <Dropdown
          label="Choose Star Type"
          options={[
            {label: "-----star type-----", value: ""},
            {label: "M - Red Dwarf", value: "M - Red Dwarf"},
            {label: "K - Orange Dwarf", value: "K - Orange Dwarf"},
            {label: "G - Yellow Dwarf", value: "G - Yellow Dwarf"}
          ]}
          value={starType}
          onChange={handleStarChange}
          />
        </div>
        <button onClick={() => setStar()}>
          new star
        </button>
        <div> STAR TYPE: {starType} </div>
        <div> STELLAR MASS: {starMass.toFixed(2)} Solar Masses </div>
        <div> STELLAR RADIUS: {starRadius.toFixed(2)} Solar Radius </div>
        <div> STELLAR LUMINOSITY: {luminosity.toFixed(2)} Solar Luminosity </div>
        <button onClick={() => setOrbit()}>
          get orbit details
        </button>
        <div> SEMIMAJOR AXIS: {semimajorAxis} AU </div>
        <div> ORBITAL PERIOD: {orbitalPeriod.toFixed(2)} days</div>
       </body>
        
          

  )
}

const Dropdown = ({label, value, options, onChange}) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};
