document.addEventListener("DOMContentLoaded", function () {  
  const urlParams = new URLSearchParams(window.location.search);
  const plantId = urlParams.get("id");

  if (plantId) {
    fetch(`fetchPlantDetails.php?plant_id=${plantId}`)
      .then((response) => response.json())
      .then((plantDetails) => {
        
        document.getElementById("plant-name").textContent = plantDetails.name;
        document.getElementById("plant-category").textContent =
          plantDetails.category;
        document.getElementById("plant-description").textContent =
          plantDetails.description;

        const imgContainer = document.querySelector(".plant-details__img");
        imgContainer.style.backgroundImage = `url('${plantDetails.image}')`;
        
        document.getElementById("sunlight").textContent =
          plantDetails.sunlight || "N/A";
        document.getElementById("maturityTime").textContent =
          plantDetails.maturityTime || "N/A";
        document.getElementById("watering").textContent =
          plantDetails.watering || "N/A";
        document.getElementById("soil").textContent =
          plantDetails.soil || "N/A";
        document.getElementById("soilPH").textContent =
          plantDetails.soilPH || "N/A";
        document.getElementById("problems").textContent =
          plantDetails.problems || "N/A";
        document.getElementById("uses").textContent =
          plantDetails.uses || "N/A";
        document.getElementById("temperature").textContent =
          plantDetails.temperature || "N/A";
        document.getElementById("pestsDeseas").textContent =
          plantDetails.pestsDeseas || "N/A";
      })
  }
});
