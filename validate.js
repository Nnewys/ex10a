// Form validation function
function validateForm() {
	// ตรวจสอบว่าได้เลือกประเภทจักรยานหรือไม่
	let bikeTypeSelected = document.querySelector('input[name="btypeRad"]:checked');
	if (!bikeTypeSelected) {
	  showAlert("Please select a bike type.");
	  return false;
	}
  
	// ตรวจสอบว่าได้กรอกข้อมูลความสูงหรือไม่
	let h = (document.getElementById("myHeight").value).trim();
	if (!h) {
	  showAlert("Please enter your height.");
	  document.getElementById("myHeight").focus();
	  return false;
	} else if (isNaN(h) || h < 1 || h > 200) {
	  showAlert("Height must be a number between 1 and 200 cm.");
	  document.getElementById("myHeight").focus();
	  return false;
	}
  
	// ตรวจสอบว่าได้กรอกข้อมูล inseam หรือไม่
	let i = (document.getElementById("myInseam").value).trim();
	if (!i) {
	  showAlert("Please enter your inseam.");
	  document.getElementById("myInseam").focus();
	  return false;
	} else if (isNaN(i) || i < 1 || i > 100) {
	  showAlert("Inseam must be a number between 1 and 100 cm.");
	  document.getElementById("myInseam").focus();
	  return false;
	}
  
	// คำนวณขนาดจักรยาน
	let size = sizeCalculate();
  
	// แสดงผลลัพธ์ใน modal และการแจ้งเตือน
	showAlert("Bike size based on your height and inseam is: " + size);
  
	return false; // Prevent form submission (page reload)
  }
  
  // Function to show alert with the result
  function showAlert(message) {
	alert(message); // Simple browser alert
  }