const diagnosisData = {
  fruitsVegetables: {
    locations: {
      leaves: {
        symptoms: {
          yellowing: {
            description: "Yellowing leaves, especially older ones",
            diagnosis: "Likely Overwatering.",
            treatment:
              "Apply balanced fertilizer, check soil drainage, and reduce watering frequency if soil is soggy.",
          },
          spots: {
            description: "Brown or black spots on leaves",
            diagnosis: "Fungal infection (possibly early blight or leaf spot).",
            treatment:
              "Remove affected leaves, improve air circulation, and apply fungicide if severe. Avoid overhead watering.",
          },
          curling: {
            description: "Leaves curling upward or downward",
            diagnosis:
              "Could be viral infection, pest damage, or water stress.",
            treatment:
              "Check for aphids or other pests underneath leaves. Ensure consistent watering and test for viruses if problem persists.",
          },
        },
      },
      fruit: {
        symptoms: {
          blossomEndRot: {
            description: "Dark, sunken area on blossom end of fruit",
            diagnosis: "Blossom end rot (calcium deficiency).",
            treatment:
              "Maintain even soil moisture, add calcium supplement, and ensure proper pH (6.0-6.5).",
          },
          cracks: {
            description: "Fruit cracking or splitting",
            diagnosis: "Inconsistent watering.",
            treatment:
              "Water regularly to maintain even soil moisture. Mulch to help retain moisture.",
          },
          discoloration: {
            description: "Uneven ripening or strange coloration",
            diagnosis: "Possible sunscald or nutrient imbalance.",
            treatment:
              "Provide shade during hottest part of day, test soil and adjust fertilization.",
          },
        },
      },
      stems: {
        symptoms: {
          lesions: {
            description: "Dark lesions or cankers on stems",
            diagnosis: "Bacterial or fungal stem disease.",
            treatment:
              "Prune affected areas, disinfect tools, and apply appropriate bactericide/fungicide.",
          },
          weakness: {
            description: "Weak, spindly stems",
            diagnosis: "Insufficient light.",
            treatment:
              "Provide more sunlight if possible and apply balanced fertilizer.",
          },
        },
      },
    },
  },
  treesShrubs: {
    locations: {
      leaves: {
        symptoms: {
          yellowing: {
            description: "Yellow leaves, possibly with green veins",
            diagnosis: "Iron chlorosis (common in alkaline soils).",
            treatment:
              "Apply chelated iron, lower soil pH with sulfur if needed, and ensure good drainage.",
          },
          spots: {
            description: "Leaf spots with defined edges",
            diagnosis: "Fungal leaf spot disease.",
            treatment:
              "Rake and dispose of fallen leaves, apply fungicide in severe cases, improve air circulation.",
          },
          prematureDrop: {
            description: "Leaves dropping before fall",
            diagnosis: "Drought stress, root problems, or disease.",
            treatment:
              "Deep water during dry periods, check for root girdling or damage, inspect for other symptoms.",
          },
        },
      },
      bark: {
        symptoms: {
          cracks: {
            description: "Vertical cracks in bark",
            diagnosis: "Frost cracks or sunscald.",
            treatment:
              "Wrap young tree trunks in winter, avoid planting thin-barked trees on south/west exposures.",
          },
          holes: {
            description: "Small holes with sawdust",
            diagnosis: "Borers (insect larvae tunneling under bark).",
            treatment:
              "Remove heavily infested branches, apply appropriate insecticide at correct timing for borer species.",
          },
        },
      },
      overall: {
        symptoms: {
          dieback: {
            description: "Branches dying from tips back",
            diagnosis: "Possible root rot or vascular disease.",
            treatment: "Remove affected roots, Improve drainage, avoid overwatering, and consult arborist for severe cases.",
          },
          stunted: {
            description: "Overall stunted growth",
            diagnosis: "Root problems or soil compaction.",
            treatment:
              "Aerate soil, check for girdling roots, apply mulch (but not against trunk).",
          },
        },
      },
    },
  },
  herbs: {
    locations: {
      leaves: {
        symptoms: {
          powdery: {
            description: "White powdery coating on leaves",
            diagnosis: "Powdery mildew.",
            treatment:
              "Improve air circulation, avoid overhead watering, apply neem oil or baking soda solution.",
          },
          yellowing: {
            description: "Yellowing lower leaves",
            diagnosis: "Overwatering.",
            treatment:
              "Let soil dry between waterings, apply diluted fish emulsion or compost tea.",
          },
          holes: {
            description: "Chewed leaves or holes",
            diagnosis: "Caterpillars, slugs, or beetles.",
            treatment:
              "Handpick pests at night, use organic slug bait, or apply BT for caterpillars.",
          },
        },
      },
      stems: {
        symptoms: {
          leggy: {
            description: "Long, weak stems with few leaves",
            diagnosis: "Insufficient light.",
            treatment:
              "Move to sunnier location or provide grow lights. Pinch back to encourage bushiness.",
          },
          rot: {
            description: "Soft, mushy stems at base",
            diagnosis: "Stem rot from overwatering.",
            treatment:
              "Improve drainage, let soil dry, propagate healthy cuttings if possible.",
          },
        },
      },
    },
  },
  floweringPlants: {
    locations: {
      flowers: {
        symptoms: {
          budDrop: {
            description: "Buds forming but dropping before opening",
            diagnosis:
              "Environmental stress (often water or temperature fluctuations).",
            treatment:
              "Maintain consistent moisture and temperature. Avoid moving plant during bud formation.",
          },
          distortion: {
            description: "Misshapen or discolored flowers",
            diagnosis: "Thrips or viral infection.",
            treatment:
              "Remove affected flowers, apply insecticidal soap for thrips, discard plant if virus is suspected.",
          },
        },
      },
      leaves: {
        symptoms: {
          spots: {
            description: "Black or brown leaf spots",
            diagnosis: "Fungal or bacterial leaf spot.",
            treatment:
              "Remove affected leaves, avoid overhead watering, improve air circulation.",
          },
          yellowing: {
            description: "Yellow leaves with green veins",
            diagnosis: "Iron deficiency (common in alkaline soils).",
            treatment:
              "Apply chelated iron, lower soil pH with sulfur if needed.",
          },
        },
      },
    },
  },
  indoorPlants: {
    locations: {
      leaves: {
        symptoms: {
          brownTips: {
            description: "Brown leaf tips",
            diagnosis: "Low humidity, fluoride in water, or salt buildup.",
            treatment:
              "Use distilled water, flush soil monthly, increase humidity with pebble tray or humidifier.",
          },
          yellowing: {
            description: "Yellowing leaves, especially lower ones",
            diagnosis: "Overwatering or natural aging.",
            treatment:
              "Let soil dry between waterings. If only bottom leaves yellow occasionally, it's likely normal.",
          },
          dropping: {
            description: "Sudden leaf drop",
            diagnosis: "Temperature shock or draft exposure.",
            treatment:
              "Move plant away from vents/drafts, maintain consistent temperature.",
          },
        },
      },
      overall: {
        symptoms: {
          noGrowth: {
            description: "No new growth during growing season",
            diagnosis: "Needs repotting or fertilization.",
            treatment:
              "Check if rootbound, repot if necessary. Apply balanced houseplant fertilizer at half strength.",
          },
          pests: {
            description: "Sticky residue or visible insects",
            diagnosis: "Scale, mealybugs, or spider mites.",
            treatment:
              "Wipe leaves with soapy water, use insecticidal soap or neem oil. Isolate from other plants.",
          },
        },
      },
    },
  },
};

