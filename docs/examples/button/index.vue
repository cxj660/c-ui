<template>
  <c-button>default</c-button>
  <c-button type="primary">primary</c-button>
  <c-button type="success">success</c-button>
  <c-button type="info">info</c-button>
  <c-button type="warning">warning</c-button>
  <c-button type="danger">danger</c-button>
  <div>
    <c-button :disabled="true" plain>default</c-button>
    <c-button type="primary" disabled plain>primary</c-button>
    <c-button type="success" disabled plain>success</c-button>
    <c-button type="info" disabled plain>info</c-button>
    <c-button type="warning" disabled plain>warning</c-button>
    <c-button type="danger" disabled plain>danger</c-button>
  </div>
</template>
<script setup lang="ts">
import CButton from '../../../packages/button/index'
</script>

