<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="btn-toolbar mb-3 mt-3 ml-3" role="toolbar" aria-label="Toolbar with button groups">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text" id="btnGroupAddon">Mode</div>
            </div>
            <select class="form-control custom-select" v-model="cmOptions.mode">
              <option value="text/javascript" data-compile="nodejs-head" selected>javascript</option>
              <option value="htmlmixed">HTML</option>
              <option value="css">css</option>
              <option value="go">Go</option>
              <option value="text/x-java">Java</option>
              <option value="text/x-c++src">C++</option>
              <option value="text/x-csrc">C</option>
            </select>
            <div class="input-group-prepend ml-2">
              <div class="input-group-text" id="btnGroupAddon">Theme</div>
            </div>
            <select class="form-control custom-select" v-model="cmOptions.theme">
              <option value="base16-dark">base16-dark</option>
              <option value="base16-light">base16-light</option>
              <option value="cobalt">cobalt</option>
              <option value="colorforth">colorforth</option>
              <option value="darcula">darcula</option>
              <option value="duotone-dark">duotone-dark</option>
              <option value="duotone-light">duotone-light</option>
              <option value="eclipse">eclipse</option>
              <option value="elegant">elegant</option>
              <option value="gruvbox-dark">gruvbox-dark</option>
              <option value="hopscotch">hopscotch</option>
              <option value="icecoder">icecoder</option>
              <option value="idea">idea</option>
              <option value="lucario">lucario</option>
              <option value="material">material</option>
              <option value="material-darker">material-darker</option>
              <option value="material-palenight">material-palenight</option>
              <option value="material-ocean">material-ocean</option>
              <option value="monokai">monokai</option>
            </select>
            <div class="input-group-prepend ml-2">
               <div class="input-group-text" id="btnGroupAddon">Font Size</div>
              <input type="range" class="custom-range" min="8" max="30" id="customRange2" value="10" v-on:change="changeFontSize">
            </div>
           
          </div>
          <div class="btn-group ml-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary" @click.prevent.stop="compile">Compile</button>
            <button type="button" class="btn btn-secondary">Stop</button>
            <button type="button" class="btn btn-secondary" @click.prevent.stop="addPost">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="codeEditor">
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
// codemirror css
import 'codemirror/mode/css/css.js'
// language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/go/go.js'
import 'codemirror/mode/clike/clike.js'

// theme css
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/colorforth.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/theme/duotone-dark.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/theme/gruvbox-dark.css'
import 'codemirror/theme/hopscotch.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/lucario.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/theme/material-ocean.css'
import 'codemirror/theme/monokai.css'
// more codemirror resources
// import 'codemirror/some-resource...'
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'

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
  created() {
    // list 에서 선택하여 해당 화면으로 접근 시에는 전달된 값으로 component 세팅
    if(this.$route.params.text != null) {
      this.code = this.$route.params.text
    }
    if(this.$route.params.mode != null) {
      this.cmOptions.mode = this.$route.params.mode
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.cmOptions.mode)
    // you can use this.codemirror to do something...
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
    },
    changeFontSize(){
      let size = document.getElementById('customRange2').value;
      document.getElementById('codeEditor').setAttribute('style', 'font-size:'+size+'px');
    },
    addPost(){
      let post = {}
      //TODO post 변수에 유저 정보와 등록 일자 등이 추가 필요
      post.text = this.code
      post.mode = this.cmOptions.mode
      let uri = 'http://localhost:4000/posts/add'
      this.axios.post(uri, post).then(() => {
        alert('Success')
      })
    },
    compile(){
      let post = {}
      post.text = this.code
      post.mode = this.cmOptions.mode
      let url = 'http://localhost:4000/posts/code'
      this.axios.post(url, post).then(() => {
        alert('Success!!! check console')
        //다음 창
      })
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  components: {
    codemirror
  }
}
</script>
<style scoped>

</style>