document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".list__button[data-target]");  
  const flexGroups = document.querySelectorAll(".flex-group");
  
  flexGroups.forEach((group) => {
    group.style.display = "none";
  });
  
  if (flexGroups.length > 0) {
    flexGroups[0].style.display = "grid";
  }
  
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("data-target");
      
      flexGroups.forEach((group) => {
        group.style.display = "none";
      });
      
      const targetGroup = document.getElementById(targetId);
      if (targetGroup) {
        targetGroup.style.display = "flex";
      }
    });
  });
});
