window.addEventListener("DOMContentLoaded", init);
	function init(){
		document.getElementById("btnAddTask").addEventListener("click", onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);

		//load existing tasks from storage on page load
		for(var i=0; i<window.localStorage.length; i++){
			var taskId = window.localStorage.key(i);
			var taskName = window.localStorage.getItem(taskId);
			addTaskToList(taskId, taskName);
		}
	}
	function onBtnAddTaskClick(){
		var newId = new Date().valueOf().toString();
		var newTask = document.getElementById("txtTask").value;

		window.localStorage.setItem(newId, newTask);
		addTaskToList(newId, newTask);
	}

	function addTaskToList(newId, newTask){
		var newTaskItem = document.createEelment("li");
		newTaskItem.setAttribute("task-id",newId);
		newTaskItem.innerHTML = newTask;
		newTaskItem.addEventListener("click", onTaskItemClick);
		document.getElementById("olTaskList").appendChild(newTaskItem);
	}

	function onTaskItemClick(){
		this.classList.toggle("completed");
	}
	function onBtnRemoveCompletedClick(){
		var allTaskItems = document.getElementById("olTaskList").children;
		for(var i=allTaskItems.length-1; i>=0; i--){
			var taskItem = allTaskItems[i];
			if (taskItem.classList.contains("completed")){
				var taskId = taskItem.getAttribute("task-id");
				window.localStorage.removeItem(taskId);
				taskItem.remove();
			}
		}
	}