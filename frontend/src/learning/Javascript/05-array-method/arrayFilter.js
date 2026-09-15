// Membuat Array [{array1},{array2}]
const latihanArray = [
  { id: 1, nama: 'Ramdani', mahasiswa: true },
  { id: 2, nama: 'Muhammad', mahasiswa: false },
  { id: 3, nama: 'Muhammad Ramdani', mahasiswa: null },
];

export default latihanArray;

//! Menggunakan Array Filter
const mahasiswaAktif = latihanArray.filter((namaMahasiswa) => {
  return namaMahasiswa.mahasiswa === true;
});

// Memanggil filter
console.log(mahasiswaAktif);