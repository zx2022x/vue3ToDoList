<template>
  
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li  v-for="item in list" :key="item.id" :class="{completed:item.done,}" >
          <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)"/>
          <label>{{item.name}}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
         
         
         
        </li>
      </ul>
    </section>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia"
import userStore from "../store"
import  {ITodoItem}  from "../types/data.d"
const {main}=userStore()
const {getTodos,delTodo,updateTodo}=main
//派发action

getTodos()
//把Refs的数据转换成双向数据绑定
const {list}=storeToRefs(main)
//change后执行回调
const handleChange=(item:ITodoItem)=>{

      updateTodo(item.id,'done',!item.done)


}

// console.log(main)


</script>

<style>

</style>