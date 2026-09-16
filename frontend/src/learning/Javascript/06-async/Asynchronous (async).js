// Asynchronous (async)
// Ada pekerjaan yang membutuhkan waktu, jadi JavaScript bisa melanjutkan pekerjaan lain sambil menunggu.

console.log('A');

setTimeout(() => {
    console.log('B');
}, 2000);

console.log('C');
