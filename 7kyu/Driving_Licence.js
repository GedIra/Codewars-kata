function driver(data) {
    coded = ""
    let digit = ''
    while(data[2].length < 5) data[2] = data[2].toUpperCase() +'9' //surname
    data[3] = data[3].split('-') 

    
    digit = Number(data[3][2] % 10) // digit

    data[3][2] = Math.floor(Number(data[3][2])% 100) // decade

    data[3][1] ={ 'Jan': '01', 'Feb': '02','Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
    'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'}[data[3][1].slice(0,3)]

    coded = '' + data[2] + digit + data[3][1] + (data[4]=='M'?data[3][1]:(Number(data[3][1][0])+5+''+data[3][1][1]))//+ data[3][0] + 
            digit

    return (coded)
}

console.log(driver(["Johanna","","Gibbs","13-Dec-1981","F"]))