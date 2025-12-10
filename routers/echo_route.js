const express = require('express');
const router = express.Router();
// 引入 Controller 檔案
const echoController = require('../controllers/echo_controller');

// 定義 /api/echo 的路由
// GET 請求交給 getEchoForm 處理
router.get('/', echoController.getEchoForm);

// POST 請求交給 postEchoData 處理
router.post('/', echoController.postEchoData);

// 導出 router 供 index.js 引用
module.exports = router;