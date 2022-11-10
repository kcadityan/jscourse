//how to communicate information from a function to outside world
//never pass information into function through global variables always use parameters

function iscolision(cordinates, cordinates2) {
    if (cordinates === cordinates2) {
        return true
    }
    else{
        return false
    }
}

console.log(iscolision(10, 100))