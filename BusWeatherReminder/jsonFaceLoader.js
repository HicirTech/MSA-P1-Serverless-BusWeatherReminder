const fs = require('fs');

//load from a textFace.json to get a random face string
var faceLoader = {
    getARandomFace: function () {
        rawdata = fs.readFileSync('https://ashuyun.tk/rec/textFace.json');
        faces = JSON.parse(rawdata);
        return (faces.face[Math.floor(Math.random() * faces.face.length)]);
    }
}
module.exports = faceLoader;

//test function
function test() 
{
    console.log(jsonData);
}
//test();