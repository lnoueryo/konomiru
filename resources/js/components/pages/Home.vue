<template>
    <v-container>
        <v-row>
            <router-link to="/search">検索へ</router-link>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12">
                みんなの好きな作品
            </v-col>
        </v-row>
        <v-row v-if="ready">
            <v-col v-for="(movie, i) in movies" :key="i">
                <v-card class="d-flex" :style="selectId == i ? {backgroundColor: '#c9fbff'} : ''" @click="select(i, movie)" width="330"><!--qiita-->
                    <div>
                        <v-img v-bind:src="'http://image.tmdb.org/t/p/w154/' + movie.poster_path"></v-img>
                    </div>
                    <div>
                        <card-template :title="movie.title" :release_date="movie.release_date" :overview="movie.overview" />
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-btn class="mx-2" fab fixed right bottom dark small color="primary">
        <!-- <v-btn class="mx-2" fab fixed right bottom dark small color="primary" @click="save"> -->
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
    </v-container>
</template>

<script>
import axios from 'axios'
import CardTemplate from '../organisms/CardTemplate.vue'
export default {
    name: 'Home',
    components: {
        'card-template': CardTemplate,
    },
    data() {
        return {
            selectId: -1,
            movie: '',
            movies: [],
            ready: false,
        }
    },
    methods: {
        getMovies() {
            axios.get('/api/index')
            .then(response => {
                this.movies = response.data.results
                console.log(this.movies);
                this.ready = true;
            })
            console.log(this.movies);

        },
         getItem(movie) {
             this.movie = movie;
            console.log('押した' + movie.title);
        },
        select(index, movie){
            if(index == this.selectId){
                this.selectId = -1;
                this.movie = '';
            } else {
                this.selectId = index;
                this.movie = movie;
            }
        }
    },
    created() {
        this.getMovies();
    },
}
</script>

<style scoped>
.v-image__image--cover {
    background-size: contain;
}
.red {
  background-color: red;
}
</style>