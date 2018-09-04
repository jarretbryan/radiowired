export const showPlayer = () => {
    console.log('hey!') 
    return {
        type: 'show-player'
    }
}

export const hidePlayer = () => ({
    type: 'hide-player'
})