// sleep(3000);

function sleep(delay) {
    return new Promise((resolve, reject) => {

        if (typeof delay !== 'number') {
            reject()
        } else {
            setTimeout(() => {
                resolve()
            }, delay)
        }


    })
}

sleep(1000).then(function(res) {
    console.log('success:', true)
    console.log('message:', "success")
}).catch(function(err) {
    console.log('success:', false)
    console.log('message:', "invalid argument, promise accepts only valid numbers")
})