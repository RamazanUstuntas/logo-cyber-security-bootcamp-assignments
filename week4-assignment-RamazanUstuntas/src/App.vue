<!-- general vue structure -->
<!-- The component in the image above is known as the Single File component. 
A single file component consists of 3 sections first is the “Template” section 
which contains the HTML that will be rendered when our component gets mounted. 
 -->
<template>
  <PageWrapper></PageWrapper>
  <ScrollToTop></ScrollToTop>
  <LogoutModal></LogoutModal>
</template>

<!-- Second, is the “script” section that JavaScript codes such as the variables and the events,  -->
<script>
import PageWrapper from './components/PageWrapper'
import ScrollToTop from './components/ScrollToTop'
import LogoutModal from './components/LogoutModal'

/* here, the component is exported and the components used in it are defined. */
export default {
  name: 'App',
  components: {
    PageWrapper,
    ScrollToTop,
    LogoutModal
  }
}
</script>

<!-- and the third section “style” has the styles for the component. -->
<style></style>

<!-- So we can have our components' HTML, CSS, and JavaScript code live in a single file with a .vue file extension. -->
