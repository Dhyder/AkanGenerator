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

  //this code alerts user to enter month input if left blank
function insertMonth() {
    let month = document.getElementById("box3").value;
    if (month == "0") {
      alert("Please Select Month");
      return false;
    }
  }

  //this code alerts user to enter day input if left blank
function insertDay() {
    let day = document.getElementById("box2").value;
    if (day == "") {
      alert("Please Insert Birthday");
      return false;
    }
  }

  