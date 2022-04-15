import mongoose from 'mongoose';

const tuitsSchema = mongoose.Schema({ "name": String,
        "handle": String,
        "date": String,
        "title": String,
        "image": String,
        "profile": String,

        "heading": String,
        "data": String,
        "coment": String,
        "likes": Number,
        "dislikes": Number,

        "retuit": Number,
        "upload": Number,
        "liked": Boolean

    }

, {collection: 'tuits'});

export default tuitsSchema;