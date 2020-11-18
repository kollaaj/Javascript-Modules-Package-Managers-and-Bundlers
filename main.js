// finding all cursor classes 
const cursors = document.querySelectorAll(".cursor");
let mouseCursor = document.querySelector(".pacman");

// listening for the mouse move and moving the little buggers after it.
// the mouse is now Pacman
document.addEventListener("mousemove", (e) => {
  cursors.forEach((cursor) => {
    cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  });
});





