<template>
<div>

    <section>
        <div class="container grid-xl">
            <div class="columns">

                <div class="column col-4">

                    <img src="/src/assets/logo.svg" width="100%">
                </div>
              </div>

         </div>
    </section>


    <section class="movie-detials-intro">

        <div class="container grid-xl">


            <div class="columns">

                <div class="column col-4">

                    <img class="movieheaderimage" src="/src/assets/poster.jpg" width="100%">
                </div>


                <div class="column col-8">

                    <h1 class="text-light moviename"> {{movie_details.original_title}}</h1>

                    <span class="moviecategory" v-for="genre_details in movie_details.genres">
                         {{genre_details.name}}
                         ,
                      </span>

                    <div class="columns">


                        <div class="column col-4">

                            <p class="popularity"> Popularity</p>
                            <h2 class="moviepercent">{{movie_details.popularity}}</h2>

                        </div>

                        <div class="column col-4 ratings">

                            <p class="movierating">Rating </p>
                            <p class="movieindex">  {{movie_details.vote_average}}</p>

                        </div>

                    </div>

                    <div class="columns">


                        <div class="column col-4">

                            <button class="btn watchtrailer watchtrailertext"><img src="/src/assets/playcircle.svg ">Watch Trailer</button>

                        </div>

                        <div class="column col-4 ratings">

                            <img src="/src/assets/plus.svg"><span class="watchtrailertext">Add to watchlist</span>

                        </div>

                    </div>



                </div>


            </div>

        </div>


    </section>


    <section>
        <div class="container grid-xl">
            <div class="columns">
                <div class="column col-4">
                </div>

                <div class="column col-8">
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
                        <img src="/src/assets/poster.jpg" class="img-responsive" >
                        <p class="justiceleague">Justice Leauge</p>
                    </div>
                    </div>

            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image movielist">
                        <img src="/src/assets/poster.jpg" class="img-responsive" >
                        <p class="justiceleague">Justice Leauge</p>
                    </div>
                </div>

            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image movielist">
                        <img src="/src/assets/poster.jpg" class="img-responsive" >
                        <p class="justiceleague">Justice Leauge</p>
                    </div>
                </div>

            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image movielist">
                        <img src="/src/assets/poster.jpg" class="img-responsive" >
                        <p class="justiceleague">Justice Leauge</p>
                    </div>
                </div>

            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image movielist">
                        <img src="/src/assets/poster.jpg" class="img-responsive" >
                        <p class="justiceleague">Justice Leauge</p>
                    </div>
                </div>

            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image movielist">
                        <img src="/src/assets/poster.jpg" class="img-responsive" >
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

  data: function(){
    return {

      loading: false,
      movie_details:'',
    }
  },


  // Functions
  methods: {

    fetchData() {

      this.loading = true;

      var movieId = this.$route.params.id;

      this.$http.get('https://api.themoviedb.org/3/movie/' + movieId  + '?language=en-US&api_key=37f0eca988a8498c779fac93ab4c4189' )

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

@import url('/node_modules/spectre.css/dist/spectre.min.css');



section.movie-detials-intro{
    background-color: #777;
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

.moviepercent{
    font-size: 31px;
    font-weight: 500;
    line-height: 0.77;
    color: #ffffff;
}

.movieindex{
    font-size: 31px;
    font-weight: 500;
    line-height: 0.77;
    color: #ffffff;
}

.ratings{
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

.storylineparagraph{
    margin-top: 18px;
    font-size: 16px;
    color: #777777;
}

.similarmovies {
    height: 589px;
    background-color: #f4f8fc;
}

.similarmoviestext{
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

.movieheaderimage{
    width: 242px;
    height: 362px;
    object-fit: contain;
}
</style>
