const taskInput = document.querySelector('#new-task-description')
const taskForm = document.querySelector('#create-task-form')
const tasksList = document.querySelector('#list')


document.addEventListener("DOMContentLoaded", (event) => {
  console.log('DOM fully loaded and parsed');
});

taskForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(taskForm);
  const formText = formData.get('new-task-description'); 

  const task = document.createElement('li')
  task.textContent = formText 
  tasksList.appendChild(task)


  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', event => {
    event.target.parentNode.remove()
  })
  task.appendChild(deleteButton)


  const priorityDropdown = document.createElement('select')
  priorityDropdown.innerText = 'Color'
  priorityDropdown.innerHTML = `
      <option value='Red'>Red: High</option>
      <option value='Yellow'>Yellow: Mid</option>
      <option value='Green'>Green: Low</option>`
  
      priorityDropdown.addEventListener('change', event => {
        console.log(priorityDropdown.value) 
        event.target.parentNode.style.color = priorityDropdown.value 
        
  })

  task.appendChild(priorityDropdown)
})

