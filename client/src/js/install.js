const installBtn = document.getElementById('buttonInstall');

window.addEventListener('Before Install Prompt', (event) => {
    window.deferredPrompt = event;

    installBtn.classList.toggle('hidden', false);
});

installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    installBtn.classList.toggle('hidden', true);
});

window.addEventListener('app Installed', (event) => {
    window.deferredPrompt = null;
});