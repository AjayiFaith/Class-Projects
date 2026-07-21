const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")
const totalTask = document.getElementById("totalTask")
const taskLeft = document.getElementById("taskLeft")
const taskDone = document.getElementById("taskDone")
const totalTask2 = document.getElementById("totalTask2")
const taskDone2 = document.getElementById("taskDone2")
const taskLeft2 = document.getElementById("taskLeft2")
const bgImage = document.getElementById("bg-image")
const imageText = document.getElementById("image-text")
let totalTaskCount = 0
let count= 0
let countDel = 0

totalTask2.textContent = `Total Tasks : ${totalTaskCount}`
taskDone2.textContent = `Task Completed : ${count}`
taskLeft2.textContent = `Task Remaining : ${count}`


totalTask.textContent = `Total Tasks : ${totalTaskCount}`
taskDone.textContent = `Task Completed : ${count}`
taskLeft.textContent = `Task Remaining : ${count}`

addTaskButton.addEventListener("click", function(){
  const task = taskInput.value.trim()
  if (task === "") {
    alert("Please enter a task")
    return
  }
  
  bgImage.style.display = "none"
  imageText.style.display = "none"
  
  totalTaskCount+=1
  countDel+=1
  totalTask2.textContent =`Total Tasks : ${totalTaskCount}`
  taskLeft2.textContent =`Task Remaining : ${countDel}`
  
  totalTask.textContent =`Total Tasks : ${totalTaskCount}`
  taskLeft.textContent =`Task Remaining : ${countDel}`
  
  const list = document.createElement("li")
  list.innerHTML = `<input type="checkbox" class="checkbox"><span class="taskText"> ${task} </span><button id="deleteBtn" class="deleteBtn">&times;</button>`
  taskList.appendChild(list)
  taskInput.value =""
  
  const checkMark = list.querySelector(".checkbox")
  const taskText = list.querySelector(".taskText")
  let countDel2 = 0
  
  checkMark.addEventListener("click",function(){
    if (checkMark.checked) {
      taskText.style.textDecoration ="line-through"
      list.style.color ="gray"
      list.style.opacity ="0.3"
      count+=1
    } else if (count > 0) {
      taskText.style.textDecoration ="none"
      list.style.color ="black"
      list.style.opacity ="1"
      count-=1
      countDel2+=1
    }
    taskDone2.textContent =`Task Completed : ${count}`  
    taskLeft2.textContent =`Task Remaining : ${countDel - count}`
    
    taskDone.textContent =`Task Completed : ${count}`  
    taskLeft.textContent =`Task Remaining : ${countDel - count}`
  })

  
  
  const deleteBtn = list.querySelector(".deleteBtn").addEventListener("click", function(){
    taskList.removeChild(list)
  
    totalTaskCount-=1
    if (checkMark.checked && count > 0) {
      count-=1
    }

    countDel-=1

    
    
      totalTask2.textContent =`Total Tasks : ${totalTaskCount}`
      taskDone2.textContent = `Task Completed : ${count}`
      taskLeft2.textContent = `Task Remaining : ${countDel - count}`
      
      totalTask.textContent =`Total Tasks : ${totalTaskCount}`
      taskDone.textContent = `Task Completed : ${count}`
      taskLeft.textContent =`Task Remaining : ${countDel - count}`
      const checkMark2 = list.querySelectorAll(".checkbox")
        if (checkMark2.checked) {
          taskLeft.textContent = `Task Remaining : ${countDel}`
          taskLeft2.textContent = `Task Remaining : ${countDel}`
        }
      if (totalTaskCount === 0) {
        bgImage.style.display= "block"
        imageText.style.display= "block"
      }
  })
})