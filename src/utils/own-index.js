const { yargs } = require("yargs");

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

exports.deleteMovie = async (collection, movieObj) => {
    try {
        const movieList = await collection.deleteOne({title: movieObj.title})
        console.log(movieList)
    } catch {
        console.log ("delete failed")
    }
}

exports.updateMovies = async (collection) => {
    try {
        console.log("updateMovies try")
        let updateList = await collection.updateOne({title: 'Airplane'}, {$set : {title: 'Spiderman 2'}} )
        console.log(updateList)
    } catch (error) {
        console.log("updateMovies fail")
    }
}