// Membuat Array [{array1},{array2}]
const latihanArray = [
  { id: 1, nama: 'Ramdani', mahasiswa: true },
  { id: 2, nama: 'Muhammad', mahasiswa: false },
  { id: 3, nama: 'Muhammad Ramdani', mahasiswa: null },
];


// Memanggil Array
console.log(latihanArray);
// Memanggil Array Index(Urutan) pertama
console.log(latihanArray[0]);
// Memanggil object dari array index(Urutan) pertama
console.log(latihanArray[0].nama);

// Menambahkan Array Lewat Array.Push
latihanArray.push({ id: 4, nama: 'Hani', mahasiswa: true });

console.log(latihanArray);

//! Menggunakan array MAP
const namaMahasiswa = latihanArray.map((nama) => {
  return nama.nama;
});

// memanggil namaMahasiswa
console.log(namaMahasiswa);

//! Menggunakan Array Filter
const mahasiswaAktif = latihanArray.filter((namaMahasiswa) => {
  return namaMahasiswa.mahasiswa === true;
});

// Memanggil filter
console.log(mahasiswaAktif);

// !Menggunakan Array Find
const mencariMahasiswa = latihanArray.find((mahasiswa) => {
  return mahasiswa.id === 2;
});

// Memanggil Find
console.log(mencariMahasiswa);
