<template lang="pug">
  include ../../../tools/mixins.pug
  router-link(:to="{ name: 'article-create' }")
    | Создать
</template>

<script>
export default {
  name: "ArticlesList"
}
</script>