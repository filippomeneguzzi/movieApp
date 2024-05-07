import { config } from "./config.js";

// Utilizza la tua API key come desideri nel tuo script
const api_key = config.API_KEY;

const URL_base = "https://api.themoviedb.org/3";
const imgURL = "https://image.tmdb.org/t/p/w500";

  

//funzione che mi prende ogni singolo genere dei film e lo mette nella navbar

document.addEventListener('DOMContentLoaded', () =>{

  genresList();
});

function genresList(){

  const linksNav = document.querySelector(".links")
  fetch(`https://api.themoviedb.org/3/genre/movie/list?${api_key}`)

      .then((response) => response.json())
      .then((data) => {
        //estraiamo i dati dei generi
        const genres = data.genres;

        //aggiungiamo gli elementi alla navbar
        genres.forEach(genre =>{
          const link = document.createElement("a");
          link.textContent = genre.name;
          link.setAttribute("class", "link");
          link.href = `genre.html?genre=${genre.id}`;
          linksNav.appendChild(link);
        });
      })
      .catch((err) => console.error(err));
}


//I created a function to take and show the first popular film
function headerHome(){

  //catturo gli elementi
  const headerHome = document.getElementById('headerHomePage');

  fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}`)

    .then((response) => response.json())
    .then((data) => {
    
      //prendiamo solamente il primo film dei piu popolari e lo mettiamo in anteprima
      const firstFilm = data.results[0];
      const imgFirst_Film = `${imgURL}` + firstFilm.poster_path;

      //card
      const card = document.createElement('div');
      card.classList.add("cardHeader");

      const image = document.createElement('img');
      image.src = imgFirst_Film;
      image.alt = firstFilm.title;

      //container for txt
      const container = document.createElement('div');
      container.classList.add("containerHeader");

      const title = document.createElement('h2');
      title.textContent = firstFilm.title;

      const overview = document.createElement('p');
      overview.textContent = firstFilm.overview.split(0, 100) + "...";


      //appendChild element
      headerHome.appendChild(card);
      card.appendChild(image);
      card.appendChild(container);
      container.appendChild(title);
      container.appendChild(overview);

  })
  .catch((err) => console.error(err));
}
headerHome();



//
function movieList(){
  const item = document.querySelector(".item");

    fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}`)

        .then((response)=> response.json())
        .then((data)=>{

          const movies = data.results.slice(0,5);

          movies.forEach(movie=>{


            //creo il contenitore della singola card
            const card = document.createElement('div')
            card.classList.add("cardFilm");

            //img del film card
            const image = document.createElement('img');
            image.src = `${imgURL}` + movie.poster_path;
            image.alt = movie.title;

            //creo il contenitore dati
            const contentCard = document.createElement('div');
            contentCard.classList.add("contentCard");

            //dati
            const titleFilm = document.createElement('h2');
            titleFilm.textContent = movie.title;

            const date = document.createElement('p');
            date.textContent = movie.release_date;

            const rate = document.createElement('p');
            rate.textContent = movie.vote_average;


            //assembliamo il tutto
            item.appendChild(card);
            card.appendChild(image);
            card.appendChild(contentCard);
            contentCard.appendChild(titleFilm);
            contentCard.appendChild(date);
            contentCard.appendChild(rate);
          })
        })
}
movieList();

function animateMovie(){


  fetch(`${URL_base}/discover/movie?${api_key}&with_genres=16`)
      .then((response)=> response.json())
      .then((data)=>{

        const item = document.querySelector(".itemAnimation");

        const movies = data.results.slice(0,5);

          movies.forEach(movie=>{


            //creo il contenitore della singola card
            const card = document.createElement('div')
            card.classList.add("cardFilm");

            //img del film card
            const image = document.createElement('img');
            image.src = `${imgURL}` + movie.poster_path;
            image.alt = movie.title;

            //creo il contenitore dati
            const contentCard = document.createElement('div');
            contentCard.classList.add("contentCard");

            //dati
            const titleFilm = document.createElement('h2');
            titleFilm.textContent = movie.title;

            const date = document.createElement('p');
            date.textContent = movie.release_date;

            const rate = document.createElement('p');
            rate.textContent = movie.vote_average;


            //create card
            item.appendChild(card);
            card.appendChild(image);
            card.appendChild(contentCard);
            contentCard.appendChild(titleFilm);
            contentCard.appendChild(date);
            contentCard.appendChild(rate);

          })
      }) .catch((err) => console.error(err));
}
animateMovie();



