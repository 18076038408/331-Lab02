<template>
    <div class="networkError">
      <h1>Uh-Oh!</h1>
      <h3>
        It looks like you're experiencing some network issues, please take a breath and
        <a href="#" @click="$router.go(-1)">click here</a> to try again.
      </h3>
    </div>
  </template>
  
  <style scoped>
  .networkError {
    /* 可添加简单样式，如居中、颜色等 */
    text-align: center;
    margin-top: 50px;
    color: #e74c3c;
  }
  .networkError a {
    color: #3498db;
    text-decoration: underline;
  }
  </style>