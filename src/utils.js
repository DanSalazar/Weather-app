export function formatDate(date) {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    // Passing the unix timestamp to date
    let dateParsed = new Date(date * 1000).getDay();
    return days[dateParsed];
}
