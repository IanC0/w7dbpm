exports.addMovie = async (collection, movieObj) => {
    try {
        const addEntry = await collection.insertOne(movieObj) // insert a single document into mongodb
        console.log(addEntry)
    } catch (error) {
        console.log(error);
    }
}

exports.listMovies = async (collection) => {
    try {
        const movieList = await collection.find().toArray();
        console.log(movieList);
    } catch (error) {
        console.log(error);
    }
}

