<template>
   <!-- <Suspense> -->
     <div>
         <h2>账号列表</h2>
         <hr>
         {{ list }}
     </div>
   <!-- </Suspense> -->
</template>


<script setup lang="ts">
     import {reactive} from 'vue';
     import {getAccountList} from '../../api/account';

     let list = reactive([])
     const ret = await getAccountList({currentPage:1,pageSize:6})
     console.log(ret)
     list = ret.data;

</script>