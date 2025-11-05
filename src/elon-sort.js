async function elonSort(arr) {
    let maxRandomLoop = 5; // Change this as desired
    let timesToLoop = generateRandomInt(1, maxRandomLoop);
    let initialArrayLength = arr.length;

    console.log("Loop Amount:", timesToLoop);
    console.log();

    for (let i = 0; i < timesToLoop; i++) {
        let removedElements = [];
        for (let i = 0; i < initialArrayLength / 2; i++) {
            let randomInt = generateRandomInt(0, arr.length - 1);
            let elementToBeRemoved = arr[randomInt];

            removedElements.push(elementToBeRemoved);
            arr.splice(randomInt, 1);
        }

        let progressPercentage = (((i + 1) / timesToLoop) * 100).toFixed(2);
        console.log("Sorting Progress:", progressPercentage + "%")
        arr.push(...removedElements);
        await sleep(timesToLoop);
    }

    console.log();
    console.log(arr.join(", "));
    console.log("The array was succesfullyⁿᵒᵗ sorted");
}

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let arr = [12, 15, 2, 11, 5, 15353, 3245, 35, 2345];
await elonSort(arr);
