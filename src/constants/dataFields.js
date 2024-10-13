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

module.exports = {
    dataFields,
    statusToInt
}