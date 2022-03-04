<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="col-md-12 mb-3">
      <button
        type="button"
        class="btn btn-primary ml-3"
        v-if="!isTodoEnabled"
        v-on:click="showTodosData()"
      >
        Get Todo Datas
      </button>
    </div>
    <div class="row">
      <!-- Get ToDo Data -->
      <div class="offset-1 col-12 col-md-5 border border-success" v-if="isTodoEnabled">
        <div class="alert alert-secondary mt-2" role="alert" v-if="todosData.length > 0">
          Completed
        </div>
        <div class="row" v-for="todo in todosData" :key="todo.id" v-on:click="showAlert(todo.id)">
          <div v-if="todo.completed">
            <div class="col-md-12">
              <div class="alert alert-success" role="alert">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offset-1 col-12 col-md-5 border border-danger" v-if="isTodoEnabled">
        <div
          class="alert alert-warning mt-2"
          role="alert"
          v-if="todosData.length > 0"
        >
          Not Completed
        </div>
        <div class="row" v-for="todo in todosData" :key="todo.id" v-on:click="showAlert(todo.id)">
          <div v-if="!todo.completed">
            <div class="col-md-12">
              <div class="alert alert-danger" role="alert">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  data: function () {
    return {
      todosData: [],
      isTodoEnabled: false,
    };
  },
  methods: {
    showTodosData() {
      this.isTodoEnabled = true;
      // if we don't have the data, fetch it
      if(this.todosData.length == 0) {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((responseJSON) => (this.todosData = responseJSON));
      }
    },
    showAlert(id){
         var item = this.todosData.find(item=>item.id == id);
         item.completed= !item.completed;
         var filtered = this.todosData.filter(item=>item.id != id);
         // to put item in the first place whose status has changed. 
         if(!item.completed){
           this.todosData = filtered
           this.todosData.unshift(item);
         }else{
           this.todosData = filtered
           this.todosData.unshift(item);
         }
    },
  },
  /* local storage */
  mounted() {
    this.todosData = JSON.parse(localStorage.getItem("todosData")) || []
  },
  watch: {
    todosData(newValue) {
      localStorage.setItem("todosData", JSON.stringify(newValue));
    }
  }
};
</script>
<style>
.mycontent-left {
  border-right: 1px dashed #333;
}
</style>