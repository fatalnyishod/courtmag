<template lang="pug">
	#app
		Header
		main
			router-view
		Footer
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default {
  name: "UserApp",
  components: {
    Header,
    Footer
  }
};
</script>