let currentDiagnosis = {
  category: null,
  plantName: "",
  location: null,
  symptom: null,
  description: "",
  environment: {
    light: "",
    watering: "",
    pests: "",
    temperature: "",
  },
};

const plantCategorySelect = document.getElementById("plantCategory");
const symptomLocationSelect = document.getElementById("symptomLocation");
const symptomTypeSelect = document.getElementById("symptomType");

plantCategorySelect.addEventListener("change", updateSymptomLocations);
symptomLocationSelect.addEventListener("change", updateSymptomTypes);

function updateSymptomLocations() {
  currentDiagnosis.category = plantCategorySelect.value;
  symptomLocationSelect.innerHTML =
    '<option value="">-- Select plant part --</option>';

  if (currentDiagnosis.category && diagnosisData[currentDiagnosis.category]) {
    Object.keys(diagnosisData[currentDiagnosis.category].locations).forEach(
      (location) => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent =
          location.charAt(0).toUpperCase() + location.slice(1);
        symptomLocationSelect.appendChild(option);
      }
    );
  }
}

function updateSymptomTypes() {
  const category = currentDiagnosis.category;
  const location = symptomLocationSelect.value;
  symptomTypeSelect.innerHTML =
    '<option value="">-- Select symptom --</option>';

  if (category && location && diagnosisData[category]?.locations[location]) {
    Object.keys(diagnosisData[category].locations[location].symptoms).forEach(
      (symptom) => {
        const option = document.createElement("option");
        option.value = symptom;
        option.textContent =
          diagnosisData[category].locations[location].symptoms[
            symptom
          ].description;
        symptomTypeSelect.appendChild(option);
      }
    );
  }
}

