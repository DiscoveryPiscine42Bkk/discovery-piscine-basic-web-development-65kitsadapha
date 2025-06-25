window.onload = function() {
    loadTodos();
};

function newTodo() {
    const todoText = prompt("Enter your TO DO:");
    if (todoText && todoText.trim() !== "") {
        addTodo(todoText);
        saveTodos();
    }
}

function addTodo(text) {
    const ftList = document.getElementById('ft_list');
    const newDiv = document.createElement('div');
    newDiv.textContent = text;

    newDiv.onclick = function() {
        if (confirm("Do you want to delete this TO DO?")) {
            ftList.removeChild(newDiv);
            saveTodos();
        }
    };

    ftList.insertBefore(newDiv, ftList.firstChild);
}

function saveTodos() {
    const ftList = document.getElementById('ft_list');
    let todos = [];
    for (let item of ftList.children) {
        todos.push(item.textContent);
    }
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    const match = document.cookie.match(/(?:^|; )todos=([^;]*)/);
    if (match) {
        const todos = JSON.parse(decodeURIComponent(match[1]));
        todos.forEach(todoText => {
            addTodo(todoText);
        });
    }
}