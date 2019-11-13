/*jslint devel: true */
<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-4">
        <select class="custom-select" v-model="cmOptions.mode">
          <option value="text/javascript" selected>javascript</option>
          <option value="htmlmixed">HTML</option>
          <option value="css">css</option>
        </select>
        </div>
      </div>
    </div>
    <div>
      <codemirror ref="myCm"
                  :value="code" 
                  :options="cmOptions"
                  @ready="onCmReady"
                  @focus="onCmFocus"
                  @input="onCmCodeChange">
      </codemirror>
    </div>
  </div>
</template>

<script>
// language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
// theme css
import 'codemirror/theme/base16-dark.css'
// more codemirror resources
// import 'codemirror/some-resource...'
import { codemirror } from 'vue-codemirror'
 
// require styles
import 'codemirror/lib/codemirror.css'
 
// require more codemirror resource...

export default {
  data () {
    return {
      code: 'const a = 10',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      }
    }
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
      this.cmOptions.mode = 'htmlmixed'
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.cmOptions.mode)
    // you can use this.codemirror to do something...
  },
  components: {
    codemirror
  }
}
</script>
