// Mengimport supaya bisa memakai data difile lain
import latihanArray from './DataArray.js';

// ! Membuat Array Map
const semuaNama = latihanArray.map((mahasiswa) => {
  return mahasiswa.nama;
});
// Memanggil semua nama
console.log(semuaNama);

// ! Membuat array filter

const mahasiswaAktif = latihanArray.filter((mahasiswa) => {
  return mahasiswa.mahasiswa === true;
});

// Memanggil semua mahasiswa aktif
console.log(mahasiswaAktif);

// !Membuat array find
const mahasiswaId3 = latihanArray.find((mahasiswa) => {
  return mahasiswa.id === 3;
});

console.log(mahasiswaId3);
