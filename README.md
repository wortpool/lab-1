# GitFlow Automation Board

Невеликий frontend MVP для лабораторної роботи №1 з Git. Проєкт показує
просту дошку автоматизації GitHub-процесу: задачі проходять етапи `Backlog`,
`Development`, `Code Review` і `Done`, а JavaScript підраховує готовність
релізу.

## Ідея MVP

Додаток допомагає швидко побачити, які задачі вже готові до Pull Request,
які очікують code review, а які ще потрібно доробити. Це маленький приклад
проєкту, на якому можна продемонструвати GitFlow, feature branches,
Pull Request, Code Review та вирішення merge conflict. a

## Технології

- HTML5
- CSS3
- JavaScript ES Modules
- Git / GitHub

## Структура

```text
.
├── data/
│   └── tasks.json
├── src/
│   ├── app.js
│   └── styles.css
├── index.html
├── .gitignore
└── README.md
```

## Запуск

Варіант 1: відкрити `index.html` у браузері.

Варіант 2: запустити локальний сервер:

```bash
python3 -m http.server 5173
```

Після цього відкрити:

```text
http://localhost:5173
```

## Git Workflow для лабораторної

1. `main` - стабільна гілка з базовим налаштуванням проєкту.
2. `develop` - інтеграційна гілка для лабораторної роботи.
3. `feature/initial-layout` - гілка з MVP-інтерфейсом.
4. `feature/conflict-demo` - гілка для демонстрації merge conflict.

## Pull Request

Pull Request: https://github.com/wortpool/lab-1/pull/1 - закритий після Code Review та merge у `develop`.

## Контрольні питання

### 1. У чому різниця між `git merge` та `git rebase`?

`git merge` зберігає історію гілок і створює merge commit, якщо Git не може
об'єднати зміни fast-forward способом. `git rebase` переносить коміти поточної
гілки поверх іншої гілки, тому історія виглядає лінійнішою, але хеші комітів
змінюються.

### 2. Чому не можна зберігати `.env` з паролями у репозиторії?

Файл `.env` часто містить токени, паролі, API-ключі та інші секрети. Якщо
додати його в репозиторій, ці дані можуть потрапити до інших людей або в
публічний доступ. Тому `.env` додають у `.gitignore`, а приклад змінних
зберігають у `.env.example`.

### 3. Яку роль відіграє Pull Request у QA?

Pull Request дає можливість перевірити код до злиття в основну гілку:
обговорити рішення, знайти помилки, запустити тести та переконатися, що зміни
не ламають існуючий функціонал.
