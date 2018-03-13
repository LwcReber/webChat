<template lang="html">
  <div class="">
    登录页
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      this.$ajax
        .post("/register", {
          data: {
            name: 'aaa',
            password: '6541321',
            surePsw:  '6541321',
          }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
}
</script>

<style lang="css">
</style>
