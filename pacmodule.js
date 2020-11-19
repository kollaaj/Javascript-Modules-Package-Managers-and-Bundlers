// creates pacman element and appends it to body
const createPacman = () => {
  const pacman = document.createElement("div");
  pacman.classList.add('pacman');

  const pacmanTop = document.createElement('div');
  pacmanTop.classList.add('pacman-top');

  const pacmanBottom = document.createElement('div');
  pacmanBottom.classList.add('pacman-bottom');

  pacman.appendChild(pacmanTop);
  pacman.appendChild(pacmanBottom);

  document.querySelector('body').appendChild(pacman);
};

// creates ghost element and appends it to body
const createGhost = (color) => {
  const ghost = document.createElement('div');
  ghost.classList.add('ghost', color);
  document.querySelector('body').appendChild(ghost);
};

export const init = () => {
  // create module elements
  createPacman();
  createGhost('pink');
  createGhost('green');
  createGhost('red');
  createGhost('yellow');

  // find all ghosts and pacman cursor
  const ghosts = document.querySelectorAll(".ghost");
  const pacman = document.querySelector(".pacman");
  
  // listening for the mousemove event and moving the little buggers after it.
  // the mouse is now Pacman!!!
  document.addEventListener("mousemove", (e) => {
    pacman.style.top = e.pageY + "px"
    pacman.style.left = e.pageX + "px"

    ghosts.forEach((ghost) => {
      ghost.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
    });
  });
}

export default { init };
