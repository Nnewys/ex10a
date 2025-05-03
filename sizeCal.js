function sizeCalculate() {
   let t = document.querySelector('input[name="btypeRad"]:checked').value; // 1 หรือ 2
   let h = (document.getElementById("myHeight").value).trim();
   let i = (document.getElementById("myInseam").value).trim();
   let size;

   // ตรวจสอบค่า Height และ Inseam ว่ามีค่าเป็นตัวเลขหรือไม่
   if (isNaN(h) || isNaN(i)) {
     return 'Please enter valid numbers for height and inseam';
   }

   if (t == "2") { // Road bike (เลือก 2)
     if (h >= 155 && h <= 163) {
       size = '50';
     } else if (h >= 164 && h <= 169) {
       if (i >= 74 && i <= 77) {
         size = '52';
       } else if (i > 77) {
         size = '54';
       } else {
         size = '50';
       }
     } else if (h >= 170 && h <= 179) {
       if (i >= 78 && i <= 82) {
         size = '54';
       } else if (i > 82) {
         size = '56';
       } else {
         size = '52';
       }
     } else if (h >= 180) {
       if (i >= 78) {
         size = '56';
       } else {
         size = '54';
       }
     } else {
       size = 'N/A';
     }
   } else { // Mountain bike (เลือก 1)
     if (h >= 155 && h <= 163) {
       size = 'S';
     } else if (h >= 164 && h <= 169) {
       size = 'M';
     } else if (h >= 170 && h <= 179) {
       size = 'L';
     } else if (h >= 180) {
       size = 'XL';
     } else {
       size = 'N/A';
     }
   }

   return size;
}
