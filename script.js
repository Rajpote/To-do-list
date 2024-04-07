const push = document.getElementById("push");
const input = document.querySelector("#newtask input");
const tasks = document.getElementById("tasks");

push.onclick = function () {
   if (input.value.length == 0) {
      alert("PleaseEnter The Task");
   } else {
      tasks.innerHTML += `<div class="task"><span id="taskname">${input.value}</span>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
      </>`;
      let currentTasks = document.querySelectorAll(".delete");
      for (let i = 0; i < currentTasks.length; i++) {
         currentTasks[i].onclick = function () {
            this.parentNode.remove();
         };
      }
      let task = document.querySelectorAll(".task");
      for (let i = 0; i < task.length; i++) {
         task[i].onclick = function () {
            this.classList.toggle("completed");
         };
      }
      input.value = "";
   }
};
