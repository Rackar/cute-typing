import { Howl, Howler } from 'howler';

interface IsoundList {
    name: string,
    src: string,
    index: number,
    text: string,
}

const soundList: IsoundList[] = [
    {
        name: 'bee',
        src: './sounds/bee.mp3',
        index: 0,
        text: "按键音",
    },
    {
        name: 'pa',
        src: './sounds/pa.mp3',
        index: 1,
        text: "正确命中音",
    }, {
        name: 's1',
        src: './sounds/s1.mp3',
        index: 10,
        text: "请将左手食指放在F键上，其余手指顺次放在本行。请将右手食指放在J键上，其余手指顺次放在本行。可以触摸到键盘定位点。两个大拇指放在空格键上，如图所示。",
    }, {
        name: 's2',
        src: './sounds/s2.mp3',
        index: 20,
        text: "手指上划下划，负责本区域的特定按键。让我们先来逐个练习一下。如已熟悉可以跳过。",
    }]

async function playList(list: IsoundList[], waitTime = 1000, volume = 0.5) {
    Howler.stop()
    for (let i = 0; i < list.length; i++) {
        const sound = list[i];
        // eslint-disable-next-line no-await-in-loop
        await playToEnd(sound.src, waitTime, volume)
    }
}

async function playSingleByName(name: string, waitTime = 1000, volume = 0.5) {
    const sound = soundList.find(item => item.name === name)
    if (sound) {
        playToEnd(sound.src, waitTime, volume)
    } else {
        console.error(`sound ${name} not found`)
    }
}


function playListByNames(names: string[], waitTime = 1000, volume = 0.5) {
    const list = []
    for (const name of names) {
        const sound = soundList.find(item => item.name === name)
        if (sound) { list.push(sound) } else {
            console.error(`sound ${name} not found`)
        }
    }

    playList(list, waitTime, volume)
}

function playToEnd(url: string, waitTime = 0, volume = 0.5) {
    return new Promise(resolve => {
        const sound = new Howl({
            src: [url],
            autoplay: false,
            loop: false,
            volume,
            onend() {
                // console.log('Finished!');
                setTimeout(() => {
                    resolve(null)
                }, waitTime);
            },
        });
        // console.log('playToEnd', url)
        sound.play()
    })
}

let muted = false

function muteTheSounds() {
    muted = !muted
    Howler.mute(muted)
}

export { playListByNames, muteTheSounds, playSingleByName }