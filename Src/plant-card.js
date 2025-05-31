window.addEventListener('load', fetchPlants);

function fetchPlants() {
  fetch('fetchPlants.php')
    .then(response => response.json())
    .then(plants => {
      const allPlantsContainer = document.getElementById("allPlants");
      allPlantsContainer.innerHTML = ""; 

      plants.forEach((plant) => {
        const plantCard = `
          <div class="plant-card" 
               data-plant-id="${plant.plant_id}" 
               data-category="${plant.category}" 
               style="background-image: url('${plant.image}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
            <div>
              <h3 class="plantTitle">${plant.name}</h3>
              <p class="plantDesc">${plant.description}</p>
            </div>
            <div class="plantCat"><p>${plant.category}</p></div>   
          </div>
        `;
        allPlantsContainer.innerHTML += plantCard;
      });
      
      document.querySelectorAll(".plant-card").forEach((card) => {
        card.addEventListener("click", () => {
          const plantId = card.dataset.plantId;
          window.open(`modal.php?id=${plantId}`, "_blank");
        });
      });
    })
    .catch(error => console.error('Error fetching plants:', error));
}

document.getElementById('addPlantForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formData = new FormData(this); 
    
    fetch('addPlant.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchPlants(); 
                this.reset(); 
            } else {
                alert('Error adding plant: ' + data.message); 
            }
        })
        .catch(error => console.error('Error:', error));
});

document.querySelectorAll('.list__button').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.dataset.category;
        filterPlantsByCategory(category);
    });
});

function filterPlantsByCategory(category) {
    const allPlants = document.querySelectorAll('.plant-card');
    allPlants.forEach(plant => {
        if (category === 'all' || plant.dataset.category === category) {
            plant.style.display = 'flex'; 
        } else {
            plant.style.display = 'none'; 
        }
    });

}

const search = document.querySelector(".search-input");

search.addEventListener("input", () => {
  const inputTxt = search.value.toLowerCase(); 
  const plantCards = document.querySelectorAll(".plant-card"); 

  if (inputTxt !== "") {
    plantCards.forEach((plantCard) => {
      const plantTitle = plantCard.querySelector(".plantTitle");
      const plantTitleTxt = plantTitle.textContent.toLowerCase(); 

      if (!plantTitleTxt.startsWith(inputTxt)) {
        plantCard.style.display = "none"; 
      } else {
        plantCard.style.display = "flex"; 
      }
    });
  } else {
    
    plantCards.forEach((plantCard) => {
      plantCard.style.display = "flex";
    });
  }
});