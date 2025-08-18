// Простой API-эндпоинт
module.exports = (req, res) => {
  res.json({ 
    message: "Привет с mastepan.ru!",
    timestamp: new Date().toISOString() 
  });
};
