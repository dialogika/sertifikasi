const tombolInteraktif = document.getElementById('submits');
const pilihan = document.getElementById('programs');

pilihan.addEventListener('change', function() {
    const selectedOption = pilihan.options[pilihan.selectedIndex].text;
    tombolInteraktif.innerHTML = `Send <span style="color: #F9C72E;">${selectedOption}</span> to Whatsapp`;
});
  
document.querySelectorAll('.title-change-consultation').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.getElementById('textChange').innerHTML = 'Consultation';
  });
});

document.querySelectorAll('.title-change-registration').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.getElementById('textChange').innerHTML = 'Registration';
  });
});
