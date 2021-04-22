editProfile = document.querySelectorAll(".nav")[0];
profileStats = document.querySelectorAll(".nav")[1];
profileHistory = document.querySelectorAll(".nav")[2];

editProfileContent = document.querySelector(".config");
profileStatsContent = document.querySelector(".stats");
profileHistoryContent = document.querySelector(".history");

editProfile.addEventListener("click", function(){
    editProfile.classList.add("n-active");
    profileStats.classList.remove("n-active");
    profileHistory.classList.remove("n-active");
    
    editProfileContent.classList.add("active");
    profileStatsContent.classList.remove("active");
    profileHistoryContent.classList.remove("active");
})

profileStats.addEventListener("click", function(){
    profileStats.classList.add("n-active");
    editProfile.classList.remove("n-active");
    profileHistory.classList.remove("n-active");

    profileStatsContent.classList.add("active");
    editProfileContent.classList.remove("active");
    profileHistoryContent.classList.remove("active");
})

profileHistory.addEventListener("click", function(){
    profileHistory.classList.add("n-active");
    editProfile.classList.remove("n-active");
    profileStats.classList.remove("n-active");

    profileHistoryContent.classList.add("active");
    profileStatsContent.classList.remove("active");
    editProfileContent.classList.remove("active");
})