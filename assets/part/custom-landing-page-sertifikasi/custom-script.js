function toggleColumn() {
    let table = document.getElementById("unit-table");
    table.classList.toggle("hidden-column");
  }
  
  let isRunning = false;
  const showButton = document.getElementById("show-button");
  showButton.addEventListener("click", function () {
    isRunning = !isRunning;
  
    if (isRunning) {
      showButton.textContent = "Sembunyikan Kode Unit";
    } else {
      showButton.textContent = "Tampilkan Kode Unit";
    }
  
  });
  