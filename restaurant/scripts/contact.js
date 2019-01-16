// I am still unclear about how to do this validation.
// Currently, I think it is only validating the name field.
function validateForm() {
    var inpObj = document.getElementById("name");
    if (!inpObj.checkValidity()) {
      document.getElementById("nameLabel").innerHTML = inpObj.validationMessage;
    }
  }
