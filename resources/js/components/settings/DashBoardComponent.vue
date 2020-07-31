<template>
  <div>
    <br />
    <v-container fluid>
      <div>
        <v-row class="body-2">
          <percent-monitored class></percent-monitored>
          <v-spacer></v-spacer>
          <percent-functions class></percent-functions>
          <v-spacer></v-spacer>
          <iptvdevices-component></iptvdevices-component>
          <v-spacer></v-spacer>
          <volume-chart></volume-chart>
          <v-spacer></v-spacer>
          <hdd-space class></hdd-space>
        </v-row>
      </div>
    </v-container>
    <!-- <v-container fluid>
        <transcoderchart-component></transcoderchart-component>
    </v-container> -->
    <v-container fluid>
      <div>
        <v-row class="body-2 mt-8">
          <v-col>
            <crashed-channels></crashed-channels>
          </v-col>
          <v-col>
            <v-spacer></v-spacer>
            <current-crashed></current-crashed>
          </v-col>
          <v-col class="pr-12">
            <v-spacer></v-spacer>
            <volume-problems></volume-problems>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import HddSpace from "./DashboardComponents/newTemplates/DiskSpaceComponent";
import CrashedChannels from "./DashboardComponents/CrashedChannels";
import CurrentCrashed from "./DashboardComponents/CurrentCrashedChannels";
import PercentMonitored from "./DashboardComponents/newTemplates/ChannelPomerComponent";
import PercentFunctionChannels from "./DashboardComponents/newTemplates/ChannelsFunctionsSum";
import VolumeProblems from "./DashboardComponents/newTemplates/ChannelsWithAudioProblem";
import VolumeChart from "./DashboardComponents/newTemplates/ChannelAudio";
import IPTVDevicesComponent from "./DashboardComponents/newTemplates/IPTVDevicesComponent";
// import TranscoderChartComponent from "./DashboardComponents/newTemplates/TranscoderChartComponent";

export default {
  data() {
    return {
      items: [
        { icon: "mdi-view-dashboard", title: "Přehled" },
        { title: "Přehled nefunkčních kanálů", icon: "mdi-television" },
        { title: "Přehled odeslaných Mailů", icon: "mdi-email" },
        { title: "Historie uživatelů", icon: "mdi-history" }
      ]
    };
  },
  components: {
    "crashed-channels": CrashedChannels,
    "hdd-space": HddSpace,
    "current-crashed": CurrentCrashed,
    "percent-monitored": PercentMonitored,
    "percent-functions": PercentFunctionChannels,
    "volume-problems": VolumeProblems,
    "volume-chart": VolumeChart,
    "iptvdevices-component": IPTVDevicesComponent,
    // "transcoderchart-component": TranscoderChartComponent
  }
};
</script>

