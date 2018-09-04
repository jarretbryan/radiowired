export const showPlayer = (num) => {
    // console.log('hey!') 
    return {
        type: 'show-player',
        payload: num
    }
}

export const hidePlayer = () => ({
    type: 'hide-player'
})