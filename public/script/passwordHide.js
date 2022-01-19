// function (eye, passField) {

// document.getElementById("eye").addEventListener("click", function () {
//    const passNow = document.getElementById(passField);

//    if (passNow.type == "password") {
//       passNow.type = "text";
//       this.classList.add("fa-eye-slash");
//       this.classList.remove("fa-eye");
//    } else {
//       passNow.type = "password";
//       this.classList.remove("fa-eye-slash");
//       this.classList.add("fa-eye");
//    }
// });

function passShow(eye, passField) {
   document.getElementById(eye).addEventListener("click", function () {
      const passNow = document.getElementById(passField);

      if (passNow.type == "password") {
         passNow.type = "text";
         this.classList.add("fa-eye-slash");
         this.classList.remove("fa-eye");
      } else {
         passNow.type = "password";
         this.classList.remove("fa-eye-slash");
         this.classList.add("fa-eye");
      }
   });
}
// }

passShow("eye", "passField");
passShow("eye2", "passField2");
// passwordHide("eye2");
