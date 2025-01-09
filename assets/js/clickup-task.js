// Mendapatkan elemen form berdasarkan ID
document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    // Mencegah form agar tidak melakukan submit default (page reload)
    event.preventDefault();

    // Mengambil referensi elemen form dan input yang ada di dalamnya
    const form = document.getElementById('uploadForm');
    const name = document.getElementById('names').value.trim(); 
    const whatsapp = document.getElementById('whatsapps').value.trim();
    const location = document.getElementById('location').value.trim();
    const program = document.getElementById('programs').value;
    const note = document.getElementById('messages').value.trim();

    const loading = document.getElementById('loading');
    const success = document.getElementById('success');

    // Mengambil semua checkbox channel yang dicentang dan memasukkannya ke array
    const channels = Array.from(channelCheckboxes).map(checkbox => checkbox.value);

    // Menampilkan animasi loading saat proses pengunggahan berjalan
    loading.style.display = 'flex';
    success.style.display = 'none';

    // API Token dan List ID ClickUp untuk otentikasi dan referensi
    const apiToken = 'pk_3640079_B56O8X0HW6FAEIZJFFJAQW99IAHQMF8N';
    const listId = '14355106';

    try {
        // Membuat task baru di ClickUp dengan data yang sudah diinputkan
        const createTaskResponse = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
            method: 'POST',
            headers: {
                'Authorization': apiToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,  // Nama task yang akan dibuat
                custom_fields: [ // Custom fields yang disimpan ke dalam task
                    {
                        id: '562e180b-6664-483e-8f44-28902bfe4fbe', // Umur
                        value: parseInt(whatsapp)
                    },
                    {
                        id: 'f3c74d35-738f-4d34-bf63-eecaf8e57b84', // Posisi
                        value: program
                    },
                    {
                        id: 'aa774e5f-da8b-43c7-8a6f-f0cf731a6631', // Lokasi
                        value: location
                    },
                    {
                        id: '856f5a4e-fe7b-4ca3-8f2a-82ba0a1816b2', //notes
                        value: note
                    },
                    {
                        id: '08063cb2-73f3-46d2-8d8e-0294bc714d52', // Username (Sama dengan nama pengguna)
                        value: name
                    }
                ]
            })
        });

        const createdTask = await createTaskResponse.json();
        
        // Jika task gagal dibuat, tampilkan pesan error
        if (!createTaskResponse.ok) {
            const error = await createTaskResponse.json();
            throw new Error('Kesalahan saat membuat tugas: ' + (error.err || 'Kesalahan tidak diketahui'));
        }

        const taskId = createdTask.id;  // Ambil ID task yang baru dibuat

        // Menambahkan komentar ke task dengan detail informasi pengguna
        const commentResponse = await fetch(`https://api.clickup.com/api/v2/task/${taskId}/comment`, {
            method: 'POST',
            headers: {
                'Authorization': apiToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment_text: `Nama: ${name}\nWhatsapp: ${whatsapp}\nMotivasi: ${note}`
            })
        });

        // Jika gagal menambahkan komentar, tampilkan pesan error
        if (!commentResponse.ok) {
            const error = await commentResponse.json();
            throw new Error('Kesalahan saat menambahkan komentar: ' + (error.err || 'Kesalahan tidak diketahui'));
        }

        // Mengunggah file PDF yang diinput ke task yang baru dibuat
        const formData = new FormData();
        formData.append('attachment', file, file.name);

        const uploadFileResponse = await fetch(`https://api.clickup.com/api/v2/task/${taskId}/attachment`, {
            method: 'POST',
            headers: {
                'Authorization': apiToken
            },
            body: formData
        });

        // Sembunyikan animasi loading setelah proses selesai
        loading.style.display = 'none';

        // Jika file berhasil diunggah, tampilkan pesan sukses
        if (uploadFileResponse.ok) {
            form.style.display = 'none';  // Sembunyikan form setelah berhasil
            success.style.display = 'block';  // Tampilkan pesan sukses
        } else {
            const error = await uploadFileResponse.json();
            alert('Kesalahan saat mengunggah file: ' + (error.err || 'Kesalahan tidak diketahui'));
        }
    } catch (error) {
        // Menangkap semua kesalahan dan menampilkan pesan kesalahan
        console.error('Kesalahan:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
        loading.style.display = 'none';  // Sembunyikan loading jika terjadi kesalahan
    }
});
