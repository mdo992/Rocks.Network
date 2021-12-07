<template>
  <v-main>
    <v-row no-gutters class="my-12 mx-auto" style="max-width: 1600px">
      <v-col class="my-auto mr-auto" style="max-width: 1000px">
        <v-card class="ma-auto">
          <v-card-title class="justify-center"
            >Kahoot.rocks V2.5 released!</v-card-title
          >
          <v-card-text>
            <a href="https://kahoot.rocks">Kahoot.Rocks</a> just received one of
            it's most important updates ever, fixing the constant CORS problems,
            while updating the UI at the same time. Absolutely everything now
            runs from your browser, so there should be almost no latency and the
            bot will be able to answer even faster. The bot now has the
            capability to answer every type of question, including all of the
            recently added ones. <br /><br />
            <div class="text-right">
              <span>Posted at 15:03 on 9th October 2020</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="ma-auto ml-md-6 ml-lg-6 ml-xl-6" style="max-width: 300px">
        <v-card class="ma-auto">
          <v-card-title class="justify-center">Discord Server</v-card-title>
          <v-card-text class="text-center">
            <v-btn
              color="#7289da"
              @click="Open(`https://rocks.network/discord`)"
              >Discord Server
              <v-icon right dark class="ml-2">mdi-discord</v-icon>
            </v-btn>
            <br /><br />
            <div class="text-right">
              <span>Posted at 15:03 on 9th October 2020</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "Home",
  methods: {
    Open(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
