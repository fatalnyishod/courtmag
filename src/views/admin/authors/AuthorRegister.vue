<template lang="pug">
	include ../../../tools/mixins.pug

	+b.reg-author
		+e.content
			+e.FORM(@submit="register").form
				+e.INPUT(v-model="name" type="text" placeholder="Имя").input
				+e.INPUT(v-model="email" type="text" placeholder="Почта").input
				+e.INPUT(v-model="password" type="password" placeholder="Пароль").input
				+e.INPUT(type="submit" value="Добавить").btn
</template>

<script>
export default {
  name: "AuthorRegister",
	data: () => ({
    name: "",
    email: "",
		password: "",
		errors: []
	}),
	methods: {
		register() {
		}
	}  
}
</script>