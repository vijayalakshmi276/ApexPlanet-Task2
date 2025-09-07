// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  });
  
  // To-Do List Functionality
  document.getElementById("addTaskBtn").addEventListener("click", function() {
    let input = document.getElementById("todoInput");
    let taskText = input.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    
    let li = document.createElement("li");
    li.textContent = taskText;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      li.remove();
    };
    
    li.appendChild(deleteBtn);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  });
  
