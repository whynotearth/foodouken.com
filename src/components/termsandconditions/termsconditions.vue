<template>
  <div  class="modal-mask" v-show="accept">
          <div class="modal-wrapper">

            <div class="modal-container">
                
              <div class="modal-footer">
              
                <slot name="footer">
                   Gotta agree to the 

                  <a
          class="underline"
          target="_blank"
          href="https://docs.google.com/document/d/1a_SPIo3jVrYRLzOXgdqxDVZhw0MmfTfvWjzrLipPvkQ/edit"
          rel="noopener"
        >
          terms and conditions
        </a>

                  <button class="modal-default-button" @click="toggleaccept">
                    Agree
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
</template>

<style>
.modal-mask {
  position: relative;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #437784;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: Roboto, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  color: #0E9EC2;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>

<script>

export default {
  name: 'termsandconditions',
  model: {
    prop: 'selectedVisability',
    event: 'updateselectedVisability'
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    selectedVisability: {
      type: [String, Date, Number, Object]
    },
    options: {
      type: Array,
      default: () => {
        return ['Option 1', 'Option 2', 'Option 2'];
      }
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    background: {
      type: String,
      default: 'bg-secondary'
    },
    tight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accept: true
          };
  },
  methods: {
    hideaccept() {
      this.accept = false;
    },
    showaccept() {
      this.accept = true;
    },
    toggleaccept() {
      if (this.accept) {
        this.hideaccept();
      } else {
        this.showaccept();
      }
    },
    updateValue(option) {
      this.$emit('updateselectedVisability', option);
      this.hideaccept();
    }
  }
};
</script>