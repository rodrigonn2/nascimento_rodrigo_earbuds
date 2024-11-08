


// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);




//creating a function to control my content display


//defining my buttons array
const buttons = [
  { buttonId: 'volume', annotationId: 'volume_hot' },
  { buttonId: 'clean_sound_btn', annotationId: 'clean_sound_hot' },
  { buttonId: 'noise_c_btn', annotationId: 'noise_canc_hot' },
  { buttonId: 'mic_next_btn', annotationId: 'mic_next_hot' },
  { buttonId: 'design_exclusive_btn', annotationId: 'design_hot' }
];



//Controlling my clicks
buttons.forEach(item => {
  const button = document.getElementById(item.buttonId);
  button.addEventListener('click', () => {
   

    console.log('its clicked');
    
    ControlContent(item.buttonId, item.annotationId);
    
    
    



   
  });
//controlling my clicks
function ControlContent(buttonId, annotationId) {
  const annotation = document.getElementById(annotationId);
  
  // Show the window
  annotation.classList.toggle('none');
      //if is hidden animate it.
 
  if (!annotation.classList.contains('none')) {

    console.log('asas')
    gsap.fromTo(annotation, { opacity: 0, x: 60 }, { opacity: 1, x: -80, duration: 0.5 });
    
  }
}

gsap

});

