<template>
<div>




  <section class="movie-detials-intro">


     <div class="backdropImage">

       <img v-bind:src="'https://image.tmdb.org/t/p/w185/' + movie_details.poster_path" width="100%">
          <!-- <img  v-bind:src="'https://image.tmdb.org/t/p/w1400_and_h450_bestv2' + movie_details.backdrop_path" width="100%"> -->
     </div>

    <header>
      <div class="container grid-xl">
        <a href="/"><img src="/src/assets/logo.svg"></a>
      </div>
    </header>

    <div class="container grid-xl">


      <div class="columns">

        <div class="column col-3 text-center" style="position:relative;">


          <img class="movieheaderimage rounded" v-bind:src="'https://image.tmdb.org/t/p/w600/' + movie_details.poster_path" width="100%">





        </div>


        <div class="column col-9">

          <h1 class="text-light moviename"> {{movie_details.original_title}}</h1>

           <p><span class="moviecategory" v-for="genre_details in movie_details.genres"> {{genre_details.name}},  </span></p>



          <div class="columns">


            <div class="column col-4">

              <p class="popularity"> Popularity</p>
              <!-- <h2 class="moviepercent">{{movie_details.popularity}}</h2> -->
              <h2 class="moviepercent">72%</h2>

            </div>

            <div class="column col-4 ratings">

              <p class="movierating">Rating </p>
              <p class="movieindex">{{movie_details.vote_average}}</p>

            </div>

          </div>

          <div class="columns">

            <button class="btn watchtrailer watchtrailertext" @click="activeTrialer=true">Watch Trailer</button>

          </div>



        </div>


      </div>

    </div>


  </section>


  <section class="cast">
    <div class="container grid-xl">
      <div class="columns">
        <div class="column col-3">
        </div>

        <div class="column col-7">
          <p class="storyline">Storyline</p>


          <p class="storylineparagraph"> {{movie_details.overview}}</p>


          <p class="storyline">Cast</p>


            <div class="columns">

               <div class="column" v-if="index<5" v-for="(cast_details,index) in movie_details.credits.cast">

                  <img class="rounded" v-bind:src="'https://image.tmdb.org/t/p/w276_and_h350_bestv2/' + cast_details.profile_path" width="110px">
                    <p class="name text-ellipsis">{{cast_details.name}}</p>
                    <span>{{cast_details.character}}</span>
               </div>



            </div>




        </div>

      </div>


    </div>
  </section>



  <section class="similarmovies">

      <p class="similarmoviestext">Similar Movies</p>

    <div class="container grid-lg">
      <div class="columns similarmovie">


        <div class="column" v-if="number<5" v-for="(similar_movies,number) in movie_details.similar.results">
          <div class="card">
            <div class="card-image movielist">

                <img class="rounded" v-bind:src="'https://image.tmdb.org/t/p/w600/' + similar_movies.poster_path" width="100%">


                <p class="similarmovie_name text-ellipsis">{{similar_movies.title}}</p>
            </div>
          </div>

        </div>


      </div>
    </div>



    <!-- Video modal -->
    <div class="modal" v-bind:class="{'active':activeTrialer}">
      <div class="modal-overlay"></div>
      <div class="modal-container">
        <div class="modal-header">
          <button class="btn btn-clear float-right" @click="activeTrialer=false"></button>
          <div class="modal-title h5">{{ movie_details.title }}</div>
        </div>
        <div class="modal-body">
          <div class="content" v-if="movie_details.videos">
            <iframe width="560" height="315" v-bind:src="'https://www.youtube.com/embed/' + movie_details.videos.results[0].key " frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="modal-footer">
          ...
        </div>
      </div>
    </div>

  </section>


</div>
</template>




