var input = document.getElementById("input");

// task to be added
var todoTask;

var id = 0;

var todoList = document.getElementById("todo-list");

var remove = document.getElementsByTagName("button");

// adding in the todo-list
var add = document
  .getElementById("add")
  .addEventListener("click", function () {
      todoTask = input.value;

    if (todoTask != "") {
      var li = document.createElement("li");
      li.setAttribute("class", id);

      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", id);
      newDiv.innerHTML = `<input type="checkbox"/>   ${todoTask}
      <button class=${id}> X</button>      
      `;
      li.appendChild(newDiv);
      todoList.appendChild(li);

      id++;
    }
  });

var nodeId;

todoList.addEventListener("click", () => {
  for (let i = 1; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      divId = remove[i].classList.value;
      nodeId = findNodeId(divId);
    });
  }
  todoList.removeChild(todoList.childNodes[nodeId]);
  nodeId = 10000000;
});

findNodeId = (divId) => {
  var liArr = document.getElementsByTagName("li");
  for (let i = 0; i < liArr.length; i++) {
    if (divId == liArr[i].classList.value) return i;
  }
};
