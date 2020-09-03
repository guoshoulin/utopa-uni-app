<template>
  <view class="home-page">
    首页
  </view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as types from '../../mutation-types';

export default {
  name: 'HomePage',
  data() {
    return {
      title: "Hello"
    };
  },
  computed: {
    ...mapGetters(["testCount"]),
    ...mapGetters('loading', {
      testLoading: types.TEST_COUNT
    })
  },
  watch: {
    testLoading (loading) {
      if (loading) uni.showLoading();
      else uni.hideLoading()
    }
  },
  onLoad() {},
  mounted () {
  },
  methods: {
    ...mapActions([types.TEST_COUNT]),
    async add () {
      console.log(this.testLoading)
      const res = await this[types.TEST_COUNT]({count: this.testCount + 1})
      console.log('add-before', res)
    },
    subtract(){
      this[types.TEST_COUNT]({count: this.testCount -1})
    }
  }
};
</script>

<style lang="scss">
@import '@/static/styles';

.home-page{
  min-height: 100vh;
}

</style>
