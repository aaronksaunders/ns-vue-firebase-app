<template>
  <Page>
    <!-- <script src="http://localhost:8098"></script> -->
    <ActionBar title="{N} Login Example"></ActionBar>
    <StackLayout backgroundColor="#FFFFFF">
      <StackLayout padding="15">
        <StackLayout>
          <Label text="Email" class="input-text-label"></Label>
          <TextField class="input-text" autocorrect="false" keyboardType="email" hint="Email Address" v-model="input.email"></TextField>
        </StackLayout>
        <StackLayout style="padding-top: 10">
          <Label text="Password" class="input-text-label"></Label>
          <TextField secure="true" class="input-text" hint="Password" v-model="input.password"></TextField>
          <Button class="btn btn-primary" style="height:20" text="Login" @tap="doLogin()">Login</Button>
        </StackLayout>
        <StackLayout>
          <Label :text="authChecked" class="input-text-label"></Label>
          <Label :text="error && error.message" textWrap="true" class="input-text-label"></Label>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("auth");
export default {
  computed: {
    ...mapState(["authChecked", "error"])
  },
  mounted() {
    console.log("login page created");
  },
  data() {
    return {
      msg: "Welcome to NativeScript-Vue.",
      input: {
        email: "",
        password: ""
      }
    };
  },
  components: {},
  methods: {
    doLogin() {
      console.log("input", JSON.stringify(this.input));
      this.$store.dispatch("auth/login", this.input);
    }
  }
};
</script>
<style>
.input-text {
  text-align: left;
  padding: 5;
}

.input-text-label {
  text-align: left;
  font-size: normal;
  padding-left: 5;
}
</style>


