<template lang="pug">
	include ../../tools/mixins.pug
	+b.HEADER.header
		+e.wrap
			+e.logo
			+e.UL.nav
				+e.LI.nav-item
					a кроссовки
				+e.LI.nav-item
					a мода
				+e.LI.nav-item
					a музыка
				+e.LI.nav-item
					a жизнь
</template>

<script>
export default {
  name: "Header"
};
</script>