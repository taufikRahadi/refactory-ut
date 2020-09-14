<template>
  <div>
    <base-alert 
      :title="alertTitle"
      :showAlert="showAlert"
    />
    <div :class="`grid grid-cols-1 md:grid-cols-${gridCols} gap-${gridGap}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gridGap: {
      type: Number,
      default: 2
    },
    gridCols: {
      type: Number,
      default: 3
    },
    alertTitle: {
      type: String,
    },
    showAlert: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    
  }
}
</script>
