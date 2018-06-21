<template>
    <div id="Hero-search">
        <div id="search-component">
            <h4>Hero Search</h4>

            <input type="text" v-model.trim="search" id="search-box" />
            <ul class="search-result">
                <li v-for="hero in heroes$" v-bind:key="hero._id" >
                    <router-link :to="{name:'hero-detail', params: {id: hero._id}}"> {{hero.name}}</router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import Hero from '../../models/hero';
    import { heroService } from '../../services/hero.service';


    @Component
    export default class HeroSearch extends Vue {
        heroes$: Hero[] = [];
        search: string = "";

        constructor(){
            super();

        }

        @Watch('search')
        onSearchChanged(val: string){

            if(val !== ""){
                heroService.searchHeroes(val).then((response) => {
                    if(response)
                        this.heroes$ = response.data;
                    else
                        this.heroes$ = [];
                })
            }
            else
                this.heroes$ = [];

        }

    }
</script>


<style scoped src="./heroSearch.css"></style>
