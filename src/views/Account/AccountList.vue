<template>
  <!-- <Suspense> -->
  <div>
    <h2>账号列表</h2>
    <hr>
    {{ list }}
  </div>
  <!-- </Suspense> -->
  <br>
  <br>
  
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="grade" @input="setSound"/>
    {{grade}}
  </div>

</template>


<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { getAccountList } from '../../api/account';

  let list = reactive([])
  const ret = await getAccountList({ currentPage: 1, pageSize: 6 })
  console.log(ret)
  list = ret.data;

  // 滑块
  const grade = ref(0)
  const formatTooltip = (val: number) => {
    return val / 100
  }

  const setSound = val=>grade.value=val

</script>