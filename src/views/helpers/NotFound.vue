<template lang="pug">
  div
    span 404
    div(@click="$router.go(-1)") Вернуться назад
</template>

<script>
export default {
  name: "NotFound"
}
</script>