<template lang="pug">
	#app
		Header
		router-view
</template>

<script>
import Header from "../admin/Header";

export default {
  name: "AdminApp",
  components: {
    Header
  }
};
</script>