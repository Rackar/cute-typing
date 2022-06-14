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
        <div class="word-panel m10" v-if="wordMiddle">
          <span class="wordStart"> {{ wordStart }}</span>
          <span class="wordMiddle"> {{ wordMiddle }}</span>
          <span class="wordEnd"> {{ wordEnd }}</span>
        </div>
        <div class="word-panel m10" v-else>
          点击开始按钮
        </div>

        <!-- <button @click="startGetWord">start Get Word</button> -->
        <div>
          <span @click="startGetWord" class="m10 primary-btn">开始</span>
        </div>
        <!-- <input :value="info.input" class="input" @input="onInputChange"
          placeholder="Tap on the virtual keyboard to start"> -->

        <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" @keyboardMounted="keyboardMounted"
          :input="info.input" />
        <div>
          <span class="" v-for="finger in info.fingerGroup" :key="finger.name">
            <span @click="changeFinger(finger)" class="change-finger">{{finger.label}}</span>

          </span>
        </div>
        <div>
          <img src="../pics/hands.svg" alt="" srcset="" width="500">
        </div>
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

interface Ifinger {
  label: string,
  name: string,
  keys: string[]
}

let wordsList: Iwordlist[] = reactive([])
let info = reactive({
  input: "",
  aimKeys: ['q', 'a', 'z', 'e', 'i', 'o'],
  next:{
    word:'',
    key:''
  },
  fingerGroup: [
    {
      label:"左手小指",
      name:'left1',
      keys: ['z','q', 'a']
    },
    {
      label: "左手无名指",
      name: 'left2',
      keys: ['x', 'w', 's']
    },
    {
      label: "左手中指",
      name: 'left3',
      keys: ['c', 'd', 'e']
    }
    ,
    {
      label: "左手食指",
      name: 'left4',
      keys: ['v', 'f','b','g','t', 'r']
    }
    ,
    {
      label: "右手食指",
      name: 'right2',
      keys: ['m', 'n', 'y','j','h','u']
    }
    ,
    {
      label: "右手中指",
      name: 'right3',
      keys: [',', 'k', 'i']
    }
    ,
    {
      label: "右手无名指",
      name: 'right4',
      keys: ['.', 'l', 'o']
    }
    ,
    {
      label: "右手小指",
      name: 'right5',
      keys: ['[', ']', '/', ';','\'', 'p']
    }
  ],
})
function getNextWord(): Iwordlist {
  let word = randomWords(1)[0]
  let res = checkWordsHasAimkey(word, info.aimKeys)
  if (res) {
    return res
  } else {
    return getNextWord()
  }
}


let wordStart = computed(() => {
  let el = info.next
  if (el) {
    let word = el.word
    let key = el.key

    return word.split(key)[0]
  } else {
    return ''
  }
})


let wordMiddle = computed(() => {
  let el = info.next
  if (el) {
    return el.key
  } else {
    return ''
  }
})

let wordEnd = computed(() => {
  let el = info.next
  if (el) {
    let word = el.word
    let key = el.key

    return word.split(key)[1]
  } else {
    return ''
  }
})

function changeFinger(finger: Ifinger) {
  addShadow(finger.keys,info.aimKeys)
  info.aimKeys = finger.keys
}

function startGetWord() {
  info.next = getNextWord();
  keyboard.addButtonTheme(info.next.key, "next-button");

  addShadow(info.aimKeys)
  // setInterval(() => {
  //   let arr = randomWords(5)

  //   for (const word of arr) {
  //     let res = checkWordsHasAimkey(word, info.aimKeys)
  //     if (res) {
  //       wordsList.push(res)
  //     }
  //   }
  // }, 1000);
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

function addShadow(keys:string[],lastKeys:string[]=[]){

  for (const thekey of lastKeys) {
    keyboard.removeButtonTheme(thekey, "shadow-button");
  }

  for(const thekey of keys){
    keyboard.addButtonTheme(thekey, "shadow-button");
  }
}

function onChange(_input: string) {
  console.log("Input changed", _input);
  info.input = _input;
}
function onKeyPress(button: string) {
  console.log("button", button);
  if (info.next && info.next.key === button) {
  keyboard.removeButtonTheme(button, "next-button");
  info.next = getNextWord();
  keyboard.addButtonTheme(info.next.key, "next-button");
  }else{
    console.log('错误')
  }
  // let cur = wordsList[0]
  // if (cur && cur.key === button) {
  //   keyboard.removeButtonTheme(button, "next-button");
  //   wordsList.shift()
  //   let next = wordsList[0]
  //   if (next){
  //     keyboard.addButtonTheme(next.key, "next-button");
  //   }


  // }
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
      keyboardMounted,
      changeFinger
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.pointer{
  cursor: pointer;
}
.m10{
  margin:10px;
}
.primary-btn{
  cursor: pointer;
  background-color: #00a699;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  
}
.primary-btn:hover{
  background-color: #008378;
  color: #fff;
}
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

.hg-theme-default .hg-button.next-button {
  border: 2px solid #ff0000;
}

.word-panel{
  font-size: 30px;
}
.wordMiddle{
  color:red;
}
.hg-theme-default .hg-button.shadow-button{
  box-shadow: 2px 3px 2px 1px gray;
}

.change-finger{
  margin:0 6px;
  padding: 2px 4px;
  cursor: pointer;
  border: 1px solid #cccccc;
}
</style>