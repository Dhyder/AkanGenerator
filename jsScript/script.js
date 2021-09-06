//this code alerts user to enter gender input if left blank
function selectGender() {
    let gender = document.getElementById("gender").value;
    if (gender == "0") {
      alert("Please Select Gender");
      return false;
    }
  }

  //this code alerts user to enter century input if left blank
function insertCentury() {
    let century = document.getElementById("box4").value;
    if (century == "") {
      alert("Please Insert Birth Century");
      return false;
    }
  }

  //this code alerts user to enter year input if left blank
function insertYear() {
    let year = document.getElementById("box1").value;
    if (year == "") {
      alert("Please Insert Year");
      return false;
    }
  }
  