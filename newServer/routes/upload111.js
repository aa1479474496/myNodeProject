const express = require('express');
const router = express.Router();
const ports = require('./port');
const fs = require('fs');
const formidable = require('formidable');

var cacheFolder = './public/images/';

//上传图片

let upload = function(req, res, next) {

   
    var userDirPath = cacheFolder;
    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = userDirPath; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
    form.type = true;
    var displayUrl;
    var avatarName = '/' + Date.now() + '.' + 'jpg';
    var newPath = form.uploadDir + avatarName;
    displayUrl = avatarName;
// console.log(displayUrl,newPath);
    form.parse(req, function(err, fields, files) {
        console.log(files);
        if (err) {
            res.send(err);
            return;
        }
        var extName = 'jpg'; //后缀名
        // switch (files.upload.type) {
        //     case 'image/pjpeg':
        //         extName = 'jpg';
        //         break;
        //     case 'image/jpeg':
        //         extName = 'jpg';
        //         break;
        //     case 'image/png':
        //         extName = 'png';
        //         break;
        //     case 'image/x-png':
        //         extName = 'png';
        //         break;
        // }
        if (extName.length === 0) {
            res.json({
                code: 202,
                msg: '只支持png和jpg格式图片'
            });
            return;
        } else {
            var avatarName =  + Date.now() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            // displayUrl = UPLOAD_FOLDER + avatarName;
            displayUrl = newPath;
            // fs.renameSync(files.upload.path, newPath); //重命名
            res.json({
                code: 200,
                msg: displayUrl
            });
        }
    });





}





router.post(ports.UPLOAD, upload);
module.exports = router;