document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var formData = new FormData(form);
    // output as an object
    console.log(Object.fromEntries(formData));

  });