<template lang="pug">
	include ../../tools/mixins.pug
	+b.auth
		+e.content
			+e.FORM(@submit="auth").form
				+e.INPUT(v-model="login" type="text" placeholder="Логин").input
				+e.INPUT(v-model="password" type="password" placeholder="Пароль").input
				+e.INPUT(type="submit" value="Войти").btn
</template>

<script>
export default {
	name: "Auth",
	data: () => ({
		login: "",
		password: "",
		errors: []
	}),
	methods: {
		auth() {
		}
	}
}
</script>