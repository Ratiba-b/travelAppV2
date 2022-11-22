<template>
  <GoogleMap
    api-key="AIzaSyD0ATBNCmmNHEPoRbDGA0WJs-8bX_FDYkY"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="7"
  >
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { useTravelStore } from "../../stores/travelStore";
import { ref, computed } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  components: { GoogleMap, Marker },
  props: { lng: Number, lat: Number },
  setup() {
    const travelStore = useTravelStore();
    const travel = ref();
    const travels = ref([]);
    const route = useRoute();
    let lng = ref();
    let lat = ref();
    let center = ref({});
    let markerOptions = {
      position: center,
      label: "L",
    };
    travels.value = travelStore.travels;

    const getTravelById = async () => {
      if (travels.value.length === 0) {
        await travelStore.getTravels();
        travels.value = travelStore.travels;
      }

      console.log("length", travels.value);
      console.log("created for client id :", travels.value);
      travel.value = travels.value.filter((item) => {
        console.log("el display map", item);
        return item.id == route.params.id;
      });
      lat.value = parseInt(travel.value[0].latitude);
      lng.value = parseInt(travel.value[0].longitude);
      center.value = { lat: lat, lng: lng };
      console.log("travel filter", travel.value);
    };

    getTravelById();
    return { center, markerOptions, getTravelById, lng, lat, travel };
  },
});
</script>
