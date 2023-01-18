import {useState} from 'react';


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

  function getSize() {
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

  const [starType, setStarType] = useState("")



  function getStarMass() {
      if (starType == "M") {
          setStarMass((Math.random() * (0.6 - 0.08 + 1) + 0.08).toFixed(2));
      } else if (starType == "K") {
          setStarMass((Math.random() * (0.9 - 0.6 + 1) + 0.6).toFixed(2));
      } else if (starType == "G") {
          setStarMass((Math.random() * (1.05 - 0.9 + 1) + 0.9).toFixed(2));
      }
  }

  function getStarRadius() {
      if (starType == "M") {
          setStarRad((Math.random() * (0.6 - 0.1 + 1) + 0.1).toFixed(2));
      } else if (starType == "K") {
          setStarRad((Math.random() * (0.8 - 0.6 + 1) + 0.6).toFixed(2));
      } else if (starType == "G") {
          setStarRad((Math.random() * (1.1 - 0.9 + 1) + 0.9).toFixed(2));
      }
  }

  function getStarLuminosity() {
      if (starType == "M") {
          setLuminosity((Math.random() * (0.07 - 0.0005 + 1) + 0.0005).toFixed(2));
      } else if (starType == "K") {
          setLuminosity((Math.random() * (0.5 - 0.08 + 1) + 0.08).toFixed(2));
      } else if (starType == "G") {
          setLuminosity((Math.random() * (1.4 - 0.6 + 1) + 0.6).toFixed(2));
      }
  }



  
  
  const setAll = () => {
    getRandomMass()
    getSize()

    setStarType("M")
    getStarMass()
    getStarRadius()
    getStarLuminosity()

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
        <button onClick={() => setAll()}>
          new radius
        </button>
        <div> RADIUS: {radius}km </div>
        <div> CIRCUMFERENCE: {circumference}km </div>
        <div> TOTAL SURFACE AREA: {surfaceArea.total}km<sup>2</sup></div>
        <div> STAR TYPE: {starType} - Red Dwarf </div>
        <div> STELLAR MASS: {starMass} Solar Masses </div>
        <div> STELLAR RADIUS: {starRadius} Solar Radius </div>
        <div> STELLAR LUMINOSITY: {luminosity} Solar Luminosity </div>
        
        
       </body>
        
          

  )
}
