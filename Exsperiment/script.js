let todos = [
  {
    "id": 1,
    "task": "Belajar JavaScript",
    "done": false
  },
  {
    "id": 2,
    "task": "Kerjakan PR",
    "done": true
  }
];

function showTodos() {
  console.log("📋 TO-DO LIST");
  todos.forEach(todo => {
    const status = todo.done ? "✅" : "❌";
    console.log(`${todo.id}. ${todo.task} ${status}`);
  });
}

function addTodo(task) {
  const newTodo = {
    id: Date.now(),
    task: task,
    done: false
  };

  todos.push(newTodo);
  console.log("➕ Tugas ditambahkan");
}

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id
      ? { ...todo, done: !todo.done }
      : todo
  );

  console.log("🔄 Status diubah");
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  console.log("🗑️ Tugas dihapus");
}


addTodo("yaudah")
showTodos()

const jsonData = JSON.stringify(todos);
todos = JSON.parse(jsonData);