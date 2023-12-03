<template>
  <div class="main-body">
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.main-body {
    top:0;
    bottom:0;
    right:0;
    left:0;
    position: absolute;
}
body, html { 
    background-color: '#1E313B !important';
}
</style>