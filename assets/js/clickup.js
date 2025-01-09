// Function untuk buat data baru
const createNewTask = async (listId, taskName, customFields, description) => {
  const createTaskResponse = await fetch(
    `https://api.clickup.com/api/v2/list/${listId}/task`,
    {
      method: "POST",
      headers: {
        Authorization: apiToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName,
        description: description,
        custom_fields: customFields,
      }),
    }
  );

  if (!createTaskResponse.ok)
    throw new Error("Gagal mengirim data. Harap coba lagi !");
};

const apiToken = "pk_3640079_B56O8X0HW6FAEIZJFFJAQW99IAHQMF8N";

const handleNewTask = async (event) => {
  event.preventDefault();
  let whatsapp = iti.getNumber();
  const name = document.getElementById("names").value.trim();
  const note = document.getElementById("messages").value.trim();
  const program = document.getElementById("programs").value;
  const address = document.getElementById("locations").value;
  const description =
    "Mendaftar dari halaman iklan online. https://www.dialogika.co/page/kelas-public-speaking-online/";

  // API Token dan List ID ClickUp
  const listId = "14355106";
  const whatsappUrl = `https://wa.me/${whatsapp}`;

  const loading = document.querySelector(".loading");
  const success = document.querySelector(".success");

  if (!program) {
    alert("Program harus dipilih.");
    return;
  } // Membuat task baru di ClickUp
  const custom_fields = [
    {
      id: "856f5a4e-fe7b-4ca3-8f2a-82ba0a1816b2",
      value: note,
    },
    {
      id: "1ea48bee-9f93-421e-a9e9-b140b8144891",
      value: [program],
    },
    {
      id: "cebb3fac-770a-4d4d-9056-1cab027bf9e1",
      value: address,
    },
    {
      id: "0928d307-37dc-47e3-9ed4-ddc1bf73e4e7", // Channelnya dari website
      value: ["03a4d146-a239-4156-b368-ba620c3a0dd4"], // Value channel = website
    },
    {
      id: "76680f29-6988-4d55-ab67-508f051c2ed9", // Custom field ID for WhatsApp URL
      value: whatsappUrl,
    },
  ];

  try {
    loading.style.display = "flex";

    await createNewTask(listId, name, custom_fields, description);

    loading.style.display = "none";
    success.style.display = "flex";

    setTimeout(() => {
      success.style.display = "none";
    }, 10000);
  } catch (error) {
    console.error("Kesalahan:", error);
    alert("Terjadi kesalahan. Silakan coba lagi.");
  }
};

// ? Function untuk kirim data user yang subscribe lewat footer dan gabung ke grup WA CEO Class.
const handleSubFooterSubmission = async (event) => {
  event.preventDefault();
  const inputSubFooterNama = document
    .getElementById("inputSubFooterNama")
    .value.trim();
  const inputSubFooterWhatsapp = subFooterIti.getNumber();
  const inputSubFooterDomisili = document
    .getElementById("inputSubFooterDomisili")
    .value.trim();
  const inputSubFooterEmail = document
    .getElementById("inputSubFooterEmail")
    .value.trim();
  const description =
    "Menambahkan member grup CEO Class melalui form subscribe";
  const success = document.getElementById("modal-success-indicator");

  const listId = "901602772763";

  const customFields = [
    {
      id: "562e180b-6664-483e-8f44-28902bfe4fbe",
      value: inputSubFooterWhatsapp,
    },
    {
      id: "7706865a-a839-4134-85f0-9ed46ebded9c",
      value: inputSubFooterDomisili,
    },
  ];

  // Basic validation check
  if (!inputSubFooterNama) {
    alert("Nama harus diisi.");
    return;
  }
  if (!inputSubFooterEmail) {
    alert("Tolong isi email !");
  }
  if (!inputSubFooterDomisili) {
    alert("Domisili harus diisi.");
    return;
  }

  try {
    // success.classList.remove("d-none");
    // success.classList.add("d-flex");

    await createNewTask(listId, inputSubFooterNama, customFields, description);
  } catch (error) {
    alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    console.error(error);
  }
};

// ? Function untuk cek id custom field dari clickup. Buka browser dev tool untuk lihat response dan daftar id-idnya.
// ? Buat button dengan id "getClickupData" untuk menggunakan function ini
const handleGetClickupIds = async (event) => {
  event.preventDefault();
  const apiToken = "pk_3640079_B56O8X0HW6FAEIZJFFJAQW99IAHQMF8N";
  const listId = "14355106"; // Ganti dengan id yng sesuai. Contoh link https://app.clickup.com/2307700/v/li/14355106
  let taskId = null; // Variabel untuk menyimpan task ID

  console.log("hello world ini ambil data");

  try {
    // Langkah 1: Send GET Request ke Clickup
    const checkTaskResponse = await fetch(
      `https://api.clickup.com/api/v2/list/${listId}/field`,
      {
        method: "GET",
        headers: {
          Authorization: apiToken,
          "Content-Type": "application/json",
        },
      }
    );

    if (!checkTaskResponse.ok) {
      throw new Error("Gagal memeriksa duplikasi tugas.");
    }

    const tasks = await checkTaskResponse.json(); // response data dari clickup

    // Variable sementara untuk menyimpan nomor whatsapp dan task yang sama.
    let existingWA = null;
    let matchedTask = null;
    console.log("ini response:", checkTaskResponse);
    console.log("ini tasks :", tasks);
  } catch (error) {
    console.log("terjadi kesalahan !", error);
  }
};

// | Masukkan function handleGetClickupIds ke element button dengan id getClickupData untuk mengambil id dan value custom_fields clickup
const getClickupData = document.getElementById("getClickupData");
if (getClickupData)
  getClickupData.addEventListener("click", handleGetClickupIds);

// Function untuk mengirim data saat send button di form di footer
const subFooterBtn = document.getElementById("subFooterBtn");
if (subFooterBtn) {
  subFooterBtn.addEventListener("click", handleSubFooterSubmission);
  $(document).on("click", "#subFooterBtn", () => {
    window.open("https://chat.whatsapp.com/HMvvH97Mj4p5HSQYDbRnPM", "_blank");
  });
}

const uploadForm = document.getElementById("uploadForm");
if (uploadForm) uploadForm.addEventListener("submit", handleNewTask);
