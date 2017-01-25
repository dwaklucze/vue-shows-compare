<template lang="jade">
main.container
  .columns.section
    aside.column.is-3
      searchbox(variable="movieOne" collection="User")
      searchbox(variable="movieTwo" collection="User")

    section.is-9
          searchbox-result
</template>

<style lang="!postcss!sass?outputStyle=compressed">

@charset "utf-8";

@import "~bulma/bulma";

</style>
