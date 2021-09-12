const useGenres = (selectedGenres) => {  //creating a custom hook
    if (selectedGenres.length > 1) {
        const GenereIds = selectedGenres.map((g) => g.id);
        return GenereIds.reduce((acc, curr) => acc + ',' + curr) //separating the gnres using comma  
    } else {
        return ""
    }
}

export default useGenres