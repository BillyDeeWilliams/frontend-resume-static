<template>

    <Loading :isLoading="isLoading" />
<transition name="fade">
    <Main className="fade" v-if="!show"/>
</transition>
  
</template>

<script>
import Main from '@/components/Main.vue'
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  props: ["isLoading"],
  components: {
    Main,
    Loading
    
},
 data() {
    return {
       show:  true}
  },
  computed: {
    // ...mapGetters(["getLookingForGroups"]),
  },
  methods: {
	fadeMe: function() {
      this.show = !this.show
    }
  
  },
  async mounted() {
    var that = this;

      setTimeout(function() {
        that.show = false;
      }, 5000); // hide the message after 3 seconds
   },
};
</script>

<style scoped> 
.fade{
    margin-top: 25px;
    font-size: 21px;
    text-align: center;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}
</style>