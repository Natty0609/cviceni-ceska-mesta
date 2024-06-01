import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/City/City.jsx';
import {cities} from '../cz-cities.js';

const city = cities.name;
const population = cities.population;

const area = cities.area;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {/* <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header> */}
    <main>
      <h2>Největší česká města</h2>
      {cities.map((city) => (
        <City
         key={city.name}
         name={city.name}
         population={city.population}
         area={city.area}
         district={city.district}
         imageUrl={city.photo}
        />
      ))}
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);