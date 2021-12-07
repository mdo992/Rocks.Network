<template>
  <v-app>
    <v-overlay :value="this.$store.state.loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-main v-if="!this.$store.state.loading" class="ma-6">
      <h1 v-if="this.$vuetify.breakpoint.mdAndUp" class="text-h1">
        Rocks Network
      </h1>
      <h1 v-else-if="this.$vuetify.breakpoint.smAndUp" class="text-h2">
        Rocks Network
      </h1>
      <h1 v-else-if="this.$vuetify.breakpoint.xs" class="text-h4 center-text">
        Rocks Network
      </h1>
      <v-row class="mt-6" no-gutters>
        <v-col>
          <v-tabs
            v-model="currentTab"
            grow
            color="#fff"
            background-color="#121212"
          >
            <v-tab>Home</v-tab>
            <v-tab>Products</v-tab>
            <v-tab>Forum</v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <div class="d-flex">
            <v-spacer></v-spacer>
          </div>
        </v-col>
      </v-row>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    currentTab: 0
  }),
  computed: {
    currentRoute: {
      get() {
        return this.$route.name;
      },
      set(value) {
        if (this.currentRoute.toLowerCase() != value.toLowerCase())
          this.$router.replace(value);
      }
    }
  },
  watch: {
    currentRoute() {
      switch (this.currentRoute.toLowerCase()) {
        case "/":
          this.currentTab = 0;
          break;
        case "products":
          this.currentTab = 1;
          break;
        case "forum":
          this.currentTab = 2;
          break;
      }
    },
    currentTab() {
      switch (this.currentTab) {
        case 0:
          this.currentRoute = "/";
          break;
        case 1:
          this.currentRoute = "products";
          break;
        case 2:
          this.currentRoute = "forum";
          break;
      }
    }
  },
  methods: {},
  mounted: async function() {
    if (localStorage.getItem("lightMode")) {
      this.$vuetify.theme.dark = Boolean(localStorage.getItem("lightMode"));
    } else this.$vuetify.theme.dark = true;
    this.$store.state.loading = false;
  }
};
</script>
