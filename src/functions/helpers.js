function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const pagination = (rawData = [], pageItemsAmount = 8) => {
    let result = [];
    for (let i = 0; i < rawData.length; i += pageItemsAmount) {
        let chunk = rawData.slice(i, i + pageItemsAmount);
        result.push(chunk);
    }
    return {
        dataByPage: result,
        pagesAmount: result.length
    };
};

function integersArray(length) {
    return Array.from({ length }, (_, i) => i);
}

module.exports = {
    debounce,
    pagination,
    integersArray
}