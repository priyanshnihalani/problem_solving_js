let counter = 0
function getData(value) {
    console.log("Fetching Data...", value)
}

const betterFunction = doSomeMagic(getData, 3000)

function doSomeMagic(getData, delay) {
    let timer;
    return function (e) {
        let value = e.target.value
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData(value)
        }, delay)
    }
}
