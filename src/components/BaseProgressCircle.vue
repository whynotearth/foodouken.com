<template>
  <div class="w-full h-full">
    <svg class="w-full h-full text-divider">
      <!-- background circle -->
      <circle
        :stroke-width="strokeWidth"
        class="text-inactive stroke-current"
        :cx="centerX"
        :cy="centerY"
        :r="radius"
        fill="transparent"
      />
      <!-- progress circle -->
      <circle
        :stroke-width="strokeWidth"
        :class="progressClasses"
        class="text-button stroke-current"
        :cx="centerX"
        :cy="centerY"
        :r="radius"
        fill="transparent"
        :stroke-dasharray="strokeDashArray"
      />
      <slot />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BaseProgressCircle',
  props: {
    centerX: Number,
    centerY: Number,
    radius: Number,
    strokeWidth: {
      default: 4
    },
    percentageProgress: Number,
    progressClasses: {
      type: String,
      default: 'text-secondary'
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    progressCircumference() {
      return this.circumference * this.percentageProgress;
    },
    strokeDashArray() {
      return `${this.progressCircumference} ${this.circumference}`;
    }
  }
};
</script>

<style scoped>
svg {
  transform: rotate(-90deg);
  stroke-width: 0.25rem;
  stroke-linecap: round;
}

svg .progress-circle--content {
  transform: rotate(90deg) translate(0, -100%);
}

circle {
  transition: stroke-dasharray 500ms ease-in-out;
}
</style>
