import Home from './components/home.vue';
import Movies from './components/movies.vue';
import MovieDetails from './components/movieDetails.vue';


export const routes =[
      {  path: '/', component : Home },
      {  path: '/movie', component : Movies },
      {  path: '/movie/:id', component : MovieDetails },

];
