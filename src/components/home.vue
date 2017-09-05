<template>
<div>
  <section class="text-center intro">

    <div class="container">
      <img src="/src/assets/logo.svg">
      <h1 class="text-light">Find and organise movies, for free</h1>

      <!-- <div class="container grid-sm">
              <input class="form-input" type="search" placeholder="Search" v-model="filter" style="background:transparent;">
            </div> -->
    </div>

  </section>
  <div class="container grid-xl">

    <div class="columns">

            <div class="column col-2" v-for="movie in movie_list">

              <!-- <router-link to="home">Home</router-link> -->

              <img v-bind:src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path">

              <router-link :to="'/movie/'+ movie.id">  <p class="text-light text-ellipsis movie-title">{{movie.title}}</p> </router-link>

              <p>
                 <span class="rating">{{movie.vote_average}} </span>
               </p>
            </div>


    </div>
  </div>
</div>
</template>

<script>
export default {

  data: function(){
    return {

      search: '',
      page_number: 1,
      resource_url: '',
      loading: false,
      movie_list: '',


    }
  },


  // Functions
  methods: {

    fetchData() {

      this.loading = true;

      this.$http.get('https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=37f0eca988a8498c779fac93ab4c4189')

        .then(response => {
          //  return response.json();

          this.movie_list = response.body.results
          this.loading = false;
        }, error => {
          console.log();
        });
    },


  },






  // Load data on page load
  mounted: function() {
    this.fetchData();
  }


}
</script>






<style lang="scss">

@import url('/node_modules/spectre.css/dist/spectre.min.css');


body{
  background-color: #05243E;
}


section.intro{
  padding-top: 100px;
  background: url(/src/assets/bg.jpg);
  background-repeat-y: no-repeat;

  h1{
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 80px;
  }
}



.movie-title{
  max-width: 175px;
  font-size: 16px;
  margin-bottom: 6px;
}

p{
  margin-bottom: 40px;
}

.imdb{
  width: 34px;
}

.rating{
  background: url('/src/assets/imdb.png');
  background-position-y: 1px;
  background-size: 34px;
  padding-left: 41px;
  background-repeat: no-repeat;
}


</style>
