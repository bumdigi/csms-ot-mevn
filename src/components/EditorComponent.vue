<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="btn-toolbar mb-3 mt-3" role="toolbar" aria-label="Toolbar with button groups">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text" id="btnGroupAddon">Mode</div>
            </div>
            <select class="form-control custom-select" v-model="cmOptions.mode">
              <option value="text/javascript" selected>javascript</option>
              <option value="htmlmixed">HTML</option>
              <option value="css">css</option>
            </select>
            <div class="input-group-prepend ml-2">
              <div class="input-group-text" id="btnGroupAddon">Theme</div>
            </div>
            <select class="form-control custom-select">
              <option value="" selected>theme1</option>
              <option value="">theme2</option>
              <option value="">theme3</option>
            </select>
          </div>
          <div class="btn-group ml-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">Compile</button>
            <button type="button" class="btn btn-secondary">Stop</button>
          </div>
        </div>
      </div>
    </div>
    <div>
    <codemirror ref="myCm" class="code-editor"
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
import 'codemirror/mode/css/css.js'
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
