<template>
  <div class="button-card--container">
    <div class="button-card--image">
      <slot name="image" />
    </div>
    <div class="button-card--title">
      <slot name="title" />
    </div>
  </div>
</template>

<style scoped>
.button-card--container {
  width: fit-content;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 1px solid #eaeaea;
  border-radius: 0.5rem;

  padding: 1rem;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.button-card--container:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.button-card--image {
  width: 4rem;
  height: 4rem;
}

.button-card--title {
  font-size: 2rem;
}
</style>