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
	  alert("Invalid value for height!");
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
	  alert("Invalid value for inseam!");
	  document.getElementById("myInseam").focus();
	  return false;
	}
  
	// ถ้าผ่านการตรวจสอบทั้งหมด คำนวณขนาดจักรยาน
	let size = sizeCalculate();
	alert("Bike size based on your height and inseam is " + size);
	return false; // จะไม่ทำการ submit ฟอร์มเพื่อไม่ให้หน้าเว็บรีเฟรช
  }