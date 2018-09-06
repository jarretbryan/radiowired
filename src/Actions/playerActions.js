export const showPlayer = (streamInfoObj) => {
    // console.log('hey!') 
    return {
        type: 'show-player',
        payload: streamInfoObj
    }
}

export const hidePlayer = () => ({
    type: 'hide-player'
})