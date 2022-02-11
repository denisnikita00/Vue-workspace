<template>
  <div>
    <new-post @create-new-post="createNewPost"></new-post>
    <div v-for="post in postsToShow" :key="post.postId">
      <post-item :post-details="post" @post-update="updateAPost"></post-item>
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";
import NewPost from "./NewPost";
export default {
  name: "PostList",
  components: { NewPost, PostItem },
  data() {
    return {
      posts: [],
      filterBy: "all",
    };
  },
  mounted() {
    this.getFromLocalStorage();
  },
  methods: {
    createNewPost(post) {
      // adds a new post to the array
      let newPost = {
        postTitle: post.newPostTitle,
        postDescription: post.newPostDesc,
        postStatus: "todo",
        postId: this.newPostId,
      };
      if (newPost.postTitle.length > 0) {
        this.posts.push(newPost);
        this.saveToLocalStorage();
      }
    },
    updateAPost(updatedPost) {
      this.posts.forEach((post) => {
        if (post.postId === updatedPost.itemId) {
          post.postTitle = updatedPost.itemTitle;
          post.postDescription = updatedPost.itemDesc;
          post.postStatus = updatedPost.itemStatus;
        }
      });
      this.saveToLocalStorage();
    },
    getFromLocalStorage() {
      if (localStorage.posts)
        this.posts = JSON.parse(localStorage.getItem("posts"));
    },
    saveToLocalStorage() {
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
  },
  computed: {
    newPostId() {
      return (
        this.posts.reduce((max, curr) => Math.max(max, curr.postId), 0) + 1
      );
    },
    postsToShow() {
      return this.filterBy === "all"
        ? this.posts.filter((post) => post.postStatus !== "deleted")
        : this.posts.filter((post) => post.postStatus === this.filterBy);
    },
  },
};
</script>

<style scoped></style>
