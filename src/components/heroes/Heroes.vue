<template>
   <div>
       <h2>My Heroes</h2>

       <div>
           <label>Hero name:
               <input v-model.trim="heroName"/>
           </label>
           <button v-on:click="add()">add</button>
       </div>

       <ul class="heroes">
           <li v-for="(hero,index) in heroes" v-bind:key="hero._id">

               <router-link :to="{name: 'hero-detail',params:{id:hero._id}}">

                   <span class="badge">{{index+1}}</span> {{hero.name}}
               </router-link>

               <button class="delete" title="delete hero"
                       v-on:click="deleteHero(hero)">x</button>
           </li>
       </ul>


   </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import Hero from '../../models/hero';
    import { heroService } from '../../services/hero.service';
    import Component from 'vue-class-component';


    @Component
    export default class Heroes extends Vue {
        heroes : Hero[] = [];
        heroName: string= "";

        created(){
            this.getHeroes();
        }

        getHeroes() {
            return heroService.getHeroes()
                .then((response) => {
                    if(response)
                        this.heroes = response.data
                });
        }


        deleteHero(hero: Hero){

            heroService.deleteHero(hero).then((response) =>{
                if(response)
                    this.heroes = this.heroes.filter(h => h !== hero);
            });
        }

        add(): void {

            if (this.heroName === "") { return; }

            heroService.addHero(this.heroName).then(response => (this.getHeroes()));

            this.heroName = '';
        }

    }
</script>


<style scoped src="./heroes.css"></style>
