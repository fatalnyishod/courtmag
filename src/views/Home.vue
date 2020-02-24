<template lang="pug">
	include ../tools/mixins.pug
	+b.home
		+e.wrap
			+e.post--l
				+e.H2.post-title Title here
				+e.P.post-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				+e.post-wrap
					+e.A.post-author Lorem Ipsum
					+e.SPAN.post-date 12.02.2020

		+e.wrap
			+e.post--m
				+e.H2.post-title Title here
				+e.P.post-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
				+e.post-wrap
					+e.A.post-author Lorem Ipsum
					+e.SPAN.post-date 12.02.2020
			+e.post--m
				+e.H2.post-title Very long title placing right here
				+e.P.post-text Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				+e.post-wrap
					+e.A.post-author Lorem Ipsum
					+e.SPAN.post-date 12.02.2020
		
		+e.line

		+e.wrap
			+b.list
			+b.aside
</template>

<script>
export default {
  name: "Home"
};
</script>
