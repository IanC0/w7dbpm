const yargs = require('yargs')

const {connection, client} = require("./db/connection.js");
const {addMovie, listMovies, updateMovies, deleteMovie} = require("./utils/own-index.js");

const app = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor})
        console.log("successfully added new document to db")
    } else if (yargsObj.list) {
        await listMovies(collection)
    } else if (yargsObj.delete) {
        await deleteMovie(collection, {title: yargsObj.title}) 
     } else if (yargsObj.update) {
         await updateMovies(collection, {title: yargsObj.title}, yargsObj.newTitle)  
     } else {
        console.log("Incorrect Command")
    } 
    await client.close()
}

app(yargs.argv)