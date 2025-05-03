function validateForm() {
	// ตรวจสอบว่าได้เลือกประเภทจักรยานหรือไม่
	let bikeTypeSelected = document.querySelector('input[name="btypeRad"]:checked');
	if (!bikeTypeSelected) {
	  alert("Please select a bike type.");
	  return false;
	}
  
	// ตรวจสอบว่าได้กรอกข้อมูลความสูงหรือไม่
	let h = (document.getElementById("myHeight").value).trim();
	if (!h) {
	  alert("Please enter your height.");
	  document.getElementById("myHeight").focus();
	  return false;
	} else if (isNaN(h)) {
	  alert("Height must be a number.");
	  document.getElementById("myHeight").focus();
	  return false;
	} else if (h < 1 || h > 200) {  // ตรวจสอบว่าความสูงอยู่ในช่วง 1 ถึง 200
	  alert("Height must be between 1 and 200 cm.");
	  document.getElementById("myHeight").focus();
	  return false;
	}
  
	// ตรวจสอบว่าได้กรอกข้อมูล inseam หรือไม่
	let i = (document.getElementById("myInseam").value).trim();
	if (!i) {
	  alert("Please enter your inseam.");
	  document.getElementById("myInseam").focus();
	  return false;
	} else if (isNaN(i)) {
	  alert("Inseam must be a number.");
	  document.getElementById("myInseam").focus();
	  return false;
	} else if (i < 1 || i > 100) {  // ตรวจสอบว่าความยาวช่วงขาอยู่ในช่วง 1 ถึง 100
	  alert("Inseam must be between 1 and 100 cm.");
	  document.getElementById("myInseam").focus();
	  return false;
	}
  
	// ถ้าผ่านการตรวจสอบทั้งหมด คำนวณขนาดจักรยาน
	let size = sizeCalculate();
	alert("Bike size based on your height and inseam is " + size);
	return false; // จะไม่ทำการ submit ฟอร์มเพื่อไม่ให้หน้าเว็บรีเฟรช
  }