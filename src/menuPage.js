export function menuPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 
  
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
  
    const description = document.createElement('p');
    description.textContent = 'Delicious, handcrafted dishes made fresh daily.';
  
    const menuList = document.createElement('ul');
  
    const items = [
      {
        name: 'Grilled Salmon',
        desc: 'Served with lemon butter sauce and seasonal veggies',
      },
      {
        name: 'Spaghetti Bolognese',
        desc: 'Rich meat sauce simmered to perfection over al dente pasta',
      },
      {
        name: 'Caesar Salad',
        desc: 'Crisp romaine, parmesan, croutons, and our signature dressing',
      },
      {
        name: 'Classic Cheeseburger',
        desc: 'Juicy beef patty with cheddar, lettuce, tomato, and pickles',
      },
    ];
  
    items.forEach((item) => {
      const listItem = document.createElement('li');
  
      const dish = document.createElement('h3');
      dish.textContent = item.name;
  
      const dishDesc = document.createElement('p');
      dishDesc.textContent = item.desc;
  
      listItem.appendChild(dish);
      listItem.appendChild(dishDesc);
      listItem.style.marginBottom = '1rem';
  
      menuList.appendChild(listItem);
    });
  
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(menuList);
  }
  