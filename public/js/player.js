editProfile = document.querySelectorAll(".nav")[0];
profileStats = document.querySelectorAll(".nav")[1];
editProfileContent = document.querySelector(".config");
profileStatsContent = document.querySelector(".stats");

editProfile.addEventListener("click", function(){
    editProfile.classList.add("n-active");
    profileStats.classList.remove("n-active");
    editProfileContent.classList.add("active");
    profileStatsContent.classList.remove("active");
})

profileStats.addEventListener("click", function(){
    profileStats.classList.add("n-active");
    editProfile.classList.remove("n-active");
    profileStatsContent.classList.add("active");
    editProfileContent.classList.remove("active");
})