<script>
export default {

  data: function() {
    return {
      loading: false,
      movie_details: '',
      activeTrialer: false
    }
  },


  computed: {
    getBackdropPath: function() {
      return {
        'background-image': 'url('+  'https://image.tmdb.org/t/p/w1400_and_h450_bestv2' + this.movie_details.backdrop_path  + ')'
      }
    }
  },


  // Functions
  methods: {

    fetchData() {

      this.loading = true;
      var movieId = this.$route.params.id;

      this.$http.get('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US&api_key=37f0eca988a8498c779fac93ab4c4189&append_to_response=videos,credits,similar')
        .then(response => {
          //  return response.json();
          this.movie_details = response.body;
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
@import url( '/node_modules/spectre.css/dist/spectre.min.css');

body {
    background-color: white;
}



section.movie-detials-intro {

    padding: 60px 0;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 20px;
    position: relative;
    background: rgba(0, 0, 0, 0.13);
    min-height: 450px;
    header{
      padding-left: 65px;
      margin-bottom: 45px;
    }

    .backdropImage {

          background: #3e3e3e;
          bottom: 0;
          box-shadow: rgba(0,0,0,.07) 0 2px 0;
          left: -34px;
          overflow: hidden;
          position: absolute;
          right: -34px;
          top: -100px;
          -webkit-transform: translate3d(0,0,0);
          -moz-transform: translate3d(0,0,0);
          -ms-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
          z-index: -1;

          img{
            filter: blur(42px);
            position: absolute;
            width: 100%;
            z-index: 10;
          }

       &:after{
        background: rgba(0,0,0,.43);
        background: -webkit-linear-gradient(top,rgba(0,0,0,.57) 0,rgba(0,0,0,.21) 100%);
        background: -moz-linear-gradient(top,rgba(0,0,0,.57) 0,rgba(0,0,0,.21) 100%);
        background: -ms-linear-gradient(top,rgba(0,0,0,.57) 0,rgba(0,0,0,.21) 100%);
        background: linear-gradient(to bottom,rgba(0,0,0,.57) 0,rgba(0,0,0,.21) 100%);
        box-shadow: inset rgba(0,0,0,.26) 0 3px 0, inset rgba(0,0,0,.21) 2px 0 0, inset rgba(0,0,0,.26) 0 -1px 0;
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 20;
      }
    }

}

.moviename {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    padding-top: 30px;
}

.moviecategory {
    opacity: 0.65;
    font-size: 14px;
    color: #ffffff;

}

.popularity {
    opacity: 0.65;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 8px;
}

.movierating {

    opacity: 0.65;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 8px;
}

.moviepercent {
    font-size: 31px;
    font-weight: 500;
    line-height: 0.77;
    color: #ffffff;
}

.movieindex {
    font-size: 31px;
    font-weight: 500;
    line-height: 0.77;
    color: #ffffff;
}

.ratings {
    margin-left: -125px !important;
}

.watchtrailer {
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.09);
  border: none;
  padding: 11px 35px;
  height: auto;
  margin-top: 19px;
  margin-left: 7px;

  &:hover, &:focus, &:active{
    background-color: rgba(255, 255, 255, 0.09);
    border: none;
    box-shadow: none;

  }
}
.watchtrailertext {
    font-size: 14px;
    color: #ffffff;
}

.storyline {
    margin-top: 37px;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
}

.storylineparagraph {
    margin-top: 18px;
    font-size: 16px;
    color: #777777;
}

.similarmovies {
    height: 589px;
    background-color: #f4f8fc;
    padding-top: 20px;
    margin-top: 70px;
}

.similarmoviestext {
    margin-top: 47px !important;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #000000;
    padding-bottom: 20px;
}

.movielist {

    height: 196.8px;
}

p.similarmovie_name {
  width: 173px;
}



.movieheaderimage {
  position: absolute;
  right: 30px;
  top: 12px;
  width: 260px;
  box-shadow: 0 7px 21px rgba(0, 0, 0, 0.12);

}

.movielogo {
    background-color: #05243E;
    padding-top: 20px;
    padding-left: 65px;

}



section.cast{

  p.name{
  margin-bottom: 2px;
      width: 116px;
      color: #000;
  }
    span{
      display: block;
      font-size: 12px;
          color: #777777;
    }

}
</style>
