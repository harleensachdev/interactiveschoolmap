const blockFloors = {
  "Main Guardhouse": [],
  "Arts Block": ["Ground Floor (Main Office)", "First Floor (Primary music)", "Second Floor (Secondary art)", "Third Floor (Secondary music)", "Fourth Floor (Secondary drama)", "Fifth Floor (Secondary DT)", "Sixth Floor (Finance office)"],
  "Sports Field": [],
  "Primary Block": ["Ground Floor (Y1 and Y2)", "First Floor (Primary hall + library)", "Second Floor (Y3 and Y4)", "Third Floor (Y5 and Y6)"],
  "Adventure Playground": [],
  "Under Cover Basketball Court": [],
  "Centre Block": ["Ground Floor (Languages + Pool + Canteen + Courts)", "First Floor (Grand Hall + Sports Hall)", "Second Floor (Business + Computing)"],
  "Swimming Pool": [],
  "Secondary Block": ["Basement Floor (B)", "Lower Floor (L)","Ground Floor (G)", "First Floor (F)", "Second Floor (S)"],
  "Drop-off & Pick-up Zone": [],
};

let startPointBlock = ''; 
let destinationPointBlock = ''; 

function generateFloorButtons(block, containerId) {
  const floorButtonsContainer = document.getElementById(containerId);
  floorButtonsContainer.innerHTML = ''; 

  const floors = blockFloors[block];
  if (floors && floors.length > 0) {
    for (const floor of floors) {
      const button = document.createElement('button');
      button.textContent = floor;
      button.addEventListener('click', () => {
        changeFloor(floor)
      });
      floorButtonsContainer.appendChild(button);
    }
  } else {
    const noFloorMessage = document.createElement('p');
    noFloorMessage.textContent = "No floors available for this block.";
    floorButtonsContainer.appendChild(noFloorMessage);
  }
}

function generateBlockDropdown(blocks, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const select = document.createElement('select');
  select.id = containerId + '-dropdown';
  if (containerId === 'start-point-container') {
    select.innerHTML = '<option value="">Choose your starting block...</option>';

  } else{
    select.innerHTML = '<option value="">Choose your destination block...</option>';

  }
  

  blocks.forEach(block => {
    const option = document.createElement('option');
    option.textContent = block;
    option.value = block;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    const selectedBlock = select.value;
    if (containerId === 'start-point-container') {
      startPointBlock = selectedBlock;
      generateFloorButtons(selectedBlock, 'start-floor-buttons');

    } else if (containerId === 'destination-container') {
      destinationPointBlock = selectedBlock;
      generateFloorButtons(selectedBlock, 'destination-floor-buttons');

    }
  });

  container.appendChild(select);
}

function generateBlockButtons() {
  const blockButtonsContainer = document.getElementById('block-buttons');
  blockButtonsContainer.innerHTML = '';

  for (const block in blockFloors) {
    const button = document.createElement('button');
    button.textContent = block;
    button.addEventListener('click', () => {
      generateFloorButtons(block, 'floor-buttons');
    });
    blockButtonsContainer.appendChild(button);
  }
}

function changeFloor(floor) {
  const currentMap = document.getElementById('current-map');
  currentMap.style.width = "1000px"; 
  currentMap.style.height = "500px"; 
  currentMap.src = `${floor}_map.png`;

function displayInstructions(start, destination, floor) {



  alert(instructions);
  console.log(destination);
  console.log(instructions);
}
}

