module.exports = {
    //Truong hop tra ve 1 list Object
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map( mongooses => mongooses.toObject() );
    },
    //Truong hop tra ve 1 Object
    mongooseToObject: function (mongoose) {  
        return mongoose ?  mongoose.toObject() : mongoose;
    },
};