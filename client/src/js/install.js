const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('App installed');
      } else {
        console.log('App not installed');
      }
      deferredPrompt = null;
    } catch (error) {
      console.error('Error installing app:', error);
    }
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});
