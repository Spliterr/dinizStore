<template>
  <v-app>
    <v-navigation-drawer
      v-model="sidebar"
      app
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar" />
      </span>
      <v-toolbar-title>
        <router-link
          v-slot="{ navigate }"
          to="/"
          custom
        >
          <span
            style="cursor: pointer"
            role="link"
            @click="navigate"
            @keypress.enter="navigate"
          >{{ appTitle }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        v-model="search"
        solo
        placeholder="Buscar"
        prepend-inner-icon="mdi-magnify"
        filled
        dense
        class="expanding-search mt-6 mr-2"
        :class="{ 'closed' : searchClosed && !search }"
        clearable
        color="black"
        @focus="searchClosed = false"
        @blur="searchClosed = true"
      />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          text
          :to="item.path"
        >
          <v-icon
            left
            dark
          >
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appTitle: 'Diniz Store',
      sidebar: false,
      search: null,
      searchClosed: true,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Sign Up', path: '/signup', icon: 'mdi-face-man' },
        { title: 'Sign In', path: '/signin', icon: 'mdi-lock-open-outline' },
      ],
    };
  },
};
</script>

<style lang="sass">
.v-input.expanding-search
  transition: max-width 0.6s
  .v-input__slot
    box-shadow: none !important
    cursor: pointer !important
    &:before, &:after
      border-color: transparent !important
  &.closed
    max-width: 45px
    .v-input__slot
      background: transparent !important
</style>
