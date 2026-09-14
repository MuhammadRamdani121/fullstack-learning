const mahasiswa = {
    id: 1,
    nama: 'Ramdani',
    age: 20,
    mahasiswaAktif: true,
};

// destructuring object
const {
    id,
    nama,
    age,
    mahasiswaAktif,
} = mahasiswa;

console.log(id);
console.log(nama);
console.log(age);
console.log(mahasiswaAktif);
