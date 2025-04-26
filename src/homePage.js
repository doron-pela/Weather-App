
export function homePage() {
    // Get the content div
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
  
    // Create the elements for the homepage
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Taste Haven';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Where every bite is a story worth savoring.';
  
    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092';
    img.alt = 'Delicious food';
  
    const subHeader = document.createElement('h2');
    subHeader.textContent = 'Experience Gourmet Comfort';
  
    const description = document.createElement('p');
    description.textContent = 'At Taste Haven, we bring the magic of flavor to your table. From farm-fresh ingredients to heartwarming service, we redefine what it means to eat well. Come hungry, leave enchanted.';
  
    // Append these elements to the content div
    contentDiv.appendChild(header);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(img);
    contentDiv.appendChild(subHeader);
    contentDiv.appendChild(description);
  }
  