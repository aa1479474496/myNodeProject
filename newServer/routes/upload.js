const express = require('express');
const router = express.Router();
const ports = require('./port');
const fs = require('fs');
const path = require('path');    
var multer = require('multer');


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage }).array('file',20);




//上传图片

let upload1 = function(req, res, next) {
    upload(req, res, function(err) {

        
        if (err) {
            return res.json({ msg: err });
        }
        
        res.json(req.file)

        return res.end("File uploaded sucessfully!.");
    });

}


//上传头像
const pathName = path.dirname(require.main.filename) + '/public/head/';
const absName = 'http://localhost:3030/public/head/';


let headPortrait = function(req, res, next) {
    //接收前台POST过来的base64
    var imgData = req.body.headPortraitSrc;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
   
    var name =  `image-${new Date().getTime()}.png` ;
    fs.writeFile(pathName +''+ name, dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          return res.json({
              src: absName +''+name,
              msg: '保存成功'
          });
        }
    });
}





router.post(ports.UPLOAD, upload1);
router.post(ports.HEADPORTRAIT, headPortrait);
module.exports = router;