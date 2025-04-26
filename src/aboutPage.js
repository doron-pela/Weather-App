
export function aboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 
  
    const heading = document.createElement('h1');
    heading.textContent = 'About Taste Haven';
  
    const intro = document.createElement('p');
    intro.textContent = `Founded with a passion for flavor and hospitality, Taste Haven is a celebration of good food and warm company.`;
  
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1543353071-087092ec393c';
    image.alt = 'Chef cooking';
    image.style.maxWidth = '600px';
    image.style.marginTop = '1rem';
    image.style.borderRadius = '8px';
  
    const paragraph = document.createElement('p');
    paragraph.textContent =
      `Our journey began in a small kitchen with big dreams. Since then, we've grown into a vibrant culinary hub where creativity meets tradition. 
      Whether you're stopping by for a cozy dinner or a celebratory meal, every plate at Taste Haven tells a story of quality, care, and craftsmanship.`;
  
    content.appendChild(heading);
    content.appendChild(intro);
    content.appendChild(image);
    content.appendChild(paragraph);
  }
  