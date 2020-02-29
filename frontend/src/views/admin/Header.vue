<template lang="pug">
	include ../../tools/mixins.pug
	+b.HEADER.a-header
		+e.grid
			+e.SPAN.logo КОРТ

</template>

<script>
export default {
  name: "Header"
};
</script>