<template>
  <div class="activeConfig">
    <div class="activeConfig-container">
      <Editor id="tinymce" v-model="tinymceHtml" :init="editorInit" />
    </div>
    <div v-html="tinymceHtml"></div>
  </div>
</template>

<script>
// 引入组件
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
// 引入富文本编辑器主题的js和css
import "tinymce/themes/silver/theme.min.js";
import "tinymce/skins/ui/oxide/skin.min.css";
// 扩展插件
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
// 引入api

export default {
  name: "ActiveConfig",
  components: { Editor },
  data() {
    return {
      // tinymce的绑定值
      tinymceHtml: "",
      // tinymce的初始化配置
      editorInit: {
        selector: "#tinymce",
        language_url: "./tinymce/langs/zh_CN.js",
        language: "zh_CN",
        height: 300,
        plugins: "link lists image code table wordcount",
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
        // 此处为图片上传处理函数
        images_upload_handler: (blobInfo, success, failure) => {
          this.handleImgUpload(blobInfo, success, failure);
        },
        statusbar: true, // 底部的状态栏
        menubar: true, // 最上方的菜单
        branding: false // 水印“Powered by TinyMCE”
      }
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
    // 图片上传
    /* eslint-disable */
    handleImgUpload(blobInfo, success, failure) {
      let formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3002/api/upload/image", true);
      xhr.send(formData);
      xhr.onload = () => {
        const contentType = xhr.getResponseHeader("Content-Type");
        let responseText = xhr.responseText;
        if (contentType.includes("application/json")) {
          responseText = JSON.parse(responseText);
        }
        if (xhr.status == 200) {
          success(responseText.imgURL);
        }
      };
    },
    /* eslint-disable */
  },
};
</script>

<style lang="scss" scoped>
.activeConfig {
  &-container {
    margin: 30px;
  }
}
</style>
