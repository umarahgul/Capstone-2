import _ from 'lodash';
import './Style.css';
import logo from './assets/logo.jpg'
import {render} from './modules/populate';
import getCommentsCount from './modules/comments-counter';
import {renderpopup} from './modules/popup';

// document.addEventListener('DOMContentLoaded', () => {
//   // This code will run after the DOM is fully loaded
//   document.getElementById('logo-img').setAttribute('src', logo);
//   populate(); // Call the populate function after setting the logo src
// });


// document.addEventListener('DOMContentLoaded', render);

// document.getElementById('logo-img').setAttribute('src', logo);
//  //render();

// //..............  comment popup start ...............//

//  const commentBtn = document.querySelectorAll('.commentBtn');

//  // Add event to comment button
//  commentBtn.forEach((btn) => {
//    btn.addEventListener('click', async () => {
//     alert ('i was clicked yo giffy');
//      const { id } = btn.parentElement.parentElement;
//      await renderpopup(id);
 
 
//      const commentsCountCon = document.querySelector('.commentsCount');
 
//      commentsCountCon.textContent = `(${getCommentsCount()})`;
//    });
//  });
 //..........comment popup ends............//

 document.addEventListener('DOMContentLoaded', () => {
    // This code will run after the DOM is fully loaded
    document.getElementById('logo-img').setAttribute('src', logo);
    render(); // Call the render function after setting the logo src
  
    // Add a click event listener to a parent element that contains the .commentBtn buttons
    document.body.addEventListener('click', (event) => {
      if (event.target.classList.contains('commentBtn')) {
        const btn = event.target;
  //      alert('Button clicked: ' + btn.textContent); // Debugging alert
        const { id } = btn.parentElement.parentElement;
        renderpopup(id);
       // const commentsCountCon = document.querySelector('.commentsCount');
        //commentsCountCon.textContent = `(${getCommentsCount()})`;
      }
    });
  });
  