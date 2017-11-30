const fs=require('fs');

console.log('Start');
const directory="../src/styles/Icons";
const filePath=directory + "/IcoMoon - Free.json";

let file=require(filePath);
let icons={};
const newLine='\r\n\t';
file.icons.forEach(icon => {
    let paths=icon.paths[0];
    icon.tags.forEach(tag=>{
        icons[tag]=paths;
    })
});



let data="export const ICONS = " + JSON.stringify(icons,null,'\t');
fs.writeFile(directory+"/Icons.js",data,(err)=>{
    // if(err) {
    //     throw err;
    // }
    console.log('file Created.');

})

console.log("End");
