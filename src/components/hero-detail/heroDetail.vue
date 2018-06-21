<template>
    <div>

        <div v-if="hero">
            <h2>{{ hero.name | uppercase}} Details</h2>
            <div><span>id: </span>{{hero._id}}</div>
            <div>
                <label>name:
                    <input v-model="hero.name" placeholder="name"/>
                </label>
            </div>
            <button v-on:click="goBack()">go back</button>
            <button v-on:click="save()">save</button>
        </div>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Hero from '../../models/hero';
    import { heroService } from '../../services/hero.service';
    import Component from 'vue-class-component';


    Vue.filter('uppercase', (value: string) =>{
        if(!value) return '';
        return value.toUpperCase();
    });

    @Component
    export default class HeroDetail extends Vue {
        hero : Hero = this.getHero();


        constructor(){
            super();


        }

        getHero(): any{
            let params = window.location.href.split("/");

            return heroService.getHero(params[params.length - 1])
                 .then(hero => {
                     if(hero)
                        this.hero = hero.data;
                 });
        }

        goBack(): void {
            window.history.back();
        }

        save(): void {

            heroService.updateHero(this.hero)
                .then(() => this.goBack());
        }

    }
</script>


<style scoped src="./heroDetail.css"></style>
