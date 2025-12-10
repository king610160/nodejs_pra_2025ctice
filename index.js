const express = require('express');
const app = express();
const port = 3000;

// 引入路由檔案
const echoRouter = require('./routers/echo_route');

// 中介軟體設定
// 1. 確保能處理表單提交 (HTML form)
app.use(express.urlencoded({ extended: true })); 
// 2. 確保能處理 JSON 提交 (Postman/API client)
app.use(express.json()); 

// 🎯 將 /api/echo 的所有請求導向 echoRouter 處理
app.use('/api/echo', echoRouter);

// [選留] 基礎路由
app.get('/', (req, res) => {
    res.send('應用程式主頁面 (已拆分架構), v3.5');
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運作中`);
});