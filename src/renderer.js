const CLOSE_BTN = document.getElementById("exit")
// const TabGroup = require("electron-tabs")

CLOSE_BTN.addEventListener("click", api.close);

// let tabGroup = new TabGroup({
//     newTab: {
//         title: "New Tab"
//     }
// });


// let tab1 = tabGroup.addTab({
//     title: "Test1",
//     src: "https://ourcodeworld.com",
//     visible: true
// });