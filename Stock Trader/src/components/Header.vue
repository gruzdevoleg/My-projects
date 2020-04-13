<template>
    
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-default">
    <div class="container">
   <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" text="End Day"></b-nav-item>
        <b-nav-item-dropdown text="Save & Load">
          <b-dropdown-item href="#">Save Data</b-dropdown-item>
          <b-dropdown-item href="#">Load Data</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>

</template>