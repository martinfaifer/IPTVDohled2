<template>
  <div>
    <div class="body-1" id="alertDiv">
      <div class="white--text font-weight-normal">
        <v-alert
          v-if="status.isAlert === 'isAlert'"
          :type="status.stat"
          class="font-weight-regular"
        >{{status.msg}}</v-alert>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["status"]
};
</script>

