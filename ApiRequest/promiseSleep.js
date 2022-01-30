// sleep(3000);

function sleep(delay) {
    return new Promise((resolve, reject) => {
        //method 1
        // if (typeof delay !== 'number') {
        //     reject({
        //         success: false,
        //         message: "invalid argument, promise accepts only valid numbers"
        //     })
        // } else {
        //     setTimeout(() => {
        //         resolve({
        //             success: true,
        //             message: "success"
        //         })
        //     }, delay)
        // }

        //method -2
        if (typeof delay !== 'number') {
            reject()
        } else {
            setTimeout(() => {
                resolve()
            }, delay)
        }




    })
}

//method 1
// sleep(1000).then(function(res) {
//     console.log(res)
// }).catch(function(err) {
//     console.log(err)
// })

//method -2
sleep(1000).then(function() {
    console.log('success:', true)
    console.log('message:', "success")
}).catch(function() {
    console.log('success:', false)
    console.log('message:', "invalid argument, promise accepts only valid numbers")
})