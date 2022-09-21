export const generateTimelineHours = (startTime: string = '00:00:00') => {
    let hours = []
    const startHour = parseInt(startTime.split(':')[0])
    const startMinute = startTime.split(':')[1]
    const startSecond = startTime.split(':')[2]

    for (let i = 0, j = startHour; i < 24; i++, j++) {
        if (j === 24) {
            j = 0
        }
        hours.push(`${j}:${startMinute}:${startSecond}`)

        if (parseInt(startMinute) < 30) {
            hours.push(`${j}:${parseInt(startMinute) + 30}:${startSecond}`)
        } else {
            hours.push(`${j + 1}:${parseInt(startMinute) - 30}:${startSecond}`)
        }

    }

    return hours
}