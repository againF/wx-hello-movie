const fs = require('fs');

// 读取 json 数据
let jsons = fs.readFileSync('./menu.json', 'utf-8');
jsons = JSON.parse(jsons);

// 将 json 数组转换成字符串
let str = '';
for (const item of jsons) {
    // 必须使用 \n 换行区别每个记录
    str += JSON.stringify(item) + "\n";
}

// 保存到本地
fs.writeFileSync('./words.json', str);