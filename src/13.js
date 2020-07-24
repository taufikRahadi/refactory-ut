const stats = num => {
    const mean = num.reduce((x, y) => x + y) / num.length
    const largest = (num) => { 
        return Math.max.apply(null, num) 
    }
    const smallest = (num) => { 
        return Math.min.apply(null, num) 
    }
    const range = (largest, smallest) => { 
        return largest - smallest 
    }
    const mode = num => {
        let modeMap = {}, maxCount = 1, modes= [num[0]]
        
        num.forEach(val => {
            if(!modeMap[val]) modeMap[val] = 1
            else modeMap[val]++
            
            if(modeMap[val] > maxCount) {
                modes = [val]
                maxCount = modeMap[val]
            } else if(modeMap[val] === maxCount) {
                modes.push(val)
                maxCount = modeMap[val]
            }
        })
        
        return modes
    }
    const sum = num.reduce((x, y) => x + y)
    const count = num.length
    const median = num => {
        num.sort((a, b) => a - b)
        const mid = num.length / 2
        return mid % 1 ? num[mid - 0.5] : (num[mid - 1] + num[mid]) / 2
    }

    return {
        mean: mean,
        median: median(num),
        range: range(largest(num), smallest(num)),
        mode: [...mode(num)] + ' each appeared 2 times',
        largest: largest(num),
        smallest: smallest(num),
        sum: sum,
        count: count
    }
    
}

console.log(stats([10, 2, 38, 23, 38, 23, 21]));

module.exports = stats
