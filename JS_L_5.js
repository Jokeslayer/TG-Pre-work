const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());

console.log(stars);

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
  console.log(lightWaves);
};

visibleLightWaves();

console.log(lightWaves);
