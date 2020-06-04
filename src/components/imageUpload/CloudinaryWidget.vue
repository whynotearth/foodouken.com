<template>
  <div id="upload_widget">
    <slot />
  </div>
</template>

<script>
const scriptUrl = 'https://widget.cloudinary.com/v2.0/global/all.js';
const scriptId = 'cloudinary-widget-script';
export default {
  name: 'CloudinaryWidget',
  props: {
    uploaderOptions: {
      default: () => {}
    }
  },
  mounted() {
    this.loadWidgetScript();
  },
  methods: {
    loadWidgetScript() {
      const isScriptExist = document.getElementById(scriptId);
      if (isScriptExist) {
        this.init();
        return;
      }
      let theScript = document.createElement('script');
      theScript.setAttribute('src', scriptUrl);
      theScript.async = true;
      theScript.id = scriptId;
      theScript.onload = () => {
        this.init();
      };
      document.head.appendChild(theScript);
    },
    init() {
      // unsigned upload doccument https://cloudinary.com/documentation/upload_widget#unsigned_uploads
      // available options https://cloudinary.com/documentation/upload_widget#upload_widget_options
      var myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: 'whynotearth',
          uploadPreset: 'foodouken_tenant_CMS',
          theme: 'minimal',
          ...this.uploaderOptions
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            this.$emit('uploaded', result);
          }
          if (error) {
            this.$emit('error', error);
          }
        }
      );

      document.getElementById('upload_widget').addEventListener(
        'click',
        () => {
          this.$emit('opened');
          myWidget.open();
        },
        false
      );
    }
  }
};
</script>
