const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@dicasparadevs.4hmtv7c.mongodb.net/?retryWrites=true&w=majority`, (err) => {
        if(err) {
            return console.log(`An error occurred: ${err}`)
        }

        return console.log(`Database connection successfully!`)
    })
}

module.exports = connectToDatabase;