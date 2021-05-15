<template>
  <div style="text-align: left;">
    <!-- Two-way Data-Binding -->


    <!-- Or manually control the data synchronization -->
    <codemirror

        ref="cmEditor"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
    />


  </div>
</template>

<script>
// import language js
import 'codemirror/mode/python/python'

// import theme style
import 'codemirror/theme/ambiance.css'


// import more 'codemirror/some-resource...'

export default {
  data() {
    return {
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'python',
        theme: 'ambiance',
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      }
    }
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
  },
  mounted() {
    console.log('the current CodeMirror instance object:', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>

<style>

.CodeMirror{
  height: auto !important;
}

.vue-codemirror{
  height: auto !important;
}

</style>