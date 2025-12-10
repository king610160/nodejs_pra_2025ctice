// // 引入 express 套件
// const express = require('express');
// const app = express();
// const port = 3000;

// // 解析 JSON 格式的 request body (以前需要 body-parser，現在內建了)
// app.use(express.json());

// // [路由 1] 首頁 - GET 方法
// app.get('/', (req, res) => {
//   res.send('你好，這是首頁！');
// });

// // [路由 2] 測試 API - GET 方法
// app.get('/api/status', (req, res) => {
//   // express 會自動把物件轉成 json 回傳
//   res.json({ 
//     status: 'ok', 
//     message: 'Server is running smoothly' 
//   });
// });

// // [路由 3] 測試 API - POST 方法
// app.post('/api/echo', (req, res) => {
//      // 從 request body 取得資料
//     const receivedData = req.body;
//     res.json({
//       received: receivedData
//     });
// });


// // 啟動伺服器
// app.listen(port, () => {
//   console.log(`伺服器正在 http://localhost:${port} 運作中`);
// });

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
    res.send('應用程式主頁面 (已拆分架構)');
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運作中`);
});