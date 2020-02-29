<template lang="pug">
	include ../../tools/mixins.pug
	+b.MAIN.a-main
		+e.grid
			+b.a-home
				+e.main
					List

				+e.ASIDE.aside
					+b.btn Напишу-ка я еще статейку
					+b.profile
						+e.wrap
							+e.ava
								img(src="@/assets/images/post-1.jpg")
							+e.wrap-item
								+e.SPAN.name Контантин Константинопольский


</template>

<script>
import List from "@/components/list/List";

export default {
  name: "Home",
  components: {
    List
  }
};
</script>