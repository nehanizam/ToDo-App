var list = document.getElementById("list");
var main = document.getElementById("main");
function addTask(){
    var task = document.getElementById("task");
    //create task list
    var li = document.createElement("li");
    li.setAttribute("class","lis");
    var liText = document.createTextNode(task.value);
    li.appendChild(liText);
    list.appendChild(li);
    main.appendChild(list);
    //create delete button
    var delbtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delbtn.setAttribute("class","dbtn");
    delbtn.setAttribute("onclick","deleteTask(this)");
    delbtn.appendChild(delText);
    li.appendChild(delbtn);
    //create edit button
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editbtn.setAttribute("class","ebtn");
    editbtn.setAttribute("onclick","editTask(this)");
    editbtn.appendChild(editText);
    li.appendChild(editbtn);


    task.value = "";
}
function deleteTask(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = "";
}
function editTask(e){
    var val = prompt("Edit Task",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;

}