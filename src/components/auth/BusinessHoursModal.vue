<template>
  <div class="time-picker-modal" v-if="selectedDayOption">
    <div class="absolute w-screen h-screen top-0 left-0 bg-secondary z-50">
      <div class="sm:flex justify-center items-center h-full">
        <div class="sm:w-128 sm:h-160">
          <div class="w-full">
            <div class="px-4 py-2" @click="$emit('closeModal')">
              <span><CloseIcon class="text-white text-opacity-54"/></span>
            </div>
            <div>
              <div
                class="flex justify-between items-center border-b border-white border-opacity-12 px-4 pb-4"
              >
                <div class="tg-body-mobile text-white text-opacity-84">
                  <h6>
                    We are
                    {{ !selectedDayOption.isClosed ? 'open' : 'closed' }} on
                    <span class="capitalize">{{
                      selectedDayOption.dayOfWeek
                    }}</span>
                  </h6>
                </div>
                <div>
                  <ToggleSwitch
                    v-model="isOpen"
                  />
                </div>
              </div>
            </div>
            <div v-if="!selectedDayOption.isClosed">
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
                    v-model="selectedDayOption.openingTime"
                  />
                  <TimePicker
                    key="close"
                    v-if="isActive === 'close'"
                    v-model="selectedDayOption.closingTime"
                  />
                </div>
              </div>
              <div class="px-4 my-4">
                <Button
                  @clicked="saveHours"
                  class="tg-color-label-mobile rounded-full"
                  :title="`Save ${selectedDayOption.dayOfWeek} Hours`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimePicker from '@/components/TimePicker.vue';
import Button from '@/components/Button.vue';
import CloseIcon from '@/assets/close.svg';
import ToggleSwitch from '@/components/inputs/BaseToggleSwitch';

export default {
  name: 'BusinessHoursModal',
  props: {
    selectedDay: {
      required: true
    }
  },
  data() {
    return {
      isActive: 'open'
    };
  },
  components: {
    TimePicker,
    Button,
    CloseIcon,
    ToggleSwitch
  },
  methods: {
    changeIsActive(key) {
      this.isActive = key;
    },
    async saveHours() {
      await this.$emit('update:selectedDay', {
        ...this.selectedDay,
        openingTime: this.selectedDayOption.openingTime,
        closingTime: this.selectedDayOption.closingTime
      });
      this.$emit('closeModal');
    }
  },
  computed: {
    selectedDayOption: {
      get() {
        return this.selectedDay ? { ...this.selectedDay } : null;
      }
    },
    isOpen: {
      get() {
        return this.selectedDay ? !this.selectedDay.isClosed : null;
      },
      set(value) {
        this.$emit('update:selectedDay', {
          ...this.selectedDay,
          isClosed: !value
        });
      }
    }
  }
};
</script>

<style scoped>
.border-b-3 {
  border-bottom-width: 3px;
  border-bottom-style: solid;
}
</style>
