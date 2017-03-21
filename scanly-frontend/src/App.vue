<template>
<!-- App -->
<div id="app">

  <!-- Statusbar -->
  <!-- <div class="view"> -->
  <f7-views>
    <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
      <!-- Navbar -->
      <f7-navbar>
        <f7-nav-center sliding>Scanly</f7-nav-center>
      </f7-navbar>
      <!-- Pages -->
      <f7-pages>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input name="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>

          <f7-list>
            <f7-list-button link="/about/" title="Sign In" close-login-screen></f7-list-button>
            <f7-list-label>

              <p>Click Sign In to close Login Screen</p>
            </f7-list-label>
          </f7-list>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</div>
<!-- </div> -->
</template>

<script>
export default {}
</script>
<style media="screen">
.page-content {
  background-color: #F2F2F2;
}

.navbar-inner {
  background-color: #610A0D;
}

.center {
  color: white;
  font-family: monospace;
}
.icon {
    color: white
}


/*610A0D*/
</style>
