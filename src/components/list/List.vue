<template lang="pug">
	include ../../tools/mixins.pug
	+b.list
		+e.item
			+e.img
				img
			+e.item-wrap
				+e.H3.item-title Title going here
				+e.SPAN.item-subtitle КРОССОВКИ
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			+e.item-info
				+e.SPAN.item-author Константин Константинопольский
				+e.SPAN.item-date 29.08.2020
</template>

<script>
export default {
  name: "List"
};
</script>
