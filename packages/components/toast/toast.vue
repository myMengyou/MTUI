<template>
  <transition name="fade" v-on:after-leave="afterLeave">
    <div class="mtui-toast-box" :class="className" v-show="visible">
      <div class="mtui-mask_transparent" :class="{'mtui-hide':!showMask}" @click="closeToast"></div>
      <div class="mtui-toast">
          <!-- <i class="mtui-icon_toast mtui-icon-success-no-circle"></i> -->
          <p class="mtui-toast__content" v-html="content"></p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      time: 2 * 1000,
      className: '',
      content: '',
      visible: false,
      showMask: false
    };
  },
  methods: {
    afterLeave() {
      this.callback = null;
      this.time = 2 * 1000;
      this.className = '';
      this.content = '';
    },
    closeToast() {
      this.close();
    },
  },
};
</script>
<style lang="less">
.mtui-toast{
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.mtui-hide {
  display: none;
}
</style>
