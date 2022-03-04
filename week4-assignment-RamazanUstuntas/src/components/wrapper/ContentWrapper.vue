<template>
   <!-- Content Wrapper -->
   <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <ContentMain></ContentMain>
      <!-- End of Main Content -->

      <!-- Footer -->
      <ContentFooter></ContentFooter>
      <!-- End of Footer -->
   </div>
   <!-- End of Content Wrapper -->
</template>
<script>
import ContentMain from './contentSections/ContentMain'
import ContentFooter from './contentSections/ContentFooter'

export default {
   name: 'ContentWrapper',
   components: {
      ContentMain,
      ContentFooter
   }
}
</script>