<template lang="pug">
	include ../../tools/mixins.pug
	+b.list
		+e.item
			+e.img
				img(src="@/assets/images/post-1.jpg")
			+e.item-wrap
				+e.SPAN.item-section КРОССОВКИ
				+e.H3.item-title Российский релиз AIR Jordan 1 «Bred»
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.item-info
					+e.SPAN.item-author Константин Константинопольский
					+e.SPAN.item-date 29.08.2020

		+e.item
			+e.img
				img(src="@/assets/images/post-2.jpg")
			+e.item-wrap
				+e.SPAN.item-section КРОССОВКИ
				+e.H3.item-title Вирджил заебал со своими кавычками, ну реально
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.item-info
					+e.SPAN.item-author Константин Константинопольский
					+e.SPAN.item-date 29.08.2020

		+e.item
			+e.img
				img(src="@/assets/images/post-3.jpg")
			+e.item-wrap
				+e.SPAN.item-section КРОССОВКИ
				+e.H3.item-title А желтые ниче такие, на 8 марта дарить
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.item-info
					+e.SPAN.item-author Константин Константинопольский
					+e.SPAN.item-date 29.08.2020

		+e.item
			+e.img
				img(src="@/assets/images/post-1.jpg")
			+e.item-wrap
				+e.SPAN.item-section КРОССОВКИ
				+e.H3.item-title Российский релиз AIR Jordan 1 «Bred»
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.item-info
					+e.SPAN.item-author Константин Константинопольский
					+e.SPAN.item-date 29.08.2020

		+e.item
			+e.img
				img(src="@/assets/images/post-2.jpg")
			+e.item-wrap
				+e.SPAN.item-section КРОССОВКИ
				+e.H3.item-title Вирджил заебал со своими кавычками, ну реально
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.item-info
					+e.SPAN.item-author Константин Константинопольский
					+e.SPAN.item-date 29.08.2020

		+e.item
			+e.img
				img(src="@/assets/images/post-3.jpg")
			+e.item-wrap
				+e.SPAN.item-section КРОССОВКИ
				+e.H3.item-title А желтые ниче такие, на 8 марта дарить
				+e.P.item-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.item-info
					+e.SPAN.item-author Константин Константинопольский
					+e.SPAN.item-date 29.08.2020
		
		+e.SPAN.more больше
</template>

<script>
export default {
  name: "List"
};
</script>
