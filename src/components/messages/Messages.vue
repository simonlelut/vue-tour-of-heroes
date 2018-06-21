<template>
 <div>
     <div v-if="messages.length">

         <h2>Messages</h2>
         <button class="clear"
                 v-on:click="clear()">clear</button>
         <div v-for='message in messages' > {{message}} </div>

     </div>

 </div>

</template>

<script lang="ts">

    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { State} from 'vuex-class';

    @Component
    export default class Messages extends Vue {

        @State messages : string[];

        clear(){
            this.$store.state.messages = [];
        }

    }
</script>

