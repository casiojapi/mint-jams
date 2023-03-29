document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const imageFolder = 'static/images'; // Replace with the path to your image folder
  
    async function fetchImages() {
      const response = await fetch(imageFolder);
      const text = await response.text();
      const parser = new DOMParser();
      const html = parser.parseFromString(text, 'text/html');
      const imageLinks = [...html.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]')];
  
      imageLinks.forEach(link => {
        const img = document.createElement('img');
        img.src = `${imageFolder}/${link.getAttribute('href')}`;
        gallery.appendChild(img);
      });
    }
  
    fetchImages();
  });
  