const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000)
});

//async function executePromise() {
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
//}

const executePromise = async () => {
    console.log( await minhaPromise());
    console.log( await minhaPromise());
    console.log( await minhaPromise());
};

executePromise();