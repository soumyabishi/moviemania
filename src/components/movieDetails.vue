<template>


 <section class="movie-detials-intro">

   <div class="container grid-xl">



     <div class="columns">

       <div class="column col-4">

         <img src="/src/assets/poster.jpg" width="100%">
       </div>


       <div class="column col-8">

          <h1 class="text-light">Justice league</h1>
          <p>Action, Adventure, Fantasy, Science Fiction</p>
       </div>


     </div>

   </div>

 </section>



             <!-- <p> Movie name : <br>{{movie_details.original_title}}  </p>
            <p> Overview : <br>{{movie_details.overview}}  </p>
              <p> Release Date : <br>{{movie_details.release_date}}  </p> -->



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



</style>
