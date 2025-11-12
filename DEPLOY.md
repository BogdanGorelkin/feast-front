# Инструкция по деплою на GitHub Pages

## Шаг 1: Установите зависимости

```bash
npm install
# или
pnpm install
```

## Шаг 2: Обновите homepage в package.json

Откройте `package.json` и замените строку:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

На ваш реальный URL GitHub Pages. Например:
- Если репозиторий называется `feast-front` и ваш username `b-gorelkin-work`:
  ```json
  "homepage": "https://b-gorelkin-work.github.io/feast-front"
  ```

**Важно:** 
- Если репозиторий находится в организации или это user page (username.github.io), то homepage должен быть просто `"https://username.github.io"`
- Если это project page (username.github.io/repo-name), то используйте полный путь

## Шаг 3: Настройте GitHub Pages

1. Перейдите в Settings → Pages вашего репозитория на GitHub
2. В разделе "Source" выберите:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
3. Нажмите Save

## Шаг 4: Деплой

Выполните команду:

```bash
npm run deploy
# или
pnpm deploy
```

Эта команда:
1. Соберёт приложение (`npm run build:gh-pages`)
2. Создаст/обновит ветку `gh-pages` с собранными файлами
3. Запушит изменения на GitHub

## Шаг 5: Проверка

Через несколько минут ваше приложение будет доступно по адресу:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Обновление сайта

Каждый раз, когда вы хотите обновить сайт, просто выполните:
```bash
npm run deploy
```

## Примечания

- Первый деплой может занять несколько минут
- GitHub Pages использует Jekyll, но React приложения работают как статические файлы
- Если вы видите 404 при переходе по прямым ссылкам, это нормально для SPA - GitHub Pages автоматически перенаправит на index.html

## Альтернатива: Использование /docs папки

Если вы хотите использовать папку `/docs` вместо ветки `gh-pages`:

1. Измените скрипт deploy в package.json:
   ```json
   "deploy": "gh-pages -d build -o docs"
   ```

2. В настройках GitHub Pages выберите:
   - **Branch:** `main` (или ваша основная ветка)
   - **Folder:** `/docs`

3. Скопируйте содержимое папки `build` в папку `docs` и закоммитьте

