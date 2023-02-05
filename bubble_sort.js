let myArray = [1, 55, 88, 0, 7, 4, 63]

const bubbleSort = (array) => {
    for (let i = 0 ; i < array.length ; i ++) {
        for (let j = 0 ; j < array.length ; j++) {
            if (array[i] < array[j]) {
                let alt = array[i]
                array[i] = array[j]
                array[j] = alt
            }
        }
    }
    return array
}

console.log('The sorted array: ', bubbleSort(myArray))