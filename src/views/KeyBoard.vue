<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

let pressing = false //防止物理按键持续按下

export default {
  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String,
    },
    input: {
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      physicalKeyboardHighlight: true,//实体键盘敲击高亮
      // physicalKeyboardHighlightPress: true,
      layoutName: "default", //修改布局
      disableButtonHold: true,//禁止长按
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
    });
    this.$emit('keyboardMounted', this.keyboard);

    // 监听物理键盘按键事件
    document.onkeydown = e => {
      if (pressing === false) {
        this.$emit("onKeyPress", e.key);
        pressing = true
      }
    }

    document.onkeyup = () => {
      pressing = false
    }
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") { this.handleShift(); }
    },
    handleShift() {
      const currentLayout = this.keyboard.options.layoutName;
      const shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle,
      });
    },
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    },
  },
};
</script>


<style>
</style>
