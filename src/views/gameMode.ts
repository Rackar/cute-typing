type gameModeEum = "letter" | "word" | "sentence";
type fingerModeEum = "single" | "custom" | "all"

interface IGameMode {
    gameMode: gameModeEum;
    fingerMode: fingerModeEum
    wordList: string[]
}
interface Ifinger {
    index:number
    label: string,
    name: string,
    keys: string[]
}
const FingerGroup = [
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
]


class GameMode implements IGameMode {
    public index=0;
    public levelName=''
    public wordList: string[] = [];
    public avaliableKeys: string[] = []
    public previoursKeys: string[] = []
    constructor(public gameMode: gameModeEum, public fingerMode: fingerModeEum) {
        this.gameMode = gameMode;
        this.fingerMode = fingerMode
    }
    setGameMode(name: gameModeEum) {
        this.gameMode = name;
    }
    getGameMode(): gameModeEum {
        return this.gameMode;
    }
    changeFinger(fingerName: string) {
        const finger = FingerGroup.find(item => item.name === fingerName)
        if (finger) {
            this.previoursKeys = [...this.avaliableKeys]
            this.avaliableKeys = finger.keys;
            return finger.keys
        }

        // info.isShowFingerPoint = true
        // getFingerPicPos(finger.name)

        // addShadow(finger.keys,previoursKeys)
        // info.aimKeys = finger.keys
        // clearLastWordHighlight()
        // stopGame()

    }

}

const level1 = new GameMode("letter", "single");
level1.changeFinger('left2')
// startGame(level1)