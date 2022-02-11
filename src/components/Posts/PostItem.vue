<template>
  <div>
    <div>
      <div>
        <div>
          <input
            :disabled="!editTitle"
            type="text"
            v-model="post.itemTitle"
            @blur.stop="editTitle = false"
          />
        </div>
        <button @click="editTitle = !editTitle">
          {{ editTitleButton }}
        </button>
      </div>
    </div>
    <div>
      <textarea
        :disabled="!editDescription"
        v-model="post.itemDesc"
        @blur.stop="editDescription = false"
      ></textarea>
    </div>
    <button @click="editDescription = !editDescription">
      {{ editDescriptionButton }}
    </button>
    <button @click="setStatusButton">{{ statusButton }}</button>
    <button @click="moveToDeleted">Delete</button>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    postDetails: {
      postTitle: String,
      postDescription: String,
      postStatus: String,
      postId: Number,
    },
  },
  data() {
    return {
      showDescription: false,
      editDescription: false,
      editTitle: false,
      post: {
        itemTitle: this.postDetails.postTitle,
        itemDesc: this.postDetails.postDescription,
        itemStatus: this.postDetails.postStatus,
        itemId: this.postDetails.postId,
      },
    };
  },
  methods: {
    setStatusButton() {
      this.post.itemStatus = this.post.itemStatus === "todo" ? "done" : "todo";
    },
    moveToDeleted() {
      this.post.itemStatus = "deleted";
    },
  },
  updated() {
    this.$emit("post-update", this.post);
  },
  computed: {
    editTitleButton() {
      return this.editTitle ? "save" : "edit post title";
    },
    editDescriptionButton() {
      return this.editDescription ? "save" : "edit description";
    },
    statusButton() {
      return this.post.itemStatus === "todo" ? "Done" : "Post";
    },
  },
};
</script>

<style scoped></style>
