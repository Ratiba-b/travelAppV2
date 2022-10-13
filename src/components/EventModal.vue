<template>
  <div>
    <fieldset>
      <legend>Event details</legend>
      {{ storeEvents.events }}
    </fieldset>
  </div>
</template>

<script>
import { useEventsStore } from "../store/piniaStore";
const storeEvents = useEventsStore();

export default {
  //   computed: {
  //     storeEvents,
  //   },
};
</script>

<style></style>
