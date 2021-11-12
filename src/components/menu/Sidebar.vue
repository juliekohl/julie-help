<template>
  <div class="sidebar">
    <div
        class="sidebar-backdrop"
        @click="closeSidebarPanel"
        v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div
          v-if="isPanelOpen"
          class="sidebar-panel"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: 'Sidebar',
  data: () => ({
    isPanelOpen: true
  }),
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false
    }
  },
})
</script>

<style>
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-muted);
  cursor: pointer;
}

.sidebar-panel {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 280px;
  height: 100vh;
  padding: 12rem 20px 2rem 8px;
  overflow-y: auto;
  background-color: var(--color-muted);
}
</style>