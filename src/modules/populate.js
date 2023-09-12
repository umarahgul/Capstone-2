import heart from '../assets/heart.png';
export const populate = () => {

  const parent=document.getElementById('movies');
  const movieArr=[" yum","yo", "yi"];

  for (let x=0; x < movieArr.length; x += 1)
  {
  const card=document.createElement('div');
  card.setAttribute('id', 'card'+ `${x}`);
  const movieImg=document.createElement('img');
 
  movieImg.style.width= '200px';
  movieImg.style.height= '200px';

  const likeButton=document.createElement('img');
//   likeButton.src='./assets/heart.png';
  likeButton.src=heart;
  
  const comment=document.createElement('button');
  comment.value='Comments';
  comment.classList.add('comment');
  const reservation=document.createElement('button');
  reservation.value='Reservations';
  reservation.classList.add('reservation');
  card.appendChild(movieImg);
  card.appendChild(likeButton);
  card.appendChild(comment);
  card.appendChild(reservation);
  
  parent.appendChild(card);
  }

}