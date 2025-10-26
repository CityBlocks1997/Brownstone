// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('closeModal');

// EXAMPLE WINDOW DATA - Shows how to populate your CityBlocks
// Replace these with your actual video URLs and creator information
const windowData = {
  host: {
    title: 'Host Window - Jazz Fusion Final Mix',
    description: 'The complete collaborative jazz fusion project featuring all 6 musicians blended into one performance.',
    type: 'Final Performance',
    videoUrl: 'https://www.youtube.com/embed/jGflUbPQfW8', // Example jazz video
    creator: 'Block Host - Alex Johnson',
    occupied: true
  },
  1: {
    title: 'Vocalist - Sarah Chen',
    description: 'Smooth jazz vocals with improvised scat sections. Recorded in home studio, Seattle, WA.',
    type: 'Audio Performance',
    videoUrl: 'https://www.youtube.com/embed/neV3EPgvZ3g', // Example vocal performance
    creator: 'Sarah Chen',
    occupied: true
  },
  2: {
    title: 'Guitarist - Marcus Rivera',
    description: 'Jazz guitar with fusion elements and complex chord progressions. Brooklyn, NY.',
    type: 'Audio Performance',
    videoUrl: '', // Add URL when ready
    creator: 'Marcus Rivera',
    occupied: true
  },
  3: {
    title: 'Pianist - Elena Volkov',
    description: 'Piano accompaniment with classical jazz influences. Contributing from Moscow.',
    type: 'Audio Performance',
    videoUrl: '', // Add URL when ready
    creator: 'Elena Volkov',
    occupied: true
  },
  4: {
    title: 'Drummer - James Park',
    description: 'Rhythm section with complex time signatures. Recorded in professional studio, Los Angeles.',
    type: 'Audio Performance',
    videoUrl: '', // Add URL when ready
    creator: 'James Park',
    occupied: true
  },
  5: {
    title: 'Trumpet - Antoine Dubois',
    description: 'Brass lead melodies and harmonies with bebop styling. Paris, France.',
    type: 'Audio Performance',
    videoUrl: '', // Add URL when ready
    creator: 'Antoine Dubois',
    occupied: true
  },
  6: {
    title: 'Saxophone - Yuki Tanaka',
    description: 'Alto sax solos and improvisations. Recording from Tokyo, Japan.',
    type: 'Audio Performance',
    videoUrl: '', // Add URL when ready
    creator: 'Yuki Tanaka',
    occupied: true
  },
  7: {
    title: 'Collaborator 7',
    description: 'This window is open for a bass player or additional instrumentalist to join the project.',
    type: 'Audio/Video Performance',
    videoUrl: '',
    creator: '',
    occupied: false
  },
  8: {
    title: 'Collaborator 8',
    description: 'Available for visual artist, animator, or video editor to add visual elements.',
    type: 'Audio/Video Performance',
    videoUrl: '',
    creator: '',
    occupied: false
  },
  9: {
    title: 'Collaborator 9',
    description: 'Open window ready for any creative contributor.',
    type: 'Audio/Video Performance',
    videoUrl: '',
    creator: '',
    occupied: false
  },
  10: {
    title: 'Collaborator 10',
    description: 'Available collaboration spot for this CityBlock project.',
    type: 'Audio/Video Performance',
    videoUrl: '',
    creator: '',
    occupied: false
  },
  11: {
    title: 'Collaborator 11',
    description: 'Empty window waiting for a creative collaborator.',
    type: 'Audio/Video Performance',
    videoUrl: '',
    creator: '',
    occupied: false
  },
  12: {
    title: 'Collaborator 12',
    description: 'Last available window in this brownstone collaboration block.',
    type: 'Audio/Video Performance',
    videoUrl: '',
    creator: '',
    occupied: false
  }
};

// Function to open window modal
function openWindow(windowId) {
  const data = windowData[windowId];
  
  if (!data) {
    console.error('Window data not found for:', windowId);
    return;
  }

  // Set title
  modalTitle.textContent = data.title;

  // Build modal content
  let content = '';

  if (data.occupied && data.videoUrl) {
    // Show video if window is occupied and has a URL
    content = `
      <div class="window-info">
        <p><strong>Creator:</strong> ${data.creator}</p>
        <p><strong>Type:</strong> ${data.type}</p>
        <p>${data.description}</p>
      </div>
      <div class="video-container">
        <iframe src="${data.videoUrl}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
      </div>
    `;
  } else if (data.occupied && !data.videoUrl) {
    // Show placeholder if occupied but no video yet
    content = `
      <div class="window-info">
        <p><strong>Creator:</strong> ${data.creator}</p>
        <p><strong>Type:</strong> ${data.type}</p>
        <p>${data.description}</p>
      </div>
      <div class="video-container">
        <div class="video-placeholder">
          🎬 Video Coming Soon
          <small style="opacity: 0.7; margin-top: 10px;">Creator is preparing their performance</small>
        </div>
      </div>
    `;
  } else {
    // Show available window message
    content = `
      <div class="window-info">
        <p>${data.description}</p>
        <div style="text-align: center; padding: 40px 20px;">
          <div style="font-size: 4rem; margin-bottom: 15px;">➕</div>
          <h3 style="color: #f093fb; margin-bottom: 10px;">This Window is Available</h3>
          <p style="opacity: 0.8;">Invite a creator to join this collaboration project</p>
          <span class="window-badge">AVAILABLE</span>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = content;
  modal.classList.add('active');
}

// Close modal handlers
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
