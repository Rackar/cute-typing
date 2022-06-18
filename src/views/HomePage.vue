<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Typing Soup</ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <span class="fingerHighlight" v-show="info.isShowFingerPoint"> </span>

      <div id="container">
        <div>
          <span class="bullet" v-show="info.showBuuletAnima">{{ info.cur_btn }}</span>
        </div>
        <img id="monster" :src="'/pics/monster/' + info.monsterPicName + '.jpg'" alt="" srcset="" width="50" />
        <div class="word-panel m10" v-if="wordMiddle">
          <span class="wordStart"> {{ wordStart }}</span>
          <span class="wordMiddle"> {{ wordMiddle }}</span>
          <span class="wordEnd"> {{ wordEnd }}</span>
        </div>

        <div class="word-panel m10" v-else>
          点击开始按钮
        </div>
        <div>
          正确计数 {{ info.rightCount }}, 错误计数 {{ info.wrongCount }}, 计时 {{ Math.floor(info.time) }}
        </div>

        <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" @keyboardMounted="keyboardMounted"
          :input="info.input" />

        <div class="m10">
          <span @click="startGetWord" class="m10 primary-btn">开始</span>
          <span @click="pauseGame" class="m10 primary-btn">暂停</span>
          <span @click="stopGame" class="m10 primary-btn">清零</span>
        </div>
        <div class="m10">
          <span class="" v-for="finger in info.fingerGroup" :key="finger.name">
            <span @click="changeFinger(finger)" class="m10 primary-btn">{{ finger.label }}</span>

          </span>
        </div>
        <div>
          <img id="fingerPic" src="../pics/hands.svg" alt="" srcset="" width="500">
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import SimpleKeyboard from "./KeyBoard.vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, reactive, computed, nextTick } from 'vue';
// var randomWords = require('random-words');
import anime from 'animejs'
import { randomWords, wordList } from '../libs/randomWord';

//#region 定义类型、变量、计算属性、响应式
interface Iwordlist {
  word: string;
  key: string;
}

interface Ifinger {
  label: string,
  name: string,
  keys: string[]
}

const monsterNames = Array(4).fill(0).map((_, i) => `${i}`);


const wordsList: Iwordlist[] = reactive([])
const info = reactive({
  input: "",
  aimKeys: ['a', 'u', 'e', 'i', 'o'],
  next: {
    word: '',
    key: '',
  },
  fingerGroup: [
    {
      label: "左手小指",
      name: 'left1',
      keys: ['z', 'q', 'a'],
    },
    {
      label: "左手无名指",
      name: 'left2',
      keys: ['x', 'w', 's'],
    },
    {
      label: "左手中指",
      name: 'left3',
      keys: ['c', 'd', 'e'],
    }
    ,
    {
      label: "左手食指",
      name: 'left4',
      keys: ['v', 'f', 'b', 'g', 't', 'r'],
    }
    ,
    {
      label: "右手食指",
      name: 'right2',
      keys: ['m', 'n', 'y', 'j', 'h', 'u'],
    }
    ,
    {
      label: "右手中指",
      name: 'right3',
      keys: [',', 'k', 'i'],
    }
    ,
    {
      label: "右手无名指",
      name: 'right4',
      keys: ['.', 'l', 'o'],
    }
    ,
    {
      label: "右手小指",
      name: 'right5',
      keys: ['[', ']', '/', ';', `'`, 'p', '\\'],
    },
  ],
  rightCount: 0,
  wrongCount: 0,
  showBuuletAnima: false,
  cur_btn: 'o',
  time: 0,
  cacheShadowedList: [''],
  isShowFingerPoint: false,
  monsterPicName: '0',
})
const wordStart = computed(() => {
  const el = info.next
  if (el) {
    const { word } = el
    const { key } = el

    return word.split(key)[0]
  } else {
    return ''
  }
})


const wordMiddle = computed(() => {
  const el = info.next
  if (el) {
    return el.key
  } else {
    return ''
  }
})

const wordEnd = computed(() => {
  const el = info.next
  if (el) {
    const { word } = el
    const { key } = el

    return word.split(key)[1]
  } else {
    return ''
  }
})

//#endregion



function getNextWord(index?: number): Iwordlist {
  // const word = randomWords(1)[0]
  if (index === undefined || index >= info.aimKeys.length) {
    index = Math.floor(Math.random() * info.aimKeys.length)
  }

  const word = generateRandomWordFrom(wordList, info.aimKeys[index])
  const res = checkWordsHasAimkey(word, info.aimKeys[index])
  if (res) {
    return res
  } else {
    return getNextWord(index)
  }
}


let intervalHandle = 0

function startTime(startTime = 0) {
  info.time = startTime
  intervalHandle = setInterval(() => {
    info.time = info.time + 0.1
    info.time = Math.round(info.time * 10) / 10
  }, 100)
}

