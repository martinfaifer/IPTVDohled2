<template>
  <div>
    <br />
    <div class="body-2 mr-lg-12">
      <all-channels></all-channels>
    </div>
  </div>
</template>
<script>
let AllChannels = () => import("./ChannelsComponents/AllChannels");

export default {
  data() {
    return {};
  },
  components: {
    "all-channels": AllChannels
  }
};
</script>

