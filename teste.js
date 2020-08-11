name_comands = [
    "ability",
    "alwaysday",
    "clear",
    "clone",
    "connect",
    "deop",
    "difficulty",
    "effect",
    "enchant",
    "execute",
    "fill",
    "function",
    "gamemode",
    "gamerule",
    "give",
    "help",
    "immutableworld",
    "kill",
    "list",
    "locate",
    "me",
    "mixer",
    "mobevent",
    "op",
    "particle",
    "playsound",
    "reload",
    "replaceitem",
    "say",
    "scoreboard",
    "setmaxplayers",
    "setblock",
    "setworldspawn",
    "spawnpoint",
    "spreadplayers",
    "stopsound",
    "summon",
    "tag",
    "tell",
    "tellraw",
    "testfor",
    "testforblock",
    "testforblocks",
    "tickingarea",
    "time",
    "title",
    "titleraw",
    "toggledownfall",
    "tp",
    "videostream",
    "videostreamaction",
    "weather",
    "worldbuilder",
    "wsserver",
    "xp"
]

text_html = ""
a = 0
for(let i of name_comands){
    text_html+= `<option value="command${a}">${i}</option>
    `
    a++
}

console.log(text_html)