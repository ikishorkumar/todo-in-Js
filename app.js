function addtodo() {
  let todolist = document.querySelector(".todolist");
  let textuinput = document.getElementById("todoinput");
  let text = textuinput.value;

  if (text) {
    let item = document.createElement("li");
    item.setAttribute("class", "todoitem");
    item.innerHTML = `<p>${text}</p>`;
    let btndiv = document.createElement("div");

    let btndelete = document.createElement("button");
    btndelete.setAttribute("class", "btndelete");
    btndelete.innerHTML = "Delete";

    let btnedit = document.createElement("button");
    btnedit.setAttribute("class", "btnedit");
    btnedit.innerHTML = "Edit";

    let btnmarked = document.createElement("button");
    btnmarked.setAttribute("class", "btnmarked");
    btnmarked.innerHTML = "mark";

    btndiv.append(btnedit);
    btndiv.append(btndelete);
    btndiv.append(btnmarked);
    item.appendChild(btndiv);

    textuinput.value = "";

    todolist.appendChild(item);

    btndelete.addEventListener("click", () => {
      item.remove();
    });

    btnedit.addEventListener("click", () => {
      item.innerHTML = `<p>${prompt("enter new value")}</p>`;
      item.appendChild(btndiv);
    });


    btnmarked.addEventListener("click", () => {
      item.classList.toggle("linet");
    });

  } 
  else {
    alert("Enter Task");
  }
}

document.querySelector("#Addbtn").addEventListener("click", () => addtodo());
