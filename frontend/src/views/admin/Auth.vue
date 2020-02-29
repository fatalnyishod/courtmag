<template lang="pug">
	include ../../tools/mixins.pug
	+b.MAIN.a-main
		+e.grid
			+b.FORM(@submit.prevent="auth").a-auth
				+e.SPAN.title Автор, да? Докажи!
				+e.INPUT(v-model="login" type="email" placeholder="Логин").input.input
				+e.INPUT(v-model="password" type="password" placeholder="Пароль").input.input
				+e.INPUT(type="submit" value="Бля буду").btn.btn

</template>

<script>
export default {
  name: "Auth",
  data: () => ({
    login: "",
    password: ""
  }),
  methods: {
    async auth() {
      let result = await this.$axios.post("/api/login", {
        email: this.login,
        password: this.password
      });
      console.log(result);
      if (result.status === 200) {
        this.$router.push({ name: "AdminHome" });
      }
    }
  }
};
</script>