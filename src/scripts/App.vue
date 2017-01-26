<template lang="jade">
.container
  .section
    .columns
      .column.is-3
        searchbox(variable="movieOne" collection="User")
        searchbox(variable="movieTwo" collection="User")

      .column.is-9
            searchbox-result
</template>

<style lang="!postcss!sass?outputStyle=compressed">

@charset "utf-8";

@import "~bulma/bulma";

</style>
