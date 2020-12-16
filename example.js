const x = async () => {
    const y = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({pippo: 3});
        }, 1000);
    });
    
    const z = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
    return Promise.all([y, z]); 
}

const wrapEverResolve = async (promise) => {
    try {
        return Promise.resolve({success: (await promise)});
    } catch (err) {
        return Promise.resolve({error: err})
    }
}



// Promise<void>
// Promise<number>
// Promise<number[]>
(async () => {
    try {
        // const p = new Promise((resolve, reject) => {setTimeout(reject(2) ,1000)});
        // console.log(await wrapEverResolve(p));
        // console.log(await x());
        // console.time();
        // console.log(await (x().map(async () =>  {await wrapEverResolve})));
        // console.timeEnd();
        // let g3 = {city: 'Catania'};
        let [, g2] = await x();
        console.table([pippo, {...g2, ...g3}]);

    } catch (err) {
        console.log('err:', err);
    } 
    
})();
