// 引入 Node.js 內建的 fs 模組 (檔案系統)
const fs = require('fs');
// 引入 Node.js 內建的 path 模組 (處理路徑)
const path = require('path');

// 設置 views 資料夾的絕對路徑
// __dirname 指向當前檔案 (controllers) 的資料夾
const viewsPath = path.join(__dirname, '..', 'views');

/**
 * [Controller 1] 處理 GET /api/echo 請求
 * 讀取並回傳 post_form.html 檔案
 */
exports.getEchoForm = (req, res) => {
    // 讀取 HTML 檔案
    fs.readFile(path.join(viewsPath, 'post_form.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            // 處理讀取錯誤
            return res.status(500).send('無法載入表單頁面');
        }
        // 成功讀取後，將 HTML 內容送回
        res.type('html').send(data);
    });
};

/**
 * [Controller 2] 處理 POST /api/echo 請求
 * 接收資料，並讀取 post_result.html 插入資料後回傳
 */
exports.postEchoData = (req, res) => {
    const receivedData = req.body;
    
    // 讀取結果 HTML 檔案
    fs.readFile(path.join(viewsPath, 'post_result.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('無法載入結果頁面');
        }

        // 格式化接收到的資料，並替換佔位符
        const formattedData = JSON.stringify(receivedData, null, 2);
        const resultHtml = data.replace('[DATA_PLACEHOLDER]', formattedData);

        // 將替換後的 HTML 內容送回
        res.type('html').send(resultHtml);
    });
};