const getFormattedDate = ( date ) => {
    const safeDate = new Date( date )
    return `${String(safeDate.getFullYear())}-${String(safeDate.getMonth() + 1).padStart(2, '0')}-${String(safeDate.getUTCDate()).padStart(2, '0')}`
}

module.exports = {
    getFormattedDate
}