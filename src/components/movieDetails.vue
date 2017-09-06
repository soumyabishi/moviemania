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

        <div class="column col-3 text-center">


          <img class="movieheaderimage" v-bind:src="'https://image.tmdb.org/t/p/w185/' + movie_details.poster_path" width="100%">





        </div>


        <div class="column col-9">

          <h1 class="text-light moviename"> {{movie_details.original_title}}</h1>

          <span class="moviecategory" v-for="genre_details in movie_details.genres">
                         {{genre_details.name}},
                      </span>

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

            <button class="btn watchtrailer watchtrailertext"><img src="/src/assets/playcircle.svg ">Watch Trailer</button>

          </div>



        </div>


      </div>

    </div>


  </section>


  <section>
    <div class="container grid-xl">
      <div class="columns">
        <div class="column col-3">
        </div>

        <div class="column col-7">
          <p class="storyline">Storyline</p>


          <p class="storylineparagraph"> {{movie_details.overview}}</p>
          <p class="storyline">Cast</p>
        </div>

      </div>


    </div>
  </section>



  <section class="similarmovies">
    <div>
      <p class="similarmoviestext">Similar Movies</p>
    </div>
    <div class="container grid-lg">
      <div class="columns similarmovi">


        <div class="column">
          <div class="card">
            <div class="card-image movielist">
              <img src="/src/assets/poster.jpg" class="img-responsive">
              <p class="justiceleague">Justice Leauge</p>
            </div>
          </div>

        </div>

        <div class="column">
          <div class="card">
            <div class="card-image movielist">
              <img src="/src/assets/poster.jpg" class="img-responsive">
              <p class="justiceleague">Justice Leauge</p>
            </div>
          </div>

        </div>

        <div class="column">
          <div class="card">
            <div class="card-image movielist">
              <img src="/src/assets/poster.jpg" class="img-responsive">
              <p class="justiceleague">Justice Leauge</p>
            </div>
          </div>

        </div>

        <div class="column">
          <div class="card">
            <div class="card-image movielist">
              <img src="/src/assets/poster.jpg" class="img-responsive">
              <p class="justiceleague">Justice Leauge</p>
            </div>
          </div>

        </div>

        <div class="column">
          <div class="card">
            <div class="card-image movielist">
              <img src="/src/assets/poster.jpg" class="img-responsive">
              <p class="justiceleague">Justice Leauge</p>
            </div>
          </div>

        </div>

        <div class="column">
          <div class="card">
            <div class="card-image movielist">
              <img src="/src/assets/poster.jpg" class="img-responsive">
              <p class="justiceleague">Justice Leauge</p>
            </div>
          </div>

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

      this.$http.get('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US&api_key=37f0eca988a8498c779fac93ab4c4189')
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
        min-height: 520px;
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
}

.movierating {

    opacity: 0.65;
    font-size: 14px;
    color: #ffffff;
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
}

.similarmoviestext {
    margin-top: 47px !important;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #000000;
}

.movielist {

    height: 196.8px;
}

.justiceleague {
    margin-top: 8px;
    font-size: 11.2px;
    font-weight: 500;
    color: #000000;
}

.similarmovi {
    margin-top: 57px;
}

.movieheaderimage {
    width: 242px;
    height: 362px;
    object-fit: contain;
}

.movielogo {
    background-color: #05243E;
    padding-top: 20px;
    padding-left: 65px;

}
</style>
