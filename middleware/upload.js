const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/upload");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload = multer({ 
  storage: storage, 
  limits: {
    fileSize: 2000 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') cb(null, true)
    else {
      cb(null, false)
      return cb(new Error('Format gambar tidak sesuai'))
    }
  }
});
module.exports = upload;
