<template>

    <Loading  v-if="isLoading" />

    <Main v-if="!isLoading"/>
  
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
      isLoading:  this.$store.state.showCover,
    };
  },
  computed: {
    // ...mapGetters(["getLookingForGroups"]),
  },
  methods: {
	toggleCover() {
      this.$store.commit("toggleCover");
        console.log("isLoading: " + this.isLoading)
    },
  
  },
  async mounted() {
    // set loading screen
      setTimeout(this.toggleCover()
       , 5000);
   },
};
</script>
