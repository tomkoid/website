export async function moveBackground() {
  let backgroundPos = document.body.style.backgroundPosition;
  console.log(backgroundPos);

  setInterval(() => {
    console.log(backgroundPos);
    console.log('xdd');
    backgroundPos = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
  }, 1000);
}
