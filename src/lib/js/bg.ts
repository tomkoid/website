export async function moveBackground() {
  let backgroundPos = document.body.style.backgroundPosition;
  console.log(backgroundPos);

  setInterval(() => {
    console.log(backgroundPos);
    console.log('xdd');
    backgroundPos = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
  }, 1000);
}


export function mouseGlowFollow() {
  const introBg = document.getElementById('intro-bg');
  if (!introBg) return;
  if (!isTouchOnly()) return;

  introBg.addEventListener('mousemove', (e) => {
    const rect = introBg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
    const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
    introBg.style.setProperty('--mouse-x', x);
    introBg.style.setProperty('--mouse-y', y);
  });
}


function isTouchOnly() {
  return (
    window.matchMedia('(pointer: coarse)').matches &&
    window.matchMedia('(hover: none)').matches
  );
}
