import moment from 'moment';

export const getFormattedDate = ( date = new Date() ) => {
    const safeDate = new Date( date )
    const returnValue =  `${String(safeDate.getUTCFullYear())}-${String(safeDate.getUTCMonth() + 1).padStart(2, '0')}-${String(safeDate.getUTCDate()).padStart(2, '0')}`
    return returnValue
}

export const getViewFormattedDate = ( date ) => moment(getFormattedDate( date )).format('DD/MM/YYYY')

export const dateDiff = ( untilDate, fromDate ) => Math.round( ( untilDate - fromDate ) / ( 1000 * 60 * 60 * 24 ) )

export const getDaysUntilDeadline = ( deadline ) => {
    const now = new Date( getFormattedDate() )
    now.setUTCHours( 3, 0, 0, 0 )
    const safeDeadLine = new Date( getFormattedDate( deadline ) )
    safeDeadLine.setUTCHours( 3, 0, 0, 0 )
    return dateDiff( safeDeadLine, now )
}
