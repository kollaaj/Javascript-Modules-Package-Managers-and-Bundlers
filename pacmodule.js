// finding all cursor classes 
export const cursors = document.querySelectorAll(".cursor");
export let mouseCursor = document.querySelector(".pacman");

// listening for the mouse move and moving the little buggers after it.
// the mouse is now Pacman
export default document.addEventListener("mousemove", (e) => {
  cursors.forEach((cursor) => {
    cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  });
});





