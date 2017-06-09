const express = require('express');
const router = express.Router();
const ports = require('./port');
const fs = require('fs');
// const path = require('path');    
var multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, '/tmp/my-uploads')
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// })

// var Storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, "./Images");
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage }).array('photos', 40);





//上传图片

let upload1 = function(req, res, next) {
    upload(req, res, function(err) {
        // console.log(req);
        if (!req.files) {
            res.json({ ok: false });
            return;
        }
        if (err) {
            return res.json({msg: err});
        }

       
        return res.end("File uploaded sucessfully!.");
    });


    // let oldPath = path.join(__dirname, req.file.path);
    // let newPath = path.join(__dirname, 'uploads/' + req.file.originalname);
    // fs.rename(oldPath, newPath, (err) => {
    //     if (err) {
    //         res.json({ ok: false });
    //         console.log(err);
    //     } else {
    //         res.json({ ok: true });
    //     }
    // });



}





router.post(ports.UPLOAD, upload1);
module.exports = router;