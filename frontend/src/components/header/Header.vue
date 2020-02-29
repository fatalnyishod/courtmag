<template lang="pug">
	include ../../tools/mixins.pug
	+b.HEADER.header
		+e.wrap
			router-link(to="/" v-slot="{ href, route, navigate, isExactActive}")
				+e.DIV.logo
					span(v-if="isExactActive") KOPT
					a(v-else :href="href" @click="navigate") KOPT

			+e.UL.nav
				router-link(to="Kicks" v-slot="{ href, route, navigate, isExactActive }")
					+e.LI(:class="[isExactActive && 'header__nav-item--active']").nav-item
						span(v-if="isExactActive && 'header__nav-item--active'") кроссовки
						a(v-else :href="href" @click="navigate") кроссовки
				
				router-link(to="Fashion" v-slot="{ href, route, navigate, isExactActive }")
					+e.LI(:class="[isExactActive && 'header__nav-item--active']").nav-item
						span(v-if="isExactActive && 'header__nav-item--active'") мода
						a(v-else :href="href" @click="navigate") мода
				
				router-link(to="Music" v-slot="{ href, route, navigate, isExactActive }")
					+e.LI(:class="[isExactActive && 'header__nav-item--active']").nav-item
						span(v-if="isExactActive && 'header__nav-item--active'") музыка
						a(v-else :href="href" @click="navigate") музыка
				
				router-link(to="Life" v-slot="{ href, route, navigate, isExactActive }")
					+e.LI(:class="[isExactActive && 'header__nav-item--active']").nav-item
						span(v-if="isExactActive && 'header__nav-item--active'") жизнь
						a(v-else :href="href" @click="navigate") жизнь
</template>

<script>
export default {
  name: "Header"
};
</script>