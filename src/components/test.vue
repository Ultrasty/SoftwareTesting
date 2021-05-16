<template>
  <div ref="container" class="monaco-editor" style="text-align: left"></div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  name: 'AcMonaco',
  props: {
    opts: {
      type: Object,
      default() {
        return {}
      }
    },
    height: {

    }
  },
  data() {
    return {
      // 主要配置
      defaultOpts: {
        value: '', // 编辑器的值
        theme: 'vs', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
        roundedSelection: false, // 右侧不显示编辑器预览框
        autoIndent: true, // 自动缩进
        language: "python"
      }
    }
  },
  watch: {
    opts: {
      handler(n) {
        this.init()
      },
      deep: true
    }
  },
  mounted() {
    this.init()
    let that = this;
    setInterval(function (){console.log(that.getVal())},2000)
  },
  methods: {
    init() {
      // 初始化container的内容，销毁之前生成的编辑器
      this.$refs.container.innerHTML = ''

      this.editorOptions = Object.assign(this.defaultOpts, this.opts)
      // 生成编辑器对象
      this.monacoEditor = monaco.editor.create(this.$refs.container, this.editorOptions)
      // 编辑器内容发生改变时触发
      this.monacoEditor.onDidChangeModelContent(() => {
        this.$emit('change', this.monacoEditor.getValue())
      })
    },
    // 供父组件调用手动获取值
    getVal() {
      return this.monacoEditor.getValue()
    }
  }
}
</script>
<style>

body{
  height: 100vh;
}

#app{
  height: 100%;
}

.monaco-editor{
  height: 100%;
}

.rename-box{
  display: none;
}
</style>
