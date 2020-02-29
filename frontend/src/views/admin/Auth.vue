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
    auth() {
      console.log(this.login, this.password);
    }
  }
};
</script>