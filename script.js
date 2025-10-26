const windows = document.querySelectorAll('.window');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('closeModal');

const windowData = {
  host: {
    title: 'Host Window - Final Mix',
    description: 'This is where the final combined performance appears. The host has mixed all 6 collaborators into one cohesive piece.',
    type: 'Final Performance'
  },
  1: {
    title: 'Vocalist - Sarah Chen',
    description: 'Lead vocals with jazz improvisation. Recording from her home studio in Seattle.',
    type: 'Audio Performance'
  },
  2: {
    title: 'Guitarist - Marcus Rivera',
    description: 'Jazz guitar with fusion elements. Recorded in Brooklyn, NY.',
    type: 'Audio Performance'
  },
  3: {
    title: 'Pianist - Elena Volkov',
    description: 'Piano accompaniment and solos. Contributing from Moscow.',
    type: 'Audio Performance'
  },
  4: {
    title: 'Drummer - James Park',
    description: 'Rhythm section and percussion. Recording from his studio in LA.',
    type: 'Audio Performance'
  },
  5: {
    title: 'Trumpet - Antoine Dubois',
    description: 'Brass lead and harmonies. Contributing from Paris.',
    type: 'Audio Performance'
  },
  6: {
    title: 'Saxophone - Yuki Tanaka',
    description: 'Sax solos and jazz improvisation. Recording from Tokyo.',
    type: 'Audio Performance'
  }
};

windows.forEach(window => {
  window.addEventListener('click', () => {
    const windowId = window.dataset.window;
    const data = windowData[windowId];

    if (data) {
      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <p style="color: #555; margin-bottom: 15px;">${data.description}</p>
        <div style="background: rgba(102, 126, 234, 0.1); padding: 10px; border-radius: 8px; margin-bottom: 15px;">
          <strong style="color: #667eea;">Type:</strong> ${data.type}
        </div>
        <div class="video-placeholder">
          🎥 Video/Audio Player<br>
          <small style="opacity: 0.8;">(In production: YouTube/Vimeo/SoundCloud embed)</small>
        </div>
      `;
      modal.classList.add('active');
    } else {
      modalTitle.textContent = 'Available Window';
      modalBody.innerHTML = `
        <p style="color: #555; margin-bottom: 15px;">This window is available for a new collaborator!</p>
        <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 8px; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 10px;">➕</div>
          <p><strong style="color: #667eea;">Invite a Collaborator</strong></p>
          <p style="font-size: 0.9rem; margin-top: 10px; color: #666;">Bass player, violinist, animator, or any creator to join this project</p>
        </div>
      `;
      modal.classList.add('active');
    }
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('active');
  }
});