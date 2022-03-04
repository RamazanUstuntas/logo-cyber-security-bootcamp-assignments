<template>
   <!-- Main Content -->
   <div id="content">
      <!-- Topbar -->
      <TopBar></TopBar>
      <!-- End of Topbar -->

      <!-- Begin Page Content -->
      <div class="container-fluid">
         <PageContent></PageContent>
      </div>
      <!-- /.container-fluid -->
   </div>
   <!-- End of Main Content -->
</template>

<script>
import TopBar from './main/TopBar'
import PageContent from './main/PageContent'

export default {
   name: 'ContentMain',
   components: {
      TopBar,
      PageContent
   }
}
</script>