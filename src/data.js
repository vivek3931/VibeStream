export const API_KEY = 'AIzaSyBPnGmGo23idDSppGsOIOA2i-NLlgAcwVM'

export const valueConverter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+ "K"
    }
    else{
        return value
    }

}


