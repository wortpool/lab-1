const columns = [
  { id: "backlog", title: "Backlog" },
  { id: "development", title: "Development" },
  { id: "review", title: "Code Review" },
  { id: "done", title: "Done" },
];

const fallbackTasks = [
  {
    title: "Prepare repository hygiene",
    description: "Add README, .gitignore and environment variable example.",
    status: "done",
    priority: "high",
    owner: "Ihor",
  },
  {
    title: "Create feature branch",
    description: "Build the first UI iteration outside the main branch.",
    status: "review",
    priority: "medium",
    owner: "Ihor",
  },
  {
    title: "Resolve merge conflict",
    description: "Create conflicting edits and document the final resolution.",
    status: "development",
    priority: "high",
    owner: "Ihor",
  },
  {
    title: "Attach network graph screenshot",
    description: "Add the GitHub graph screenshot to the laboratory report.",
    status: "backlog",
    priority: "low",
    owner: "Ihor",
  },
];

async function loadTasks() {
  try {
    const response = await fetch("./data/tasks.json");

    if (!response.ok) {
      throw new Error("Task data was not loaded");
    }

    return response.json();
  } catch {
    return fallbackTasks;
  }
}

function groupTasks(tasks) {
  return columns.map((column) => ({
    ...column,
    tasks: tasks.filter((task) => task.status === column.id),
  }));
}

function createTaskCard(task) {
  const article = document.createElement("article");
  article.className = "task-card";
  article.dataset.priority = task.priority;

  article.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <div class="task-meta">
      <span>${task.priority}</span>
      <span>${task.owner}</span>
    </div>
  `;

  return article;
}

function renderBoard(tasks) {
  const board = document.querySelector("#board");
  board.replaceChildren();

  groupTasks(tasks).forEach((column) => {
    const section = document.createElement("section");
    section.className = "column";
    section.innerHTML = `<h2>${column.title}<span>${column.tasks.length}</span></h2>`;

    column.tasks.forEach((task) => section.append(createTaskCard(task)));
    board.append(section);
  });
}

function renderSummary(tasks) {
  const done = tasks.filter((task) => task.status === "done").length;
  const review = tasks.filter((task) => task.status === "review").length;
  const readiness = Math.round((done / tasks.length) * 100);

  document.querySelector("#total-tasks").textContent = tasks.length;
  document.querySelector("#review-tasks").textContent = review;
  document.querySelector("#total-tasks").textContent = tasks.length;
  document.querySelector("#review-tasks").textContent = review;

  document.querySelector("#done-tasks").textContent = done;
  document.querySelector("#readiness-value").textContent = `${readiness}%`;
  document.querySelector("#readiness-caption").textContent =
    readiness === 100 ? "Ready to merge" : "Needs review before merge";
}фі

async function init() {
  const tasks = await loadTasks();
  renderSummary(tasks);
  renderBoard(tasks);
}

init();
