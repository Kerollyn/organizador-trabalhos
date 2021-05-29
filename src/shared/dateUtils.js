import moment from 'moment';

export const getFormattedDate = ( date = new Date() ) => {
    const safeDate = new Date( date )
    return `${String(safeDate.getFullYear())}-${String(safeDate.getMonth() + 1).padStart(2, '0')}-${String(safeDate.getUTCDate()).padStart(2, '0')}`
}

export const getViewFormattedDate = ( date ) => moment(getFormattedDate( date )).format('DD/MM/YYYY')

export const getDaysUntilDeadline = ( deadline ) => {
    const now = new Date( getFormattedDate() )
    now.setUTCHours( 3, 0, 0, 0 )
    const safeDeadLine = new Date( getFormattedDate( deadline ) )
    safeDeadLine.setUTCHours( 3, 0, 0, 0 )
    return Math.round( ( safeDeadLine - now ) / ( 1000 * 60 * 60 * 24 ) )
}