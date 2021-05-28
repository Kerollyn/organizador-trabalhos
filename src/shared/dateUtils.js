import moment from 'moment';

export const getFormattedDate = ( date ) => {
    const safeDate = new Date( date )
    return `${String(safeDate.getFullYear())}-${String(safeDate.getMonth() + 1).padStart(2, '0')}-${String(safeDate.getUTCDate()).padStart(2, '0')}`
}

export const getViewFormattedDate = ( date ) => moment(getFormattedDate( date )).format('DD/MM/YYYY')