function findBlock() {
  const roomNumberInput = document.getElementById('room-number').value;

  let block = ""; 
  let floor = "";
    if (roomNumberInput.startsWith('G')) {
    block = "Secondary Block";
    floor = "Ground Floor (G)"; 
    alert("This is on the Ground Floor (Secondary Maths) in the Secondary Block. Press ok to be directed to the map of the floor");
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('F')) {
    block = "Secondary Block";
    floor = "First Floor (F)"; 
    alert("This is on the F Floor (Secondary English) in the Secondary Block. Press ok to be directed to the map of the floor");
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('S')) {
    block = "Secondary Block";
    floor = "Second Floor (S)"; 
    alert("This is on the S Floor (Secondary Humanities) in the Secondary Block. Press ok to be directed to the map of the floor");
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('L')) {
    block = "Secondary Block";
    floor = "Lower Floor (L)"; 
    alert("This is on the L Floor (Secondary Science) in the Secondary Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('B')) {
    block = "Secondary Block";
    floor = "Basement Floor (B)";
    alert("This is on the B Floor (Sixth Form Center) in the Secondary Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('M')) {
    block = "Centre Block";
    floor = "Ground Floor"; 
    alert("This is on the Ground Floor in the the Centre Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('C')) {
    block = "Centre Block";
    floor = "Second Floor"; 
    alert("This is on the Second Floor in the the Centre Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  } else if (roomNumberInput.startsWith('2')) {
    block = "Arts Block";
    floor = "Second Floor (Secondary art)";
    alert("This is on the Second Floor (Secondary art) in the the Arts Block. Press ok to be directed to the map of the floor.")
    changeFloor(floor);
  } 
  else if (roomNumberInput.startsWith('AS')) {
    block = "Arts Block";
    floor = "Second Floor (Secondary art)"; 
    alert("This is on the Second Floor (Secondary art) in the the Arts Block. Press ok to be directed to the map of the floor.")
    changeFloor(floor);
  }
  else if (roomNumberInput.startsWith('DT')) {
    block = "Arts Block";
    floor = "Fifth Floor (Secondary DT)"; 
    alert("This is on the Fifth Floor (Secondary DT) in the the Arts Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  }
  else if (roomNumberInput.startsWith('3')) {
    block = "Arts Block";
    floor = "Third Floor (Secondary music)"; 
    alert("This is on the Third Floor (Secondary music) in the the Arts Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  } 
  else if (roomNumberInput.startsWith('4')) {
    block = "Arts Block";
    floor = "Fourth Floor (Secondary drama)"; 
    alert("This is on the Fourth Floor (Secondary drama) in the the Arts Block. Press ok to be directed to the map of the floor")
    changeFloor(floor);
  } 
  
  else {
    alert("Invalid room number or room not found.");
  }
}

function navigate() {
  const instructionsContainer = document.getElementById('instructions-container');
  instructionsContainer.innerHTML = '';

  if (!startPointBlock || !destinationPointBlock) {
    alert("Please select both starting point and destination.");
    return;
  }

  let instructions = [];
  instructions.push(`Navigating from ${startPointBlock} to ${destinationPointBlock}.`);
  if (destinationPointBlock === startPointBlock) {
    instructions.push(`Your destination and starting block are the same. Click the ${startPointBlock} button above to view the maps of ${startPointBlock}.`);
  }else{


  if (blockFloors[destinationPointBlock].length > 1) {
    instructions.push("Go to the lowest floor of the block.");
  }


  if (destinationPointBlock === "Sports Field") {
    instructions.push("You should be able to see the football field.");
  } else {
    instructions.push("Go to the main football field. Face and stand in front of the construction site.");
  }

  if (destinationPointBlock === "Main Guardhouse") {
    instructions.push("Turn left and walk up the small set of stairs on the walkway in front of you.");
    instructions.push("Walk forward and turn to your right. You should see the main guardhouse in front of you, slightly to your left");
  }

  if (destinationPointBlock === "Arts Block") {
    instructions.push("Turn left and walk up the small set of stairs on the walkway in front of you.");
    instructions.push("Turn to your left. You should see a set of stairs leading up. Take these stairs. 1st Floor: Primary Music, 2nd Floor: Secondary Art, 3rd Floor: Secondary Music, 4th Floor: Secondary Drama, 5th Floor: Secondary DT, 6th Floor: Finance Office.");
  }

  if (destinationPointBlock === "Under Cover Basketball Court") {
    instructions.push("Turn around completely and walk towards the right side of the field.");
    instructions.push("The basketball court should be in front of you.");
  }

  if (destinationPointBlock === "Secondary Block") {
    instructions.push("Walk towards your right.");
    instructions.push("Enter the covering. The sixth form center is in front of you. If you want to go to another floor in the block, take the staircase on your right. 1st Floor: Secondary Science, 2nd Floor: Secondary Maths, 3rd Floor: Secondary English, 4th Floor: Secondary Humanities (history + computer science).");
  }

  if (destinationPointBlock === "Swimming Pool") {
    instructions.push("Turn around completely and walk towards the left side of the field.");
    instructions.push("The swimming pool should be in front of you. Entrance is through the changing room. You must ask a teacher's permission to enter the changing rooms.");
  }

  if (destinationPointBlock === "Centre Block") {
    instructions.push("Turn around completely and walk towards the opening on the right side of the pool and the left side of the basketball court.");
    instructions.push("Enter the covering. Walk up the stairs directly in front of you. The Grand Hall is to your right and the Sports Hall is to your left. If you want to go to business floors, turn left and go up the narrow set of stairs on your right.");
  }

  if (destinationPointBlock === "Adventure Playground") {
    instructions.push("Turn around and walk towards the basketball court. ");
    instructions.push("Walk on the pavement on the right side of the basketball court.")
    instructions.push("Walk straight ahead, through the canteen, until you reach the road.")
    instructions.push("Then, turn right, walk along the pavement parallel to road. In front of you, you should see the Adventure Playground. ")
  }

  if (destinationPointBlock === "Drop-off & Pick-up Zone") {
    instructions.push("Turn around and walk towards the opening on the right side of the pool and the left side of the basketball court.");
    instructions.push("Enter the covering. Walk up the stairs in front of you. Turn right and walk across the corridor until you reach a set of stairs. ");
    instructions.push("Walk up these stairs. Turn right immediatelu, you should see a road in front of you, where cars can drive through. Turn left and walk up the stairs to exit the school. This will lead you to Jaya Grocer.")
  }

  if (destinationPointBlock === "Primary Block") {
    instructions.push("Turn around and walk towards the right side of the field (basketball court). Walk on the pavement on the right side of the field. There should be a small set of stairs that leads to a smaller field on the right of the big football field. ");
    instructions.push('You are now in the primary block. Take the staircase on your left up. Ground Floor: Y1 and Y2. First Floor:  Primary Hall and Library. Second Floor: Y3 and Y4. Third Floor: Y5 and Y6.')
  }

  }


  let formattedInstructions = '';
  instructions.forEach((instruction, index) => {
    formattedInstructions += `${index + 1}. ${instruction}\n\n`;
  });

  const instructionsParagraph = document.createElement('p');
  instructionsParagraph.textContent = formattedInstructions;
  instructionsContainer.appendChild(instructionsParagraph);

  console.log(formattedInstructions);
}


window.onload = () => {
  generateBlockButtons();
  generateBlockDropdown(Object.keys(blockFloors), 'start-point-container');
  generateBlockDropdown(Object.keys(blockFloors), 'destination-container');
  const navigateButton = document.createElement('button');
  navigateButton.textContent = 'Navigate';
  navigateButton.addEventListener('click', navigate);
  document.body.appendChild(navigateButton);

};
