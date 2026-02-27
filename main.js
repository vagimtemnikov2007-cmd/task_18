document.addEventListener('DOMContentLoaded', () => {
    const skills = ["HTML", "CSS", "JavaScript", "GitHub", "LocalStorage"];
    const list = document.getElementById('skills-list');

    if (list) {
        renderSkills(skills, list);
    }
});

function renderSkills(data, container) {
    container.innerHTML = '';

    data.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        container.appendChild(li);
    });
}