//comedy film
function comedyMovie(){


  fetch(`${URL_base}/discover/movie?${api_key}&with_genres=35`)
      .then((response)=> response.json())
      .then((data)=>{

        const item = document.querySelector(".itemComedy");

        const movies = data.results.slice(2,7);

          movies.forEach(movie=>{


            //creo il contenitore della singola card
            const card = document.createElement('div')
            card.classList.add("cardFilm");

            //img del film card
            const image = document.createElement('img');
            image.src = `${imgURL}` + movie.poster_path;
            image.alt = movie.title;

            //creo il contenitore dati
            const contentCard = document.createElement('div');
            contentCard.classList.add("contentCard");

            //dati
            const titleFilm = document.createElement('h2');
            titleFilm.textContent = movie.title;

            const date = document.createElement('p');
            date.textContent = movie.release_date;

            const rate = document.createElement('p');
            rate.textContent = movie.vote_average;


            //create card
            item.appendChild(card);
            card.appendChild(image);
            card.appendChild(contentCard);
            contentCard.appendChild(titleFilm);
            contentCard.appendChild(date);
            contentCard.appendChild(rate);

          })
      }) .catch((err) => console.error(err));
}

comedyMovie();

//horror
function horrorMovie(){


  fetch(`${URL_base}/discover/movie?${api_key}&with_genres=27`)
      .then((response)=> response.json())
      .then((data)=>{

        const item = document.querySelector(".itemHorror");

        const movies = data.results.slice(0,5);

          movies.forEach(movie=>{


            //creo il contenitore della singola card
            const card = document.createElement('div')
            card.classList.add("cardFilm");

            //img del film card
            const image = document.createElement('img');
            image.src = `${imgURL}` + movie.poster_path;
            image.alt = movie.title;

            //creo il contenitore dati
            const contentCard = document.createElement('div');
            contentCard.classList.add("contentCard");

            //dati
            const titleFilm = document.createElement('h2');
            titleFilm.textContent = movie.title;

            const date = document.createElement('p');
            date.textContent = movie.release_date;

            const rate = document.createElement('p');
            rate.textContent = movie.vote_average;


            //create card
            item.appendChild(card);
            card.appendChild(image);
            card.appendChild(contentCard);
            contentCard.appendChild(titleFilm);
            contentCard.appendChild(date);
            contentCard.appendChild(rate);

          })
      }) .catch((err) => console.error(err));
}
horrorMovie();


//romance
function romanceMovie(){


  fetch(`${URL_base}/discover/movie?${api_key}&with_genres=10749`)
      .then((response)=> response.json())
      .then((data)=>{

        const item = document.querySelector(".itemRomance");

        const movies = data.results.slice(0,5);

          movies.forEach(movie=>{


            //creo il contenitore della singola card
            const card = document.createElement('div')
            card.classList.add("cardFilm");

            //img del film card
            const image = document.createElement('img');
            image.src = `${imgURL}` + movie.poster_path;
            image.alt = movie.title;

            //creo il contenitore dati
            const contentCard = document.createElement('div');
            contentCard.classList.add("contentCard");

            //dati
            const titleFilm = document.createElement('h2');
            titleFilm.textContent = movie.title;

            const date = document.createElement('p');
            date.textContent = movie.release_date;

            const rate = document.createElement('p');
            rate.textContent = movie.vote_average;


            //create card
            item.appendChild(card);
            card.appendChild(image);
            card.appendChild(contentCard);
            contentCard.appendChild(titleFilm);
            contentCard.appendChild(date);
            contentCard.appendChild(rate);

          })
      }) .catch((err) => console.error(err));
}
romanceMovie();


