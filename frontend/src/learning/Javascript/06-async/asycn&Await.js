function ambilUser() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                nama: 'Budi',
                umur: 20,
            };

            resolve(user);
        }, 2000);
    });
}

async function main() {
    console.log('1');
    const user = await ambilUser();

    console.log(user);
}

main();
