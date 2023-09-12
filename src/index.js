import _ from 'lodash';
import './Style.css';
import logo from './assets/logo.jpg'
import { populate } from './modules/populate';
import heart from './assets/heart.png';


// document.addEventListener('DOMContentLoaded', () => {
//   // This code will run after the DOM is fully loaded
//   document.getElementById('logo-img').setAttribute('src', logo);
//   populate(); // Call the populate function after setting the logo src
// });


document.addEventListener('DOMContentLoaded',populate);

document.getElementById('logo-img').setAttribute('src', logo);
 await render();