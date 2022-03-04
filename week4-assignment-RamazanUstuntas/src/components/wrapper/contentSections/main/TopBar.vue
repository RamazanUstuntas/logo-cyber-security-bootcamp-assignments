<template>
   <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <!-- Sidebar Toggle (Topbar) -->
      <SidebarToggle></SidebarToggle>
      <!-- Topbar Search -->
      <TopbarSearch></TopbarSearch>

      <!-- Topbar Navbar -->
      <ul class="navbar-nav ml-auto">
         <!-- Nav Item - Search Dropdown (Visible Only XS) -->
         <SearchDropdown></SearchDropdown>

         <!-- Nav Item - Alerts -->
         <AlertsItem></AlertsItem>

         <!-- Nav Item - Messages -->
         <MessagesItem></MessagesItem>

         <div class="topbar-divider d-none d-sm-block"></div>

         <!-- Nav Item - User Information -->
         <UserInfo></UserInfo>
      </ul>
   </nav>
</template>
<script>
import SidebarToggle from './topBar/SidebarToggle.vue'
import TopbarSearch from './topBar/TopbarSearch.vue'
import SearchDropdown from './topBar/navBarItems/SearchDropdown.vue'
import AlertsItem from './topBar/navBarItems/AlertsItem.vue'
import MessagesItem from './topBar/navBarItems/MessagesItem.vue'
import UserInfo from './topBar/navBarItems/UserInfo.vue'

export default {
   name: 'TopBar',
   components: {
      SidebarToggle,
      TopbarSearch,
      SearchDropdown,
      AlertsItem,
      MessagesItem,
      UserInfo
   }
}
</script>