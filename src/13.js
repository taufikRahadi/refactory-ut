const stats = dataset => {
    const mean = dataset.reduce((a, b) => a + b) / dataset.length
    const median = (data) => {
        data.sort((a, b) => a - b)
        const mid = count / 2
        return mid % 1 ? data[mid - 0.5] : (data[mid - 1] + data[mid]) / 2
    }
    const modes = data => {
        let modeMap = {},
        maxCount = 1,
        modes = [data[0]];

        data.forEach(function(val) {
        if (!modeMap[val]) modeMap[val] = 1;
        else modeMap[val]++;

        if (modeMap[val] > maxCount) {
            modes = [val];
            maxCount = modeMap[val];
        }
        else if (modeMap[val] === maxCount) {
            modes.push(val);
            maxCount = modeMap[val];
        }
        });
        return modes + ' each appeared ' + modes.length + ' times';
    }
    const largest = Math.max.apply(null, dataset)
    const smallest = Math.min.apply(null, dataset)
    const range = largest - smallest
    const sum = dataset.reduce((a, b) => a + b)
    const count = dataset.length

    return {
        mean,
        median: median(dataset),
        mode: modes(dataset),
        largest,
        smallest,
        range,
        sum,
        count
    }
}

module.exports = stats