function getCocktailByname(apiKey, name, units = 'imperial') {
    // margarita
    const path = `www.thecocktaildb.com/api/json/v1/1/search.php?name=${name}&appid=${apiKey}&units=${units}`
    return getCocktail(path)
}

function getCocktailByid(apiKey, id, units = 'imperial') {
    // 11007
    const path = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}&appid=${apiKey}&units=${units}`
    return getCocktail(path)
}
async function getCocktail(path) {
    try { 
    const res = await fetch(path)
    const json = await res.json()
    const cocktailData = {
        code: json.cod,
        cordinates: json.coord,
        taste_like: json.main.taste_like,
        description: json.Cocktail[0].description
    }
    return CocktailData
}   catch(err) {
    return err 
    }
}
export {
    getCocktailByname,
    getCocktailByid,
    getCocktail
}