function clearTime() {
  clearInterval(intervalHandle)
}

//#region 手指图片控制

function changeFinger(finger: Ifinger) {
  info.isShowFingerPoint = true
  getFingerPicPos(finger.name)

  addShadow(finger.keys, info.aimKeys)
  info.aimKeys = finger.keys
  clearLastWordHighlight()
  stopGame()
}

function getFingerPicPos(name: string) {
  const el = document.getElementById('fingerPic')
  if (el) {
    const { top, bottom, left, right } = el.getBoundingClientRect()
    const btn = document.querySelector(`#fingerPic`) as HTMLElement
    console.log('offset', btn.offsetTop, btn.offsetLeft);
    console.log(getElementPos(btn))
    const { actualLeft, actualTop } = getElementPos(btn)
    console.log(top, bottom, left, right)
    const height = bottom - top + 54  //不知道什么原因缺了25像素，补上。。
    let offsetX = 0
    let offsetY = 0
    const xlen = (right - left) / 1000
    const ylen = (bottom - top) / 1000
    //按1000为标准单位设定偏移常数
    switch (name) {
      case 'left1':
        offsetX = 15
        offsetY = 360
        break;
      case 'left2':
        offsetX = 93
        offsetY = 50
        break;
      case 'left3':
        offsetX = 140
        offsetY = -84
        break;
      case 'left4':
        offsetX = 257
        offsetY = -81
        break;
      case 'right2':
        offsetX = 702
        offsetY = -90
        break;
      case 'right3':
        offsetX = 818
        offsetY = -84
        break;
      case 'right4':
        offsetX = 865
        offsetY = 35
        break;
      case 'right5':
        offsetX = 941
        offsetY = 365
        break;
      default:
        break;
    }

    const fingerHighlight = document.querySelector(`.fingerHighlight`) as HTMLElement
    if (fingerHighlight) {
      // 拼凑了一下得到键盘按键位置
      fingerHighlight.style.left = `${actualLeft + Math.round(offsetX * xlen)}px`
      fingerHighlight.style.top = `${actualTop - height + Math.round(offsetY * ylen)}px`
    }
  }
}

//#endregion

function clearLastWordHighlight() {
  if (info.next) {
    keyboard.removeButtonTheme(info.next.key, "next-button");
  }
}

//#region 主界面按键控制

function startGetWord() {
  // clearTime()
  startTime(info.time)

  clearLastWordHighlight()
  info.next = getNextWord();
  keyboard.addButtonTheme(info.next.key, "next-button");

  addShadow(info.aimKeys)

  addMonsterMove()

}

function stopGame() {
  clearTime()
  info.rightCount = 0
  info.wrongCount = 0
  info.time = 0
  removeMonsterMove()
}

function pauseGame() {
  clearTime()
  removeMonsterMove()
}
//#endregion


