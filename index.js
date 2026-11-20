
function isPrime(a){

    let count = 0;

    for (let i = 1; i <= a; i++) {
        let division = a % i;

        if(division == 0){
            count = count + 1;
        }
        
    }

    if(count == 2){
        return true
    }
    else{
        return false
    }
}

module.exports = {
    isPrime
}