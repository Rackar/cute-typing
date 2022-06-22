type gameModeEum = "letter" | "word" | "sentence";
type fingerModeEum = "single" | "custom" | "all"
type fingerNameEum = "left1" | "left2" | "left3" | "left4" | "right2" | "right3" | "right4" | "right5" | ""


interface Ifinger {
    label: string,
    name: string,
    keys: string[]
}
const FingerGroup:Ifinger[] = [
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
    {
        label: "无限制",
        name: 'all',
        keys: ['z', 'q', 'a', 'x', 'w', 's', 'c', 'd', 'e', 'v', 'f', 'b', 'g', 't', 'r', 'm', 'n', 'y', 'j', 'h', 'u', ',', 'k', 'i', '.', 'l', 'o', '[', ']', '/', ';', `'`, 'p', '\\'],
    },
]

class Level {
    public avaliableKeys: string[] = []
    public previoursKeys: string[] = []
    public currentFinger: Ifinger|null = null 

    constructor(public name: string,
        public gameMode: gameModeEum = 'letter',
        public fingerMode: fingerModeEum = 'all',
        public fingerName: fingerNameEum = '',
        public levelTotalWords: number = 30,
        public levelPassTimeLimit: number = 100,
        public levelPassRightRate: number = 0.7,
        public showFingerPoint: boolean = true,
        public showButtonShadow: boolean = true,
        public enableSound: boolean = true,
        public enableSpeech: boolean = true) {

        this.name = name
        this.gameMode = gameMode
        this.fingerMode = fingerMode
        this.fingerName = fingerName
        this.showFingerPoint = showFingerPoint
        this.showButtonShadow = showButtonShadow
        this.enableSound = enableSound
        this.enableSpeech = enableSpeech
        this.levelTotalWords = levelTotalWords
        this.levelPassTimeLimit = levelPassTimeLimit
        this.levelPassRightRate = levelPassRightRate

        this.currentFinger=this.initChangeFinger()
    }

    initChangeFinger() {
        const { fingerName } = this
        const finger = FingerGroup.find(item => item.name === fingerName)
        if (finger) {
            this.avaliableKeys = finger.keys;
            return finger
        }else{
            return null
        }
    }
}

class GameManager {
    public levels: Level[] = []
    public ui: UI
    public currentLevel?: Level
    public jumpTutorial = false
    constructor(ui: UI, _levels?: Level[], jumpTutorial = false) {
        this.ui = ui
        if (_levels) {
            this.levels = _levels
        } else {
            this.levels = [
                new Level('第一关', 'letter', 'single', 'left1', 20, 100, 0.7, true, true, true, true),
                new Level('第二关', 'letter', 'single', 'left2', 20, 100, 0.7, true, true, true, true),
            ]
        }

        if (jumpTutorial) { this.jumpTutorial = jumpTutorial }
    }

    setCurrentLevel(level: Level) {
        this.currentLevel = level
    }

    startNextLevel() {
        if (this.currentLevel) {
            const index = this.levels.findIndex((item: Level) => item.name === this.currentLevel?.name)
            if (index < this.levels.length - 1) {
                this.currentLevel = this.levels[index + 1]
            } else {
                this.currentLevel = undefined
                return false
            }
        } else {
            this.currentLevel = this.levels[0]
        }

        this.showButtonShadow()
        return true
    }
    startLastLevel() {
        if (this.currentLevel) {
            const index = this.levels.findIndex((item: Level) => item.name === this.currentLevel?.name)
            if (index > 0) {
                this.currentLevel = this.levels[index - 1]
            } else {
                this.currentLevel = undefined
                return false
            }
        } else {
            // this.currentLevel = this.levels[0]
            return false
        }

        this.showButtonShadow()
        return true
    }

     showButtonShadow() {
        if (this.currentLevel?.showButtonShadow) {
            this.ui.hightLightKeys = this.currentLevel.avaliableKeys
        }
    }

}



class UI {
    _hightlightedKeys: string[] = []
    _keyboard: any

    constructor(public keyboard: any) {
        this._keyboard = keyboard
    }

    public get hightLightKeys(): string[] {
        return this._hightlightedKeys
    }

    public set hightLightKeys(v: string[]) {
        this.changeHighLight(this._hightlightedKeys, v)
        this._hightlightedKeys = v;
    }

    changeHighLight(previours: string[], current: string[]) {
        const keyboard = this._keyboard
        if (keyboard) {
            for (const thekey of previours) {
                keyboard.removeButtonTheme(thekey, "shadow-button");
            }

            for (const thekey of current) {
                keyboard.addButtonTheme(thekey, "shadow-button");
            }
        }

    }

}

export { GameManager, Level, UI }