// 引入 express 套件
const express = require('express');
const app = express();
const port = 3000;

// 解析 JSON 格式的 request body (以前需要 body-parser，現在內建了)
app.use(express.json());

// [路由 1] 首頁 - GET 方法
app.get('/', (req, res) => {
  res.send('你好，這是首頁！');
});

// [路由 2] 測試 API - GET 方法
app.get('/api/status', (req, res) => {
  // express 會自動把物件轉成 json 回傳
  res.json({ 
    status: 'ok', 
    message: 'Server is running smoothly' 
  });
});

// [路由 3] 測試 API - POST 方法
app.post('/api/echo', (req, res) => {
     // 從 request body 取得資料
    const receivedData = req.body;
    res.json({
      received: receivedData
    });
});


// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運作中`);
});