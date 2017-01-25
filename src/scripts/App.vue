<template lang="jade">
main.section
  .columns
    aside.column.is-3
      searchbox(variable="movieOne" collection="User")
      searchbox(variable="movieTwo" collection="User")

    .column.is-9
      section
        div.container
          router-view
</template>

<style lang="!postcss!sass?outputStyle=compressed">

@charset "utf-8";

@import "~bulma/bulma";

</style>
