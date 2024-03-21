function validate(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username"
        return false;

    }
else if(document.formfill.Username.value.length<=6){
    document.getElementById("result").innerHTML="Atleast six letters"
return false;
}
else if(document.formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter your Email"
    return false;

}
else if(document.formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter your Password"
    return false;

}
else if(document.formfill.cPassword.value!=document.formfill.Password.value){
    document.getElementById("result").innerHTML="Password Does not match"
    return false;

}
else if(document.formfill.cPassword.value==""){
    document.getElementById("result").innerHTML="Enter your confirm Password"
    return false;

}
else if(document.formfill.Password.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6-Digit"
    return false;


}
else if(document.formfill.Password.value!=document.formfill.cPassword.value){
    popup.classList.add("open-slide")
    return false;
}
}
var popup=document.getElementById('popup');
var swiper = new Swiper(".home slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let videoBtn = document.querySelectorAll('.vid-btn');
  videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });

  });