//funzione per ottenere uno specifico genere nella seconda pagina html
function genre_Movies_Page(genreId){
  fetch(`${URL_base}/discover/movie?${api_key}&with_genres=${genreId}`)
    .then((response)=> response.json())
    .then((data)=>{
      const item = document.querySelector(".generalItem");
      item.innerHTML = '';

      const movies = data.results;

      movies.forEach(movie =>{

        //creo il contenitore della singola card
        const card = document.createElement('div')
        card.classList.add("cardFilm");

        //img del film card
        const image = document.createElement('img');
        image.src = `${imgURL}` + movie.poster_path;
        image.alt = movie.title;

        //creo il contenitore dati
        const contentCard = document.createElement('div');
        contentCard.classList.add("contentCard");

        //dati
        const titleFilm = document.createElement('h2');
        titleFilm.textContent = movie.title;

        const date = document.createElement('p');
        date.textContent = movie.release_date;

        const rate = document.createElement('p');
        rate.textContent = movie.vote_average;


        //create card
        item.appendChild(card);
        card.appendChild(image);
        card.appendChild(contentCard);
        contentCard.appendChild(titleFilm);
        contentCard.appendChild(date);
        contentCard.appendChild(rate);
      })


    }).catch((err) => console.error(err));
}

//otteniamo l'id del genere del parametro nella query string
const urlParams = new URLSearchParams(window.location.search);
const genreId = urlParams.get('genre');

//carichiamo i film del genere specifico
if(genreId){
      genre_Movies_Page(genreId);
}else{
  console.error('ID mancante');
}



//function to search film with name
const searchInput = document.getElementById("searchInput").value;
const btn = document.getElementById("searchButton");
const searchView = document.querySelector(".searchMovieList");


function searchMovieByName(name){

  fetch(`${URL_base}/search/movie?${api_key}&query=${encodeURIComponent(name)}`)
      .then((response)=> response.json())
      .then((data)=>{
        //rimuovo eventuali risultati precedenti
        const item = document.querySelector(".itemSearch");
        item.innerHTML = '';

        const movies = data.results;

      movies.forEach(movie =>{

        //creo il contenitore della singola card
        const card = document.createElement('div')
        card.classList.add("cardFilmSearch");

        //img del film card
        const image = document.createElement('img');
        image.src = `${imgURL}` + movie.poster_path;
        image.alt = movie.title;

        //creo il contenitore dati
        const contentCard = document.createElement('div');
        contentCard.classList.add("contentCardSearch");

        //dati
        const titleFilm = document.createElement('h2');
        titleFilm.textContent = movie.title;

        const date = document.createElement('p');
        date.textContent = movie.release_date;

        const rate = document.createElement('p');
        rate.textContent = movie.vote_average;


        //create card
        item.appendChild(card);
        card.appendChild(image);
        card.appendChild(contentCard);
        contentCard.appendChild(titleFilm);
        contentCard.appendChild(date);
        contentCard.appendChild(rate);
      })

      })
}

function dataSearch(){
  const header = document.getElementById('headerHomePage');
  const film = document.querySelectorAll(".film_list");
  const titleResults = document.querySelector(".titleSearch");

  //da fuori non funziona
  const searchInput = document.getElementById("searchInput").value;

  if(searchInput.trim() !== ''){

    searchMovieByName(searchInput);
    searchView.style.display = 'block'

     //nascondo la home normale
    header.style.display = 'none';

    film.style.display = 'none';
  }else{
    console.log('Inserisci un titolo valido');

    //nascondo i risultati ricerca
    searchView.style.display = 'none';

    //mostro la home normale
    header.style.display = 'flex';
    film.style.display = 'block';
  }
}
//al click mostro o no i dati
btn.addEventListener('click', ()=>{
  dataSearch();
});



