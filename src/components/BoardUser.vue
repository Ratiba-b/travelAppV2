<template>
  <h3>{{ content }}</h3>
</template>

<script>
import { userService } from "@/_services";
export default {
  name: "user",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    userService.authGuard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<style></style>
