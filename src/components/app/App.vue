<template>
  <div>
    <h1>{{title}}</h1>

    <nav>
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/heroes">Heroes</router-link>
    </nav>
    <router-view/>
    <Messages></Messages>

  </div>
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component';
    import Messages from '../messages/Messages.vue'

    @Component({
        components : { Messages}
    })
    export default class App extends Vue {
        title: string;

        constructor(){
            super();
            this.title = "Vue.js - Tour of Heroes"
        }

    }
</script>


<style scoped src="./app.css"></style>
