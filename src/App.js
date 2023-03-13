import {useState} from 'react';
import * as React from 'react';
import './App.css';

export default function App() {
  
  //planet constants
  const [radius, setRadius] = useState(0);
  const [circumference, setCirc] = useState(0);
  const [mass, setMass] = useState(0);
  const [surfaceArea, setSurfaceArea] = useState({
      total: 0,
      ocean: 0,
      land: 0
  })


  function setPlanet() {
    //this function sets all the functionalities of the planet
    
    //mass
    setMass(Math.random() * (7.5 - 0.4 + 1) + 0.4);

    //radius
    const rad = ((Math.random() * (2.5 - 0.7 + 1) + 0.7) * 6371).toFixed(2)
    setRadius(rad)

    //circumference
    setCirc((2 * Math.PI * rad).toFixed(2));

    //surface Area
    const totalSA = (4 * Math.PI * Math.pow(rad, 2)).toFixed(2);
    const randomOcean = (Math.random() * (0.80 - 0.60) + 0.60);

    const newSA = {
      total: totalSA,
      ocean: (totalSA * randomOcean).toFixed(2),
      land: (totalSA - (totalSA * randomOcean)).toFixed(2)
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
    //estimate possible goldilocks zone and assume a random 
    //semimajor axis from there
    const goldiInner = (Math.sqrt(luminosity/1.1));
    const goldiOuter = (Math.sqrt(luminosity/0.53));
    const semi = (Math.random() * (goldiOuter - goldiInner) + goldiInner).toFixed(2);
    setSemimajor(semi);
    
    //set orbital period using Newtons third law of motion
    const sunKG = starMass * (2 * Math.pow(10, 30));
    const semiM = semi * ( 1.48 * Math.pow(10,11));
    const p = Math.sqrt( (4 * Math.pow(Math.PI,2) * Math.pow(semiM,3)) /  (( 6.67 * Math.pow(10, -11) ) * sunKG) );
    setOP(p / 86400);
  }


  const [population, setPop] = useState(0);
  function setPopulation() {
    const pop = ((surfaceArea.land * (Math.random() * (65 - 40 + 1) + 40))).toFixed(2);
    console.log(pop)
    setPop(pop);
  }


  function setPlanetandStar() {
    setPlanet();
    setStar();
  }
  
  // scrapped attempt at making a dropdown menu, may use later
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
        <div className='Heading'>
          <h2>Generate your own exoplanet!</h2>
        </div>
        <div className='App'>
          <h2>Planetary Information</h2>
          <p> RADIUS: {radius}km </p>
          <p> CIRCUMFERENCE: {circumference}km </p>
          <p> TOTAL SURFACE AREA: {surfaceArea.total}km<sup>2</sup></p>
          <p> LAND SURFACE AREA: {surfaceArea.land}km<sup>2</sup></p>
          <p> OCEAN SURFACE AREA: {surfaceArea.ocean}km<sup>2</sup></p>
          <p> POPULATION SIZE: {population}</p>
        </div>
        
        
        
        
          
          
          
        <div className='App'>
          <h2>Stellar Information</h2>
          <p> STAR TYPE: {starType} </p>
          <p> STELLAR MASS: {starMass.toFixed(2)} Solar Masses </p>
          <p> STELLAR RADIUS: {starRadius.toFixed(2)} Solar Radius </p>
          <p> STELLAR LUMINOSITY: {luminosity.toFixed(2)} Solar Luminosity </p>
          <p> SEMIMAJOR AXIS: {semimajorAxis} AU </p>
          <p> ORBITAL PERIOD: {orbitalPeriod.toFixed(2)} days</p>
        </div>

        <div className='Selects'>
            <Dropdown
              className='Dropdown'
              label="Choose Star Type"
              options={[
                {label: "", value: ""},
                {label: "M - Red Dwarf", value: "M - Red Dwarf"},
                {label: "K - Orange Dwarf", value: "K - Orange Dwarf"},
                {label: "G - Yellow Dwarf", value: "G - Yellow Dwarf"}
                ]}
              value={starType}
              onChange={handleStarChange}
            />
          </div>

        <div className='Selects'>
          <button className='Btns' onClick={() => setPlanetandStar()}>
            generate!
          </button>
          <button className='Btns' onClick={() => setOrbit()}>
            get orbit details
          </button>
          <button className='Btns' onClick={() => setPopulation()}>
            get population details
          </button>
        </div>
        

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
