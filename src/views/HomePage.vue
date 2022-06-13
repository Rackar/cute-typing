<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Typing Soup</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        {{ wordStart }}
        {{ wordMiddle }}
        {{ wordEnd }}
        <button @click="startGetWord">start Get Word</button>
        <input :value="info.input" class="input" @input="onInputChange"
          placeholder="Tap on the virtual keyboard to start">
        <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" @keyboardMounted="keyboardMounted"
          :input="info.input" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import SimpleKeyboard from "./KeyBoard.vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, reactive, computed } from 'vue';
// var randomWords = require('random-words');
import { randomWords } from '../libs/randomWord';
interface Iwordlist {
  word: string;
  key: string;
}

let wordsList: Iwordlist[] = reactive([])
let info = reactive({
  input: "",
  aimKeys: ['q', 'a', 'z', 'e', 'i', 'o']
})
let wordStart = computed(() => {
  let el = wordsList[0]
  if (el) {
    let word = el.word
    let key = el.key

    return word.split(key)[0]
  } else {
    return ''
  }
})

let wordMiddle = computed(() => {
  let el = wordsList[0]
  if (el) {
    return el.key
  } else {
    return ''
  }
})

let wordEnd = computed(() => {
  let el = wordsList[0]
  if (el) {
    let word = el.word
    let key = el.key

    return word.split(key)[1]
  } else {
    return ''
  }
})

function startGetWord() {
  setInterval(() => {
    let arr = randomWords(5)

    for (const word of arr) {
      let res = checkWordsHasAimkey(word, info.aimKeys)
      if (res) {
        wordsList.push(res)
      }
    }
  }, 1000);
}
function checkWordsHasAimkey(word: string, aimkey: string[]): Iwordlist | null {
  {
    for (const keychar of aimkey) {
      if (word.indexOf(keychar) !== -1) {
        return { word, key: keychar }
      }
    }
    return null
  }
}

let keyboard: any = null
function keyboardMounted(_keyboard: any) {
  keyboard = _keyboard

}

function onChange(_input: string) {
  console.log("Input changed", _input);
  info.input = _input;
}
function onKeyPress(button: string) {
  console.log("button", button);
  let cur = wordsList[0]
  if (cur && cur.key === button) {
    keyboard.removeButtonTheme(button, "next-button");
    wordsList.shift()
    let next = wordsList[0]
    if (next)
      keyboard.addButtonTheme(next.key, "next-button");
  }
}
function onInputChange(_input: any) {
  console.log("Input changed", _input);
  info.input = _input.target.value;
}
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    SimpleKeyboard,

  }, setup() {
    return {
      wordsList,
      startGetWord,
      info, onChange, onKeyPress, onInputChange,
      wordStart, wordMiddle, wordEnd,
      keyboardMounted
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
<style>
input {
  width: 100%;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
}

.simple-keyboard {
  max-width: 850px;
}

.next-button {
  border: 2px solid #ff0000;
}
</style>