<template lang="pug">
	include ../../tools/mixins.pug
	+b.HEADER.header
		+e.wrap
			+e.SPAN.logo KOPT
			+e.UL.nav
				+e.LI.nav-item
					router-link(to="Kicks") кроссовки
				+e.LI.nav-item
					router-link(to="Fashion") мода
				+e.LI.nav-item
					router-link(to="Music") музыка
				+e.LI.nav-item
					router-link(to="Life") жизнь
</template>

<script>
export default {
  name: "Header"
};
</script>