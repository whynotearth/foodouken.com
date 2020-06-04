<template>
  <div class="px-6">
    <div class="my-4">
      <h6 class="tg-body-mobile text-white text-opacity-54">
        Select your preferred notification method:
      </h6>
    </div>
    <div>
      <div
        class="my-8"
        v-for="(notificationType, key) in notificationTypes"
        :key="key"
      >
        <CheckBox
          v-model="selectedNotificationTypes"
          :value="notificationType.id"
        >
          <template #label>
            <div class="tg-body-mobile">
              <span class="mx-1 text-white text-opacity-84">{{
                notificationType.name
              }}</span>
              <span class="mx-1 text-white text-opacity-54"
                >({{ authDetail[notificationType.key] }})</span
              >
            </div>
          </template>
        </CheckBox>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/inputs/CheckBox';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Notifications',
  components: { CheckBox },
  data() {
    return {};
  },
  computed: {
    ...mapState('auth', ['notificationTypes']),
    ...mapGetters('auth', [
      'getSelectedNotificationTypes',
      'getEmail',
      'getPhone'
    ]),
    selectedNotificationTypes: {
      get() {
        return this.getSelectedNotificationTypes;
      },
      set(value) {
        this.updateSelectedNotificationTypes(value);
      }
    },
    authDetail() {
      return {
        email: this.getEmail,
        phone: this.getPhone
      };
    }
  },
  methods: {
    ...mapMutations('auth', ['updateSelectedNotificationTypes'])
  }
};
</script>
