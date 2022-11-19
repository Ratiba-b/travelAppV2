<template>
  <div class="bg-white">
    <div class="ml-40 pl-40 pt-20 w-5/6 grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3">
        carte
        <!-- <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Technical Specifications
        </h2>
        <p class="mt-4 text-gray-500">
          The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active cards
          from new ones, or can be used to archive important task lists.
        </p>

        <dl
          class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="border-t border-gray-200 pt-4"
          >
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl> -->
      </div>
      <div class="col-span-2">
        reste
        <!-- <div class="flow-root">
          <ul role="list" class="-mb-8">
            <li v-for="(event, eventIdx) in timeline" :key="event.id">
              <div class="relative pb-8">
                <span
                  v-if="eventIdx !== timeline.length - 1"
                  class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      :class="[
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                      ]"
                    >
                      <component
                        :is="event.icon"
                        class="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div
                    class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                  >
                    <div>
                      <p class="text-sm text-gray-500">
                        {{ event.content }}
                        <a
                          :href="event.href"
                          class="font-medium text-gray-900"
                          >{{ event.target }}</a
                        >
                      </p>
                    </div>
                    <div
                      class="whitespace-nowrap text-right text-sm text-gray-500"
                    >
                      <time :datetime="event.datetime">{{ event.date }}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div> -->
        <!-- <div class="row-span-2 col-span-2">
          <Steps />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Steps from "./Steps.vue";
import { CheckIcon, HandThumbUpIcon, UserIcon } from "@heroicons/vue/20/solid";

export default {
  name: "Map",
  components: {
    Steps,
  },
  data() {
    return {};
  },

  setup() {
    const timeline = [
      {
        id: 1,
        content: "Applied to",
        target: "Front End Developer",
        href: "#",
        date: "Sep 20",
        datetime: "2020-09-20",
        icon: UserIcon,
        iconBackground: "bg-gray-400",
      },
      {
        id: 2,
        content: "Advanced to phone screening by",
        target: "Bethany Blake",
        href: "#",
        date: "Sep 22",
        datetime: "2020-09-22",
        icon: HandThumbUpIcon,
        iconBackground: "bg-blue-500",
      },
      {
        id: 3,
        content: "Completed phone screening with",
        target: "Martha Gardner",
        href: "#",
        date: "Sep 28",
        datetime: "2020-09-28",
        icon: CheckIcon,
        iconBackground: "bg-green-500",
      },
      {
        id: 4,
        content: "Advanced to interview by",
        target: "Bethany Blake",
        href: "#",
        date: "Sep 30",
        datetime: "2020-09-30",
        icon: HandThumbUpIcon,
        iconBackground: "bg-blue-500",
      },
      {
        id: 5,
        content: "Completed interview with",
        target: "Katherine Snyder",
        href: "#",
        date: "Oct 4",
        datetime: "2020-10-04",
        icon: CheckIcon,
        iconBackground: "bg-green-500",
      },
    ];
    const features = [
      { name: "Origin", description: "Designed by Good Goods, Inc." },
      {
        name: "Material",
        description:
          "Solid walnut base with rare earth magnets and powder coated steel card cover",
      },
      { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
      {
        name: "Finish",
        description: "Hand sanded and finished with natural oil",
      },
      { name: "Includes", description: "Wood card tray and 3 refill packs" },
      {
        name: "Considerations",
        description:
          "Made from natural materials. Grain and color vary with each item.",
      },
    ];

    return {
      timeline,
    };
  },
  methods: {
    centerUpdated() {},
  },
};
</script>
