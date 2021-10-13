<template>
 <div>
  
    <Loading  v-if="isLoading" />

<template  v-else >
    <Main/>
    </template>
     
 
  </div>

</template>

<script>
import Main from '@/components/Main.vue'
import Loading from '@/components/Loading.vue';
export default {
  name: 'Home',
  components: {
    Main,
    Loading
},
data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    // ...mapGetters(["getLookingForGroups"]),
  },
  methods: {
   
    //   this.$store.commit("");
   
  },
  async mounted() {
  
    // set loading screen
    // this.isLoading = true;
    // await this.$store.dispatch("");
           console.log("isLoading: " + this.isLoading)
    setTimeout(function(){
       this.isLoading = false; 
       console.log("isLoading: " + this.isLoading)
       }, 5000);
    
  },
}
</script>
