(function(){var e={993:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=993,e.exports=t},362:function(e,t,n){"use strict";var o=n(963),r=n(252);function a(e,t,n,o,a,i){const s=(0,r.up)("ion-router-outlet"),l=(0,r.up)("ion-app");return(0,r.wg)(),(0,r.j4)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1})}var i=n(130),s=(0,r.aZ)({name:"App",components:{IonApp:i.dr,IonRouterOutlet:i.jP}}),l=n(744);const c=(0,l.Z)(s,[["render",a]]);var u=c,d=n(89),h=n(577);const p={class:"fingerHighlight"},m={id:"container"},f=["src"],g={key:0,class:"word-panel m10"},y={class:"wordStart"},b={class:"wordMiddle"},w={class:"wordEnd"},v={key:1,class:"word-panel m10"},k={class:"m10"},x={class:"m10"},L=["onClick"],_=["src"];function P(e,t,n,a,i,s){const l=(0,r.up)("SimpleKeyboard"),c=(0,r.up)("ion-content"),u=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{fullscreen:!1},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("span",p,null,512),[[o.F8,e.info.isShowFingerPoint]]),(0,r._)("div",m,[(0,r._)("div",null,[(0,r.wy)((0,r._)("span",{class:"bullet"},(0,h.zw)(e.info.cur_btn),513),[[o.F8,e.info.showBuuletAnima]])]),(0,r._)("img",{id:"monster",src:`${e.basePath}pics/monster/${e.info.monsterPicName}.jpg`,alt:"",srcset:"",width:"50"},null,8,f),e.wordMiddle?((0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("span",y,(0,h.zw)(e.wordStart),1),(0,r._)("span",b,(0,h.zw)(e.wordMiddle),1),(0,r._)("span",w,(0,h.zw)(e.wordEnd),1)])):((0,r.wg)(),(0,r.iD)("div",v," 点击开始按钮 ")),(0,r._)("div",null," 正确计数 "+(0,h.zw)(e.info.rightCount)+", 错误计数 "+(0,h.zw)(e.info.wrongCount)+", 计时 "+(0,h.zw)(Math.floor(e.info.time)),1),(0,r.Wm)(l,{onOnChange:e.onChange,onOnKeyPress:e.onKeyPress,onKeyboardMounted:e.keyboardMounted,input:e.info.input},null,8,["onOnChange","onOnKeyPress","onKeyboardMounted","input"]),(0,r._)("div",k,[(0,r._)("span",{onClick:t[0]||(t[0]=(...t)=>e.startGetWord&&e.startGetWord(...t)),class:"m10 primary-btn more-green"},"开始"),(0,r._)("span",{onClick:t[1]||(t[1]=(...t)=>e.pauseGame&&e.pauseGame(...t)),class:"m10 primary-btn"},"暂停"),(0,r._)("span",{onClick:t[2]||(t[2]=(...t)=>e.stopGame&&e.stopGame(...t)),class:"m10 primary-btn"},"清零"),(0,r._)("span",{onClick:t[3]||(t[3]=(...t)=>e.showHandsOnKeyboard&&e.showHandsOnKeyboard(...t)),class:"m10 primary-btn"},"显示双手位置"),(0,r._)("span",{onClick:t[4]||(t[4]=(...t)=>e.muteTheSounds&&e.muteTheSounds(...t)),class:"m10 primary-btn"},"静音/解除"),(0,r._)("span",{onClick:t[5]||(t[5]=(...t)=>e.startLastLevel&&e.startLastLevel(...t)),class:"m10 primary-btn"},"上一关"),(0,r._)("span",{onClick:t[6]||(t[6]=(...t)=>e.startNextLevel&&e.startNextLevel(...t)),class:"m10 primary-btn"},"下一关")]),(0,r._)("div",x,[(0,r._)("span",{onClick:t[7]||(t[7]=(...t)=>e.changeModeToAllFingers&&e.changeModeToAllFingers(...t)),class:"m10 primary-btn"},"全键盘"),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.info.fingerGroup,(t=>((0,r.wg)(),(0,r.iD)("span",{class:"",key:t.name},[(0,r._)("span",{onClick:n=>e.changeFinger(t),class:"m10 primary-btn"},(0,h.zw)(t.label),9,L)])))),128))]),(0,r.wy)((0,r._)("div",{class:"subtitle"},(0,h.zw)(e.info.subtitle),513),[[o.F8,e.info.subtitle]]),(0,r._)("div",null,[(0,r._)("img",{id:"fingerPic",src:`${e.basePath}pics/hands.svg`,alt:"",srcset:"",width:"500"},null,8,_)])])])),_:1})])),_:1})}function S(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",{class:(0,h.C_)(n.keyboardClass)},null,2)}var T=n(86),j=n.n(T);let C=!1;var K={name:"SimpleKeyboard",props:{keyboardClass:{default:"simple-keyboard",type:String},input:{type:String}},data:()=>({keyboard:null}),mounted(){this.keyboard=new(j())(this.keyboardClass,{physicalKeyboardHighlight:!0,layoutName:"default",disableButtonHold:!0,onChange:this.onChange,onKeyPress:this.onKeyPress}),this.$emit("keyboardMounted",this.keyboard),document.onkeydown=e=>{!1===C&&(this.$emit("onKeyPress",e.key),C=!0)},document.onkeyup=()=>{C=!1}},methods:{onChange(e){this.$emit("onChange",e)},onKeyPress(e){this.$emit("onKeyPress",e),"{shift}"!==e&&"{lock}"!==e||this.handleShift()},handleShift(){const e=this.keyboard.options.layoutName,t="default"===e?"shift":"default";this.keyboard.setOptions({layoutName:t})}},watch:{input(e){this.keyboard.setInput(e)}}};const O=(0,l.Z)(K,[["render",S]]);var Z=O,M=n(262),q=n(30);const z=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","letiety","letious","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu","a/b","a[b","a]b","a\\b","a;b","a'b","a,b","a.b"];var $=n(766);const F="/cute-typing/sounds/",B=[{name:"bee",src:`${F}bee.mp3`,index:0,text:"按键音"},{name:"pa",src:`${F}pa.mp3`,index:1,text:"正确命中音"},{name:"doo",src:`${F}doo.mp3`,index:1,text:"错误按键音"},{name:"s1",src:`${F}s1.mp3`,index:10,text:"请将左手食指放在F键上，其余手指顺次放在本行。请将右手食指放在J键上，其余手指顺次放在本行。可以触摸到键盘定位点。两个大拇指放在空格键上，如图所示。"},{name:"s2",src:`${F}s2.mp3`,index:20,text:"手指上划下划，负责本区域的特定按键。让我们先来逐个练习一下。如已熟悉可以跳过。"},{name:"left1",src:`${F}left1.mp3`,index:30,text:"首先是左手小指放在A键上，向上为Q键，向下为Z键。请按下提示区的红色字母对应的按键。来消灭小怪兽吧"},{name:"left2",src:[`${F}left1.mp3`],index:30,text:"左手中指放在S键上，向上为W键，向下为X键"}];function N(e,t=1e3,n=.5){const o=B.find((t=>t.name===e));if(o)return I(o.src,t,n),o.text;console.error(`sound ${e} not found`)}async function A(e,t=1e3,n=.5){$.Howler.stop();const o=B.find((t=>t.name===e));if(o)return await I(o.src,t,n),o.text;console.error(`sound ${e} not found`)}function E(e){const t=B.find((t=>t.name===e));return t}function I(e,t=0,n=.5){return new Promise((o=>{const r=e instanceof Array?e:[e],a=new $.Howl({src:r,autoplay:!1,loop:!1,volume:n,onend(){setTimeout((()=>{o(null)}),t)}});a.play()}))}let H=!1;function G(){H=!H,$.Howler.mute(H)}var W=n(482);const R=[{label:"左手小指",name:"left1",keys:["z","q","a"]},{label:"左手无名指",name:"left2",keys:["x","w","s"]},{label:"左手中指",name:"left3",keys:["c","d","e"]},{label:"左手食指",name:"left4",keys:["v","f","b","g","t","r"]},{label:"右手食指",name:"right2",keys:["m","n","y","j","h","u"]},{label:"右手中指",name:"right3",keys:[",","k","i"]},{label:"右手无名指",name:"right4",keys:[".","l","o"]},{label:"右手小指",name:"right5",keys:["[","]","/",";","'","p","\\"]},{label:"无限制",name:"all",keys:["z","q","a","x","w","s","c","d","e","v","f","b","g","t","r","m","n","y","j","h","u",",","k","i",".","l","o","[","]","/",";","'","p","\\"]}];class D{constructor(e,t="letter",n="all",o="",r=30,a=100,i=.7,s=!0,l=!0,c=!0,u=!0){(0,W.Z)(this,"name",void 0),(0,W.Z)(this,"gameMode",void 0),(0,W.Z)(this,"fingerMode",void 0),(0,W.Z)(this,"fingerName",void 0),(0,W.Z)(this,"levelTotalWords",void 0),(0,W.Z)(this,"levelPassTimeLimit",void 0),(0,W.Z)(this,"levelPassRightRate",void 0),(0,W.Z)(this,"showFingerPoint",void 0),(0,W.Z)(this,"showButtonShadow",void 0),(0,W.Z)(this,"enableSound",void 0),(0,W.Z)(this,"enableSpeech",void 0),(0,W.Z)(this,"avaliableKeys",[]),(0,W.Z)(this,"previoursKeys",[]),(0,W.Z)(this,"currentFinger",null),this.name=e,this.gameMode=t,this.fingerMode=n,this.fingerName=o,this.levelTotalWords=r,this.levelPassTimeLimit=a,this.levelPassRightRate=i,this.showFingerPoint=s,this.showButtonShadow=l,this.enableSound=c,this.enableSpeech=u,this.name=e,this.gameMode=t,this.fingerMode=n,this.fingerName=o,this.showFingerPoint=s,this.showButtonShadow=l,this.enableSound=c,this.enableSpeech=u,this.levelTotalWords=r,this.levelPassTimeLimit=a,this.levelPassRightRate=i,this.currentFinger=this.initChangeFinger()}initChangeFinger(){const{fingerName:e}=this,t=R.find((t=>t.name===e));return t?(this.avaliableKeys=t.keys,t):null}}class Y{constructor(e,t,n=!1){(0,W.Z)(this,"levels",[]),(0,W.Z)(this,"ui",void 0),(0,W.Z)(this,"currentLevel",void 0),(0,W.Z)(this,"jumpTutorial",!1),this.ui=e,this.levels=t||[new D("第一关","letter","single","left1",20,100,.7,!0,!0,!0,!0),new D("第二关","letter","single","left2",20,100,.7,!0,!0,!0,!0)],n&&(this.jumpTutorial=n)}setCurrentLevel(e){this.currentLevel=e}startNextLevel(){if(this.currentLevel){const e=this.levels.findIndex((e=>e.name===this.currentLevel?.name));if(!(e<this.levels.length-1))return this.currentLevel=void 0,!1;this.currentLevel=this.levels[e+1]}else this.currentLevel=this.levels[0];return this.showButtonShadow(),!0}startLastLevel(){if(!this.currentLevel)return!1;{const e=this.levels.findIndex((e=>e.name===this.currentLevel?.name));if(!(e>0))return this.currentLevel=void 0,!1;this.currentLevel=this.levels[e-1]}return this.showButtonShadow(),!0}showButtonShadow(){this.currentLevel?.showButtonShadow&&(this.ui.hightLightKeys=this.currentLevel.avaliableKeys)}}class U{constructor(e){(0,W.Z)(this,"keyboard",void 0),(0,W.Z)(this,"_hightlightedKeys",[]),(0,W.Z)(this,"_keyboard",void 0),this.keyboard=e,this._keyboard=e}get hightLightKeys(){return this._hightlightedKeys}set hightLightKeys(e){this.changeHighLight(this._hightlightedKeys,e),this._hightlightedKeys=e}changeHighLight(e,t){const n=this._keyboard;if(n){for(const t of e)n.removeButtonTheme(t,"shadow-button");for(const e of t)n.addButtonTheme(e,"shadow-button")}}}const X="/cute-typing/",J=Array(4).fill(0).map(((e,t)=>`${t}`)),Q=(0,M.qj)([]),V=["z","q","a","x","w","s","c","d","e","v","f","b","g","t","r","m","n","y","j","h","u",",","k","i",".","l","o","[","]","/",";","'","p","\\"],ee=(0,M.qj)({input:"",aimKeys:["a","u","e","i","o"],next:{word:"",key:""},fingerGroup:[{label:"左手小指",name:"left1",keys:["z","q","a"]},{label:"左手无名指",name:"left2",keys:["x","w","s"]},{label:"左手中指",name:"left3",keys:["c","d","e"]},{label:"左手食指",name:"left4",keys:["v","f","b","g","t","r"]},{label:"右手食指",name:"right2",keys:["m","n","y","j","h","u"]},{label:"右手中指",name:"right3",keys:[",","k","i"]},{label:"右手无名指",name:"right4",keys:[".","l","o"]},{label:"右手小指",name:"right5",keys:["[","]","/",";","'","p","\\"]}],rightCount:0,wrongCount:0,showBuuletAnima:!1,cur_btn:"o",time:0,cacheShadowedList:[""],isShowFingerPoint:!1,monsterPicName:"0",subtitle:""});let te,ne,oe=null;function re(e){oe=e,te=new U(oe),ne=new Y(te)}const ae=(0,r.Fl)((()=>{const e=ee.next;if(e){const{word:t}=e,{key:n}=e;return t.split(n)[0]}return""})),ie=(0,r.Fl)((()=>{const e=ee.next;return e?e.key:""})),se=(0,r.Fl)((()=>{const e=ee.next;if(e){const{word:t}=e,{key:n}=e;return t.split(n)[1]}return""}));function le(e){(void 0===e||e>=ee.aimKeys.length)&&(e=Math.floor(Math.random()*ee.aimKeys.length));const t=Le(z,ee.aimKeys[e]),n=xe(t,ee.aimKeys[e]);return n||le(e)}let ce=0;function ue(e=0){ee.time=e,ce=setInterval((()=>{ee.time=ee.time+.1,ee.time=Math.round(10*ee.time)/10}),100)}function de(){clearInterval(ce)}function he(e){ee.isShowFingerPoint=!0,me(e.name),Se(e.keys,ee.aimKeys),ee.aimKeys=e.keys,fe(),ye()}function pe(){Se([],ee.aimKeys),ee.aimKeys=V,fe(),ye()}function me(e){const t=document.getElementById("fingerPic");if(t){const{top:n,bottom:o,left:r,right:a}=t.getBoundingClientRect(),i=document.querySelector("#fingerPic");console.log("offset",i.offsetTop,i.offsetLeft),console.log(Pe(i));const{actualLeft:s,actualTop:l}=Pe(i);console.log(n,o,r,a);const c=o-n+54;let u=0,d=0;const h=(a-r)/1e3,p=(o-n)/1e3;switch(e){case"left1":u=15,d=360;break;case"left2":u=93,d=50;break;case"left3":u=140,d=-84;break;case"left4":u=257,d=-81;break;case"right2":u=702,d=-90;break;case"right3":u=818,d=-84;break;case"right4":u=865,d=35;break;case"right5":u=941,d=365;break;default:break}const m=document.querySelector(".fingerHighlight");m&&(m.style.left=`${s+Math.round(u*h)}px`,m.style.top=`${l-c+Math.round(d*p)}px`)}}function fe(){ee.next&&oe.removeButtonTheme(ee.next.key,"next-button")}function ge(){ue(ee.time),fe(),ee.next=le(),oe.addButtonTheme(ee.next.key,"next-button"),we()}function ye(){de(),ee.rightCount=0,ee.wrongCount=0,ee.time=0,ve()}function be(){de(),ve()}function we(){const e=Math.floor(Math.random()*J.length);ee.monsterPicName=J[e];const t=document.querySelector("#monster");(0,q.Z)({targets:t,rotateZ:[{value:-10,duration:300,easing:"easeOutExpo"},{value:0,duration:400,easing:"easeOutExpo"},{value:10,duration:300,easing:"easeOutExpo"},{value:0,duration:400,easing:"easeOutExpo"}],easing:"easeOutElastic(1, .8)",loop:!0})}function ve(){const e=document.querySelector("#monster");q.Z.remove(e)}function ke(){return new Promise(((e,t)=>{ve();const n=document.querySelector("#monster");(0,q.Z)({targets:n,scale:[{value:1.2,duration:150},{value:2.5,duration:350,delay:100},{value:1,duration:0}],opacity:[{value:.9,duration:150},{value:0,duration:350,delay:100},{value:1,duration:0}],complete:()=>{e(null)}})}))}function xe(e,t){return-1!==e.indexOf(t)?{word:e,key:t}:null}function Le(e,t){const n=e.filter((e=>-1!==e.indexOf(t)));return 0===n.length?"":n[_e(n.length)]}function _e(e){return Math.floor(Math.random()*e)}function Pe(e){let t=e.offsetLeft,n=e.offsetTop,o=e.offsetParent;while(null!==o)t+=o.offsetLeft,n+=o.offsetTop,o=o.offsetParent;return{actualLeft:t,actualTop:n}}function Se(e,t=[]){te.hightLightKeys=e}function Te(){return new Promise(((e,t)=>{const n=document.querySelector(".next-button"),o=document.querySelector(".word-panel .wordMiddle"),a=document.querySelector(".bullet");if(!(n&&o&&a))return void t();a.style.left=`${n.offsetLeft+15}px`,a.style.top=`${n.offsetTop+10}px`,ee.showBuuletAnima=!0;const i=o.offsetLeft-n.offsetLeft-15,s=o.offsetTop-n.offsetTop;console.log(`from buulet ${n.offsetLeft},${n.offsetTop} move x:${i} y:${s}`),(0,r.Y3)((()=>{(0,q.Z)({targets:a,translateX:i,translateY:s,easing:"linear",duration:200,complete(){ee.showBuuletAnima=!1,a.style.left=`${n.offsetLeft}px`,a.style.top=`${n.offsetTop}px`,a.style.transform="translateX(0px) translateY(0px)",e(null)}})}))}))}function je(){const e=document.getElementById("fingerPic"),t=document.querySelectorAll(".hg-button.hg-standardBtn");if(e)for(const n of t)if("f"===n.dataset.skbtn){console.log(n.offsetTop,e.offsetTop);const t=n.offsetTop-e.offsetTop-20;oe.addButtonTheme("f j","position-base-button"),(0,q.Z)({targets:e,translateY:t,easing:"linear",direction:"alternate",duration:500,loop:2,complete(){}});break}Ce(["s1","s2"])}async function Ce(e){for(const t of e){const e=E(t);e?.text&&(ee.subtitle=e.text,await A(t),ee.subtitle="")}}function Ke(e){console.log("Input changed",e),ee.input=e}let Oe=!1;async function Ze(e){Oe||(console.log("button",e),e&&1!==e.length||(ee.next&&ee.next.key===e?(Oe=!0,ee.rightCount++,ee.cur_btn=e,N("bee"),await Te(),N("pa"),await ke(),oe.removeButtonTheme(e,"next-button"),ee.next=le(),oe.addButtonTheme(ee.next.key,"next-button"),Oe=!1,we()):(ee.wrongCount++,console.log("错误"),N("doo"),Oe=!1)))}function Me(e){console.log("Input changed",e),ee.input=e.target.value}function qe(){ne.startLastLevel(),$e()}function ze(){ne.startNextLevel(),$e()}async function $e(){if(ne.currentLevel){ee.aimKeys=ne.currentLevel.avaliableKeys;const e=ne.currentLevel.fingerName;Ce([e])}}var Fe=(0,r.aZ)({name:"HomePage",components:{IonContent:i.W2,IonPage:i._i,SimpleKeyboard:Z},setup(){return{wordsList:Q,startGetWord:ge,stopGame:ye,pauseGame:be,info:ee,onChange:Ke,onKeyPress:Ze,onInputChange:Me,wordStart:ae,wordMiddle:ie,wordEnd:se,keyboardMounted:re,changeFinger:he,changeModeToAllFingers:pe,showHandsOnKeyboard:je,muteTheSounds:G,startLastLevel:qe,startNextLevel:ze,basePath:X,handUrl:`${X}pics/hands.svg`}}});const Be=(0,l.Z)(Fe,[["render",P],["__scopeId","data-v-c21898d4"]]);var Ne=Be;const Ae=(0,r.Uk)(" A web page to learn and practice Keyboard typing. ");function Ee(e,t){const n=(0,r.up)("ion-content"),o=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{fullscreen:!1},{default:(0,r.w5)((()=>[Ae])),_:1})])),_:1})}const Ie={},He=(0,l.Z)(Ie,[["render",Ee]]);var Ge=He;const We=[{path:"/",name:"Game",component:Ne},{path:"/about",name:"About",component:Ge}],Re=(0,d.p7)({history:(0,d.PO)("/cute-typing/"),routes:We});var De=Re;n(851),n(292),n(633),n(45),n(187),n(299),n(423),n(687),n(147),n(250);const Ye=(0,o.ri)(u).use(i.oX).use(De);De.isReady().then((()=>{Ye.mount("#app")}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cute-typing:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/cute-typing/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var u=l(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkcute_typing"]=self["webpackChunkcute_typing"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(362)}));o=n.O(o)})();
//# sourceMappingURL=app.js.map