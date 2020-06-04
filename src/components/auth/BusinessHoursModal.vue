<template>
  <div class="time-picker-modal" v-if="selectedDay">
    <div class="absolute w-screen h-screen top-0 left-0 bg-secondary z-50">
      <div>
        <div class="px-4 py-2" @click="$emit('closeModal')">
          <span><CloseIcon class="text-white text-opacity-54"/></span>
        </div>
        <div>
          <div
            class="flex justify-between items-center border-b border-white border-opacity-12 px-4 pb-4"
          >
            <div class="tg-body-mobile text-white text-opacity-84">
              <h6>
                We are {{ isOpen ? 'open' : 'closed' }} on
                {{ selectedDay.dayName }}
              </h6>
            </div>
            <div @click="isOpen = !isOpen">
              <div v-if="isOpen">Open</div>
              <div v-else>Close</div>
            </div>
          </div>
        </div>
        <div v-if="isOpen">
          <div>
            <div class="grid grid-cols-2 shadow-lg text-white">
              <div
                class="col-span-1 text-center py-4 text-white"
                :class="
                  isActive === 'open'
                    ? 'border-b-3 border-button text-opacity-84'
                    : ' text-opacity-54'
                "
                @click="changeIsActive('open')"
              >
                Open
              </div>
              <div
                class="col-span-1 text-center py-4 text-white"
                :class="
                  isActive === 'close'
                    ? 'border-b-3 border-button text-opacity-84'
                    : ' text-opacity-54'
                "
                @click="changeIsActive('close')"
              >
                Close
              </div>
            </div>
            <div class="px-12 py-20">
              <TimePicker
                key="open"
                v-if="isActive === 'open'"
                v-model="openingTime"
              />
              <TimePicker
                key="close"
                v-if="isActive === 'close'"
                v-model="closingTime"
              />
            </div>
          </div>
          <div class="px-4 my-4">
            <Button
              @clicked="saveHours"
              class="tg-color-label-mobile rounded-full"
              :title="`Save ${selectedDay.dayName} Hours`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessHoursModal',
  props: {
    selectedDay: {
      required: true
    }
  },
  data() {
    return {
      isOpen: true,
      openingTime: null,
      closingTime: null,
      isActive: 'open'
    };
  },
  components: {
    TimePicker: () => import('../TimePicker'),
    Button: () => import('../Button'),
    CloseIcon: () => import('@/assets/close.svg')
  },
  methods: {
    changeIsActive(key) {
      this.isActive = key;
    },
    async saveHours() {
      await this.$emit('update:selectedDay', {
        ...this.selectedDay,
        openingTime: this.openingTime,
        closingTime: this.closingTime
      });
      this.$emit('closeModal');
    }
  },
  watch: {
    selectedDay: {
      immediate: true,
      handler(val) {
        if (val) {
          this.isOpen = !val.isClosed;
          if (this.isOpen) {
            this.openingTime = val.openingTime;
            this.closingTime = val.closingTime;
          }
        }
      }
    },
    isOpen(value) {
      this.$emit('update:selectedDay', {
        ...this.selectedDay,
        isClosed: !value
      });
    }
  }
};
</script>

<style scoped>
.border-b-3 {
  border-bottom-width: 3px;
  border-bottom-style: solid;
}</style
>>
