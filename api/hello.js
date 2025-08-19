// Простой API endpoint
export default function handler(req, res) {
  const currentTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  res.status(200).json({
    success: true,
    message: "Добро пожаловать на mastepan.ru!",
    timestamp: currentTime,
    data: {
      version: "1.0",
      status: "active",
      endpoints: [
        "/api/hello",
        "/api/time",
        "/api/weather"
      ]
    }
  });
}
