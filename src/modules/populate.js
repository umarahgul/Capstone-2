
const url ='https://api.tvmaze.com/shows';

// fetch datd from api


const getData = async  () => {
  try {
   
    const response = await fetch(url); // Fetch data from api endpoints
    const data = await response.json(); // Change the data format to json

    return data;
  } catch (error) {
    return error.message;
  }
};

export const render = async () => {
  const data = await getData();
  const topThree = data
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 3);

    
  
    const tvShowsDiv = document.getElementById('movies');
  
  //const likes = await retrieveLikes();

  for (let x=0; x <topThree.length; x += 1)
  { 
    alert (topThree[x].name);
    const poster = topThree[x].image.medium;
    const title =topThree[x].name;
    const id=topThree[x].id;
    
    // a div containing image button and title
    const showDiv = document.createElement('div');
    showDiv.id = `${id}`;
    showDiv.classList.add('series');

    
    const posterImg = document.createElement('img');
    posterImg.src = poster;
    //const icons = document.createElement('span');
 
    // a container containing title
    const titleContainer = document.createElement('div');
    const showName=document.createElement('h2');
    const likes=document.createElement('i');
    likes.classList.add('fa-solid', 'fa-heart', 'likeBtn');
    showName.textContent=title;
     titleContainer.appendChild(showName);
     titleContainer.appendChild(likes);
     titleContainer.classList.add('div-title');


    // a container containing comments button
    const buttonContainer=document.createElement('div');
    const commentBtn =document.createElement('button');
    commentBtn.setAttribute('id',`cmmnt + ${x}`);
    commentBtn.textContent='Comments';
    commentBtn.classList.add('commentBtn');
    buttonContainer.appendChild(commentBtn);
    
    
    
    showDiv.appendChild(posterImg);
    showDiv.appendChild(titleContainer);
    showDiv.appendChild(buttonContainer);
    tvShowsDiv.appendChild(showDiv);
  }
  
}


