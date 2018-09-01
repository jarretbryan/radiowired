

export function getGenres(genreArr) {
    return { type: 'get-all-genres', payload: genreArr };
}