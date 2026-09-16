function ambilNama() {
    return new Promise((resolve) => {
        resolve('Budi');
    });
}

async function main() {
    const nama = await ambilNama();

    console.log(nama);
}

main();
