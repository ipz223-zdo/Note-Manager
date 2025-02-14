# Note Manager

Note Manager — це простий API для управління нотатками. Дозволяє додавати та отримувати нотатки.

## Встановлення та запуск

1. Клонувати репозиторій: `git clone https://github.com/ipz223-zdo/Note-Manager`
2. Запустити сервера:
   ```
   cd backend
   npm install
   nodemon server.js
   ```
3. Запустити frontend:
    ```
   cd frontend
   npm install
   npm run dev
   ```
4. Swagger-документація API доступна за адресою: `http://localhost:5000/api-docs`

## API Опис

### **Отримати всі нотатки**
- **GET** `/notes`
- **Відповідь:**
  ```
  [
    {
      "id": 1,
      "title": "Приклад нотатки",
      "content": "Це зміст нотатки"
    }  
  ]
  ```

### **Додати нову нотатку**
- **POST** `/notes`
- **Тіло запиту (JSON):**
  ```
  [
    {
      "title": "Нова нотатка",
      "content": "Текст нотатки"
    }  
  ]
  ```
- **Відповідь:**
  ```
  [
    {
      "id": 2,
      "title": "Нова нотатка",
      "content": "Текст нотатки"
    }  
  ]
  ```

##  Ліцензія

Цей проєкт ліцензовано під **MIT License**. Деталі у [LICENSE](LICENSE.md).

##  Автор

**Затилюк Дмитро**  

 Email: ipz223_zdo@student.ztu.edu.ua

 GitHub: https://github.com/ipz223-zdo
