/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// const chk = document.getElementById('chk');

// chk.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });

// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });


function darkmode() {
	const wasDarkmode = localStorage.getItem('darkmode') === 'true';
	localStorage.setItem('darkmode', !wasDarkmode);
	const element = document.body;
	element.classList.toggle('dark-mode', !wasDarkmode);
  }
  
  function onload() {
	document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
  }
  