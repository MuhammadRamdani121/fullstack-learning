function cekUmur(umur) {
    // try
    try {
        if (umur < 18) {
            // throw
            throw new Error(
                'Umur harus 18 tahun atau lebih',
            );
        }

        console.log('Kamu boleh masuk.');
    } catch (error) {
        // catch
        console.log('Terjadi error:', error.message);
    } finally {
        // finnaly
        console.log('Proses selesai.');
    }
}

cekUmur(15);

// Contoh di API
async function getUser() {
    try {
        const response = await fetch(
            'https://api.example.com/users/1',
        );

        if (!response.ok) {
            throw new Error('Gagal mengambil data user');
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        console.log('Request selesai');
    }
}

getUser();
