// function getTempCallback(location, callback) {
//     callback(undefined, 11)
//     callback('city not found')
// }
//
// getTempCallback('Copenhagen', function (err, temp) {
//     if (err) {
//         console.log('error', err)
//     } else {
//         console.log('success', temp)
//     }
// });
//
// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(6)
//             reject('error? some problem')
//         }, 1000)
//     })
// }
//
// getTempPromise('Copenhagen').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('error', err)
// })

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number')
        {
            resolve(a + b)
        }else{
            reject('params not both numeric')
        }
    })
}

addPromise(2, 4).then(function(sum) {
    console.log(sum);
}, function(err) {
    console.log('error', err)
});

addPromise(2, 'sam').then(function(sum) {
    console.log(sum);
}, function(err) {
    console.log('error', err)
});
