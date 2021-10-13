<template>
  <div class="looking-for">
    <Loading v-if="isLoading" />

    <template v-if="!isLoading">
      <div class="container">
       
      </div>
    </template>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Loading from './Loading.vue';
// import  from "@/components/.vue";
export default {
  name: "",
  components: 
    Loading
  ,
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    // ...mapGetters(["getLookingForGroups"]),
  },
  methods: {
    toggleSideBar() {
    //   this.$store.commit("toggleSideBar");
    },
  },
  async mounted() {
    // set loading screen
    this.isLoading = true;
    // await this.$store.dispatch("fetchLookForItems");
    this.isLoading = false;
  },
};
</script>

<style lang="css">


@media (min-width: 768px) {
 
}
</style>
