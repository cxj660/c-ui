<template>
  <c-button>default</c-button>
  <c-button type="primary">primary</c-button>
  <c-button type="success">success</c-button>
  <c-button type="info">info</c-button>
  <c-button type="warning">warning</c-button>
  <c-button type="danger">danger</c-button>
  <div>
    <c-button plain>default</c-button>
    <c-button type="primary" plain>primary</c-button>
    <c-button type="success" plain>success</c-button>
    <c-button type="info" plain>info</c-button>
    <c-button type="warning" plain>warning</c-button>
    <c-button type="danger" plain>danger</c-button>

  </div>
  <div>
    <c-button round>default</c-button>
    <c-button type="primary" round>primary</c-button>
    <c-button type="success" round>success</c-button>
    <c-button type="info" round>info</c-button>
    <c-button type="warning" round>warning</c-button>
    <c-button type="danger" round>danger</c-button>
  </div>
  <div>
    <c-button circle>
      <img src="../images/search.png" alt="">
    </c-button>
    <c-button type="primary" circle>
      <img src="../images/shop.png" alt="">
    </c-button>
    <c-button type="success" circle>
      <img src="../images/download.png" alt="">
    </c-button>
    <c-button type="info" circle>
      <img src="../images/edit.png" alt="">
    </c-button>
    <c-button type="warning" circle>
      <img src="../images/refresh.png" alt="">
    </c-button>
    <c-button type="danger" circle>
      <img src="../images/delete.png" alt="">
    </c-button>
  </div>
</template>
<script setup lang="ts">
import CButton from '../../../packages/button/index'
</script>

