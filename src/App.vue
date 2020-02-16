<template lang="pug">
	#app
		Header
		main
		Footer
</template>

<script>
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>