function nextStep(current, next) {
  document.getElementById(`step${current}`).classList.remove("active");
  document.getElementById(`step${next}`).classList.add("active");
  updateProgressBar(next);
}

function prevStep(current, prev) {
  document.getElementById(`step${current}`).classList.remove("active");
  document.getElementById(`step${prev}`).classList.add("active");
  updateProgressBar(prev);
}

function updateProgressBar(step) {
  const percentage = (step / 3) * 100;
  document.getElementById("progressBar").style.width = `${percentage}%`;
}

function diagnosePlant() {
  

  currentDiagnosis.plantName = document
    .getElementById("plant-name")
    .value.trim();
  currentDiagnosis.location = symptomLocationSelect.value;
  currentDiagnosis.symptom = symptomTypeSelect.value;

  currentDiagnosis.environment = {
    light: document.getElementById("lightConditions").value,
    watering: document.getElementById("watering").value,
    pests: document.getElementById("pests").value,
    temperature: document.getElementById("temperature").value,
  };

  
  let diagnosis = "Unknown Issue";
  let treatment = "General Care: Check watering, light, and pest presence.";
  let symptomData = null;

  if (
    currentDiagnosis.category &&
    currentDiagnosis.location &&
    currentDiagnosis.symptom
  ) {
    symptomData =
      diagnosisData[currentDiagnosis.category]?.locations[
        currentDiagnosis.location
      ]?.symptoms[currentDiagnosis.symptom];

    if (symptomData) {
      diagnosis = symptomData.diagnosis;
      treatment = symptomData.treatment;
    }
  }

  
  const envFactors = [];

  
  if (currentDiagnosis.environment.pests === "visible") {
    envFactors.push(
      "🚨 Immediate Action: Isolate plant and treat with neem oil every 3 days for 2 weeks"
    );
  }
  if (currentDiagnosis.environment.pests === "signs") {
    envFactors.push(
      "🔍 Monitor pests: Use yellow sticky traps and inspect daily for pest activity"
    );
  }

  
  if (currentDiagnosis.environment.temperature === "hot") {
    envFactors.push(
      "🌡️ Cooling: Provide afternoon shade and increase watering frequency"
    );
  }
  if (currentDiagnosis.environment.temperature === "cold") {
    envFactors.push("❄️ Warming: Move to warmer location or use heating mat");
  }

  
  if (currentDiagnosis.environment.watering === "daily") {
    envFactors.push(
      "💧 Reduce watering: Allow top 2 inches of soil to dry between waterings"
    );
  }
  if (
    currentDiagnosis.environment.watering === "whenDry" ||
    symptomData?.diagnosis.includes("deficiency")
  ) {
    envFactors.push(
      "🚰 Water consistency: Maintain regular watering schedule for nutrient uptake"
    );
  }

  
  if (
    currentDiagnosis.environment.light === "lowLight" ||
    symptomData?.diagnosis.includes("light")
  ) {
    envFactors.push(
      "🔆 Increase light: Gradually expose to brighter indirect light"
    );
  }

  
  const plantNameDisplay = currentDiagnosis.plantName
    ? (document.getElementById(
        "plantName"
      ).textContent = `${currentDiagnosis.plantName}`)
    : "";
  document.getElementById("plant-category").textContent =
    plantCategory.options[plantCategory.selectedIndex].text;
  document.getElementById("diagnosisTitle").textContent = `${diagnosis}`;
  document.getElementById("treatment-advice").textContent = `${treatment}`;
  document.getElementById("treatmentAdvice").innerHTML =
    "Environmental Adjustments:<br> " + envFactors.join`<br>`;

  
  document
    .querySelectorAll(".step")
    .forEach((step) => step.classList.remove("active"));
  document.getElementById("finalResults").classList.remove("hidden");
  updateProgressBar(4);
}

function restartDiagnosis() {
  
  document.getElementById("plantCategory").value = "";
  document.getElementById("plant-name").value = "";
  document.getElementById("symptomLocation").innerHTML =
    '<option value="">-- Select plant part --</option>';
  document.getElementById("symptomType").innerHTML =
    '<option value="">-- Select symptom --</option>';
  document.getElementById("lightConditions").value = "";
  document.getElementById("watering").value = "";
  document.getElementById("pests").value = "";
  document.getElementById("temperature").value = "";

  
  currentDiagnosis = {
    category: null,
    plantName: "",
    location: null,
    symptom: null,
    description: "",
    environment: {
      light: "",
      watering: "",
      pests: "",
      temperature: "",
    },
  };

  
  document.getElementById("finalResults").classList.add("hidden");
  document.getElementById("step1").classList.add("active");
  updateProgressBar(1);
}
