<template lang="pug">
	include ../../../tools/mixins.pug
	+b
		+e
		| Авторы
		router-view
</template>

<script>
export default {
	name: "Authors"
}
</script>