//#region 怪兽行为动画控制
function addMonsterMove() {
  const randomIndex = Math.floor(Math.random() * monsterNames.length)
  info.monsterPicName = monsterNames[randomIndex]
  const monster = document.querySelector(`#monster`) as HTMLElement
  anime({
    targets: monster,
    // scale: [
    //   { value: 1.1, duration: 250, delay: 200, easing: 'easeOutExpo' },
    //   { value: 1, duration: 450 },
    //   { value: 1.05, duration: 350, delay: 200, easing: 'easeOutExpo' },
    //   { value: 1, duration: 450 }
    // ],
    rotateZ: [
      {
        value: -10,
        duration: 300,
        easing: 'easeOutExpo',
      },
      {
        value: 0,
        duration: 400,
        easing: 'easeOutExpo',
      },
      {
        value: 10,
        duration: 300,
        easing: 'easeOutExpo',
      },
      {
        value: 0,
        duration: 400,
        easing: 'easeOutExpo',
      },
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true,
  })
}

function removeMonsterMove() {
  const monster = document.querySelector(`#monster`) as HTMLElement
  anime.remove(monster)
}

function monsterBeHited() {
  return new Promise((resovle, reject) => {
    removeMonsterMove()
    const monster = document.querySelector(`#monster`) as HTMLElement
    anime({
      targets: monster,
      scale: [
        { value: 1.2, duration: 150 },
        { value: 2.5, duration: 350, delay: 100 },
        { value: 1, duration: 0 },
      ],
      opacity: [
        { value: 0.9, duration: 150 },
        { value: 0, duration: 350, delay: 100 },
        { value: 1, duration: 0 },
      ],

      complete: () => {
        resovle(null)
      },
    })

  })
}

//#endregion


//#region  utils pure function
function checkWordsHasAimkey(word: string, aimkey: string): Iwordlist | null {

  if (word.indexOf(aimkey) !== -1) {
    return { word, key: aimkey }
  }

  return null
}

function generateRandomWordFrom(_wordList: string[], letter: string) {
  const filteredList = _wordList.filter(item => item.indexOf(letter) !== -1)
  if (filteredList.length === 0) {
    return ''
  }

  return filteredList[randInt(filteredList.length)];
}

function randInt(lessThan: number) {
  return Math.floor(Math.random() * lessThan);
}

function getElementPos(element: HTMLElement) {
  let actualLeft = element.offsetLeft;
  let actualTop = element.offsetTop;

  let current = element.offsetParent as HTMLElement;
  while (current !== null) {
    actualLeft += current.offsetLeft;
    actualTop += current.offsetTop;

    current = current.offsetParent as HTMLElement;
  }

  return { actualLeft, actualTop };
}

//#endregion

let keyboard: any = null
function keyboardMounted(_keyboard: any) {
  keyboard = _keyboard
}

function addShadow(keys: string[], lastKeys: string[] = []) {

  for (const thekey of lastKeys) {
    keyboard.removeButtonTheme(thekey, "shadow-button");
  }

  clearShadow()
  for (const thekey of keys) {
    keyboard.addButtonTheme(thekey, "shadow-button");
    info.cacheShadowedList = [...thekey]
  }
}

function clearShadow() {
  if (!info.cacheShadowedList || info.cacheShadowedList.length === 0 || (info.cacheShadowedList.length === 0 && info.cacheShadowedList[0] === "")) {
    return
  }

  for (const thekey of info.cacheShadowedList) {
    keyboard.removeButtonTheme(thekey, "shadow-button");
  }
}

function startAnima() {
  return new Promise((resolve, reject) => {
    const btn = document.querySelector(`.next-button`) as HTMLElement
    const aim = document.querySelector(`.word-panel .wordMiddle`) as HTMLElement
    const bullet = document.querySelector(`.bullet`) as HTMLElement

    if (!(btn && aim && bullet)) {
      reject()
      return
    }

    // 拼凑了一下得到键盘按键位置
    bullet.style.left = `${btn.offsetLeft + 15}px`
    bullet.style.top = `${btn.offsetTop + 10}px`
    info.showBuuletAnima = true
    const offsetX = aim.offsetLeft - btn.offsetLeft - 15
    const offsetY = aim.offsetTop - btn.offsetTop
    console.log(`from buulet ${btn.offsetLeft},${btn.offsetTop} move x:${offsetX} y:${offsetY}`)

    nextTick(() => {
      anime({
        targets: bullet,
        translateX: offsetX,
        translateY: offsetY,
        easing: 'linear',
        duration: 200,
        complete() {
          info.showBuuletAnima = false
          bullet.style.left = `${btn.offsetLeft}px`
          bullet.style.top = `${btn.offsetTop}px`
          bullet.style.transform = `translateX(0px) translateY(0px)`
          resolve(null)
        },
      })
    })

  })
}


//#region 键盘按键和输入事件

function onChange(_input: string) {
  console.log("Input changed", _input);
  info.input = _input;
}

let keepPressing = false
async function onKeyPress(button: string) {
  if (keepPressing) {
    return
  }

  console.log("button", button);
  if (button && button.length !== 1) {
    return
  }




  if (info.next && info.next.key === button) {
    keepPressing = true
    info.rightCount++
    info.cur_btn = button
    await startAnima()
    await monsterBeHited()
    keyboard.removeButtonTheme(button, "next-button");
    info.next = getNextWord();
    keyboard.addButtonTheme(info.next.key, "next-button");
    keepPressing = false
    addMonsterMove()

  } else {
    info.wrongCount++
    console.log('错误')
    keepPressing = false
  }
}

function onInputChange(_input: any) {
  console.log("Input changed", _input);
  info.input = _input.target.value;
}
//#endregion

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
      stopGame,
      pauseGame,
      info, onChange, onKeyPress, onInputChange,
      wordStart, wordMiddle, wordEnd,
      keyboardMounted,
      changeFinger,
    }
  },
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
.pointer {
  cursor: pointer;
}

.m10 {
  margin: 10px;
}

.primary-btn {
  cursor: pointer;
  background-color: #00a699;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;

}

.primary-btn:hover {
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

.word-panel {
  font-size: 30px;
}

.wordMiddle {
  color: red;
}

.hg-theme-default .hg-button.shadow-button {
  box-shadow: 2px 3px 2px 1px gray;
}

.change-finger {
  margin: 0 6px;
  padding: 2px 4px;
  cursor: pointer;
  border: 1px solid #cccccc;
}

.bullet {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #ff0000;
  opacity: 0.5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fingerHighlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #ff0000;
  opacity: 0.5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(104, 255, 197)
}
</style>