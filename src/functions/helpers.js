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
        let pageData = rawData.slice(i, i + pageItemsAmount);
        result.push(pageData);
    }
    return {
        dataByPage: result,
        pagesAmount: result.length
    };
};

function getIntegersArray(length) {
    return Array.from({ length }, (_, i) => i);
}

const dataFields = {
    invoice: 'invoice',
    date: 'date',
    status: 'status',
    customerInfo: 'customerInfo',
    name: 'name',
    email: 'email',
    picUrl: 'picUrl',
}

const statusToInt = {
    paid: 0,
    refunded: 1,
    cancelled: 2
}

function fieldToInteger(val) {
    if(isNaN(val)) {
        return statusToInt[val]
    }

    return parseInt(val)
}

module.exports = {
    debounce,
    pagination,
    getIntegersArray,
    dataFields,
    statusToInt,
    fieldToInteger
}