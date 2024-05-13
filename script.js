
const blockFloors = {
  "1: Main Guardhouse": [],
  "2: Arts Block": ["Ground Floor (Main Office)", "First Floor (Primary music)","Second Floor (Secondary art)", "Third Floor (Secondary music)", "Fourth Floor (Secondary drama)", "Fifth Floor (Secondary DT)", "Sixth Floor (Finance office)"],
  "3: Sports Field": [],
  "4: Primary Block": ["Ground Floor (Y1 and Y2)", "First Floor (Primary hall + library)","Second Floor (Y3 and Y4)", "Third Floor (Y5 and Y6)"],
  "5: Adventure Playground": [],
  "6: Under Cover Basketball Court": [],
  "7: Centre Block": ["Ground Floor", "First Floor"],
  "8: Swimming Pool": [],
  "Secondary Block": ["Basement Floor (B)", "Lower Floor (L)", "Ground Floor (G)", "First Floor (F)", "Second Floor (S)"],
  "Drop-off & Pick-up Zone": [],
};


function generateBlockButtons() {
  const blockButtonsContainer = document.getElementById('block-buttons');
  blockButtonsContainer.innerHTML = ''; 

  for (const block in blockFloors) {
    const button = document.createElement('button');
    button.textContent = block;
    button.addEventListener('click', () => selectBlock(block));
    blockButtonsContainer.appendChild(button);
  }
}


function generateFloorButtons(block) {
  const floorButtonsContainer = document.getElementById('floor-buttons');
  floorButtonsContainer.innerHTML = ''; 

  const floors = blockFloors[block];
  if (floors && floors.length > 0) {
    for (const floor of floors) {
      const button = document.createElement('button');
      button.textContent = floor;
      button.addEventListener('click', () => changeFloor(floor));
      floorButtonsContainer.appendChild(button);
    }
  } else {
    const noFloorMessage = document.createElement('p');
    noFloorMessage.textContent = "No floors available for this block.";
    floorButtonsContainer.appendChild(noFloorMessage);
  }
}

function selectBlock(block) {
  generateFloorButtons(block);
}

function changeFloor(floor) {
  const currentMap = document.getElementById('current-map');
  currentMap.src = `${floor}_map.png`;
}


generateBlockButtons();
