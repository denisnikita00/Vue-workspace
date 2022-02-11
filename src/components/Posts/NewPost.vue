<template>
  <div>
    Post new article
    <div @keyup.enter="$emit('create-new-post', post)">
      <input
        type="text"
        placeholder="Enter a Title"
        v-model="post.newPostTitle"
      />
      <input
        type="text"
        placeholder="Enter a post description"
        v-model="post.newPostDesc"
      />
    </div>
    <button @click="$emit('create-new-post', post)">Add</button>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  components: "",
  props: {},
  data() {
    return {
      post: {
        newPostTitle: "",
        newPostDesc: "",
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
