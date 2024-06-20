// scripts.js
function addTask() {
    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title || !description) {
        alert('Please fill out all fields.');
        return;
    }

    const tasksList = document.getElementById('tasks-list');
    
    const row = document.createElement('tr');
    
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);
    
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);
    
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => row.remove();
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tasksList.appendChild(row);

    // Clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
}

document.getElementById('title-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

document.getElementById('description-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});
