export function timeToDecimal(time: string) {
    var arr = time.split(':');
    var dec = (parseInt(arr[1]) / 6) * 10;

    return parseFloat(parseInt(arr[0], 10) + '.' + (dec < 10 ? '0' : '') + dec);
} 