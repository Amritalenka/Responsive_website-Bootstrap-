document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
  });
  
  function fetchProjects() {
    axios.get('YOUR_API_ENDPOINT/projects')
      .then(response => {
        const projects = response.data;
        displayProjects(projects);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }
  
  function displayProjects(projects) {
    const projectsContainer = document.querySelector('#projects .row');
    let projectsHTML = '';
  
    projects.forEach(project => {
      projectsHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <a href="${project.url}" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      `;
    });
  
    projectsContainer.innerHTML = projectsHTML;
  }
  