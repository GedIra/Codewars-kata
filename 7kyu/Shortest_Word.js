function findShort(s){
    const arr = s.split(" ")
    count = arr[0].length
    arr.forEach(element => {
        if(element.length < count){
            count = element.length
        
    }});
    return count
}