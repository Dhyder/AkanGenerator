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

  //this code validates the user's year input
let contemporaryDate = new Date();
let contemporaryYear = contemporaryDate.getFullYear();
function yearValidation(){
  let year = document.getElementById('box1').value;
  if (year < 1899 || year > contemporaryYear) {
    alert("The Year You Entered Is not Valid");
    return false;
  }
}

//this code validates the user's day input
function dayValidation(){
    let day = document.getElementById('box2').value;
    if (day < 1 || day > 31) {
      alert("The Day You Entered Is not Valid");
      return false;
    }
  }

  //this code calculates input from the user and generates an Akan name by passing input through the formula : (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
function generateName(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let cc = parseInt(document.getElementById("box4").value.slice(0, 2));let yy = parseInt(document.getElementById("box1").value.slice(2, 4));let dd = parseInt(document.getElementById("box2").value);let mm = parseInt(document.getElementById("box3").value);
    let day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    let akanGen = days[day.toFixed()];
    let gender = parseInt(document.getElementById("gender").value);
    if (gender == 2) {
      if (akanGen === 'Sunday') {
        document.getElementById("output").value = " You were born on Sunday hence your Akan name will be " + maleAkanNames[0];
        return true;
      }else if (akanGen === 'Monday') {
        document.getElementById("output").value = " You were born on Monday hence your Akan name is " + maleAkanNames[1];
        return true;
      }else if (akanGen === 'Tuesday') {
        document.getElementById("output").value = " As a guy born on a Tuesday your Akan name is " + maleAkanNames[2];
        return true;
      }else if (akanGen === 'Wednesday') {
        document.getElementById("output").value = " You were born on Wednesday hence your Akan name is " + maleAkanNames[3];
        return true;
      }else if (akanGen === 'Thursday') {
        document.getElementById("output").value = " You were born on a Thursday hence your Akan name would be " + maleAkanNames[4];
        return true;
      }else if (akanGen === 'Friday') {
        document.getElementById("output").value = " You were born on a Friday hence your amazing Akan name shall be " + maleAkanNames[5];
        return true;
      }else {
        document.getElementById("output").value = " You were born on Saturday hence your Akan name is " + maleAkanNames[6];
        return true;
      }
    }
      if (gender == 3) {
        if (akanGen === 'Sunday') {
          document.getElementById("output").value = " You were born on a Sunday hence your Akan name will be " + femaleAkanNames[0];
          return true;
        }else if (akanGen === 'Monday') {
          document.getElementById("output").value = " You were born on Monday hence your Akan name is " + femaleAkanNames[1];
          return true;
        }else if (akanGen === 'Tuesday') {
          document.getElementById("output").value = " You were born on Tuesday hence your Akan name will be " + femaleAkanNames[2];
          return true;
        }else if (akanGen === 'Wednesday') {
          document.getElementById("output").value = " As a lady born on a Wednesday your Akan name will be " + femaleAkanNames[3];
          return true;
        }else if (akanGen === 'Thursday') {
          document.getElementById("output").value = " You were born on a Thursday hence your Akan alias would be " + femaleAkanNames[4];
          return true;
        }else if (akanGen === 'Friday') {
          document.getElementById("output").value = " You were born on a Friday hence your beautiful Akan name shall be " + femaleAkanNames[5];
          return true;
        }else {
          document.getElementById("output").value = " You were born on a Saturday hence your Akan name is " + femaleAkanNames[6];
          return true;
        }
      }
  }