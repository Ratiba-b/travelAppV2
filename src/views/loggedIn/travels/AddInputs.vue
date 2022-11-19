<template>
  <div class="col-span-6 sm:col-span-3">
    <label for="first-name" class="block text-sm font-medium text-gray-700"
      >Départ iata</label
    >
    <input
      type="search"
      name="first-name"
      id="first-name"
      autocomplete="given-name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="search"
    />

    <!-- Dropdown menu -->
    <div
      id="dropdown"
      class="w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="col-span-6 sm:col-span-3">
    <label for="first-name" class="block text-sm font-medium text-gray-700"
      >Arrivée iata</label
    >
    <input
      type="text"
      name="first-name"
      id="first-name"
      autocomplete="given-name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="search"
    />
  </div>
  <div class="col-span-6 sm:col-span-3">
    <label for="first-name" class="block text-sm font-medium text-gray-700"
      >Date de Départ</label
    >
    <input
      type="date"
      name="first-name"
      id="first-name"
      autocomplete="given-name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="search"
    />
  </div>

  <div class="col-span-6 sm:col-span-3">
    <button
      type="button"
      class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      rechercher un vol
    </button>
  </div>
</template>
