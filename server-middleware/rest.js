const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const TeleBot = require('telebot');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Загрузка изображений
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now().toString()}.${file.originalname.split('.').slice(-1)}`);
  },
});

const upload = multer({ storage: storageConfig });

app.post('/upload-file', upload.single('recfile'), (req, res) => {
  console.log('Файл загружен');
  res.send(req.file);
});

// удаление изображений
app.post('/delete-file', (req, res) => {
  fs.unlink(req.body.path, () => {
    console.log('Файл удален');
    return res.send('Файл удален');
  });
});

// отправка заявки в телеграм
const bot = new TeleBot(process.env.TELEGRAM_BOT_ID);
app.post('/send-lead', (req, res) => {
  const msg = `
    Новая заявка
    Имя: ${req.body.msg.name},
    Телефон: ${req.body.msg.phone},
    Отправлено с ${req.body.msg.sendFrom}`;

  bot.sendMessage(process.env.TELEGRAM_GROUP_ID, msg);
  return res.send('Сообщение отправлено!');
});

// запись снимка в файл
app.post('/create-snapshot', (req, res) => {
  fs.writeFile(`static/snapshots/${req.body.name}.json`, JSON.stringify(req.body.snapshot), (err) => {
    if (err) throw err;
    console.log('Снимок перезаписан');
  });
  return res.send(req.body.snapshot);
});

module.exports = app;
