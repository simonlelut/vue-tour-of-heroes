<template>
    <div>
        <h3>Top Heroes</h3>

        <div class="grid grid-pad">

            <router-link v-for="hero in heroes" v-bind:key="hero._id"
                         class="col-1-4"  :to="{name: 'hero-detail',params:{id:hero._id}}" >
                <div class="module hero">
                    <h4>{{hero.name}}</h4>
                </div>
            </router-link>
        </div>

        <hero-search></hero-search>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Hero from '../../models/hero';
    import Component from 'vue-class-component';
    import HeroSearch from '../hero-search/HeroSearch.vue'
    import { heroService } from '../../services/hero.service';

    @Component({
        components: { HeroSearch}
    })

    export default class Dashboard extends Vue {
        heroes : Hero[] = [];


        constructor(){
            super()
            this.getHeroes();
        }

        getHeroes() {

            return heroService.getHeroes()
                .then((response) => {
                    if(response)
                        this.heroes = response.data.slice(1,5)
                });
        }

    }
</script>


<style scoped src="./Dashboard.css"></style>
