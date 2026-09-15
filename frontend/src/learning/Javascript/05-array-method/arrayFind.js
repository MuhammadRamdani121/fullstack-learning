const latihanArray = [
    {
        id: 1,
        nama: 'Ramdani',
        mahasiswa: true,
    },
    {
        id: 2,
        nama: 'Muhammad',
        mahasiswa: false,
    },
    {
        id: 3,
        nama: 'Muhammad Ramdani',
        mahasiswa: null,
    },
];

const mahasiswaAktif =
    latihanArray.find(
        (data) => data.mahasiswa === true,
    );

console.log(mahasiswaAktif);
