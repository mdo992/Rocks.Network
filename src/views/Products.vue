<template>
  <v-main>
    <v-row no-gutters class="my-12 mx-auto" style="max-width: 1600px">
      <v-col class="ma-auto" style="max-width: 1000px">
        <v-card class="ma-auto">
          <v-card-title class="justify-center"
            >Kahoot.rocks - Kahoot auto answer and spammer</v-card-title
          >
          <v-card-text>
            <a href="https://kahoot.rocks">Kahoot.Rocks</a> is a simple-to-use
            website that allows you to get all the correct answers for every
            Kahoot and/or smash it at the same time. It is also updated
            regularly to continue working with the latest question types and
            changes from Kahoot, while adding new requested features too.
            Whether you want to add 255 bots in a matter of seconds, or fill the
            podium with auto answer bots, kahoot.rocks will work for you
            <br /><br />
            <div class="text-center">
              <button
                type="submit"
                class="text-center v-btn v-btn--contained theme--dark v-size--default info"
                alt="Check it out"
                @click="Goto(`https://kahoot.rocks`)"
              >
                Check it out
              </button>
            </div>
            <div class="text-right">
              <span>Posted at 16:19 on 19th August 2020</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "Products",
  methods: {
    Goto(url) {
      window.open(url, "_blank");
    }
  },
  computed: {
    userEmail() {
      return this.$store.state.user.emiail;
    }
  }
};
</script>
