<template>
  <form class="flex flex-col space-y-3">
    <div>
      <label for="age" class="block text-sm font-medium text-gray-700"
        >Âge</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          type="number"
          name="age"
          id="age"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="18"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(["formValues"]);
</script>
