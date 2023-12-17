const { error } = require('console')
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const dbname = "tak5"

mongoClient.connect(connectionURL, (error, res) => {
    if (error) {
        return console.log('error has occured')
    }
    console.log('All Perf')
    const db = res.db(dbname)

    db.collection("users").insertOne({name:"Sara" , age:21},
    (error,data)=>{
        if(error){
            console.log("Error Connection");
        }
        console.log(data.insertedId)
    })

    db.collection("users").insertOne({name:"Waleed" , age:25},
    (error,data)=>{
        if(error){
            console.log("Error Connection");
        }
        console.log(data.insertedId)
    })

    db.collection("users").insertMany(
        [
            {
                name: "Ahmed",
                age: 23
            },
            {
                name: "Mohamed",
                age: 27
            },
            {
                name: "Ali",
                age: 27
            },
            {
                name: "Mona",
                age: 26
            },
            {
                name: "Mai",
                age: 27
            },
            {
                name: "Malak",
                age: 22
            },
            {
                name: "Sally",
                age: 27
            },
            {
                name: "Tarik",
                age: 26
            },
            {
                name: "Basmala",
                age: 27
            },
            {
                name: "Maha",
                age: 20
            },
        ],
        (error, data) => {
            if (error) {
                console.log("Error Connection");
            }
            console.log(data.insertedCount);
        }
    )

    db.collection("users").find({age:27}).toArray((error,data)=>{
        if (error) {
                    console.log("Error");
                }
                console.log(data);  
    })

    db.collection("users").find({age:27}).limit(3).toArray((error,data)=>{
        if (error) {
                    console.log("Error");
                }
                console.log(data);  
    })

    db.collection("users").updateOne({ _id: mongodb.ObjectId("657f12403d547af25f46034a") }, {
        $set: { name: "Sara Waleed"},
        $inc: { age: 2 }
    })
        .then((data) => {
            console.log(data.modifiedCount);
        })
        .catch((error) => {
            console.log(error);
        })

    db.collection("users").updateOne({ _id: mongodb.ObjectId("657f12403d547af25f460349") }, {
        $set: { name: "Waleed Kotb"},
        $inc: { age: 2 }
    })
        .then((data) => {
            console.log(data.modifiedCount);
        })
        .catch((error) => {
            console.log(error);
        })

    db.collection("users").updateOne({ _id: mongodb.ObjectId("657f12403d547af25f46034b") }, {
        $set: { name: "Ahmed Mohamed"},
        $inc: { age: 2 }
    })
        .then((data) => {
            console.log(data.modifiedCount);
        })
        .catch((error) => {
            console.log(error);
        })

        db.collection("users").updateOne({ _id: mongodb.ObjectId("657f12403d547af25f46034c") }, {
            $set: { name: "Mohamed Ali"},
            $inc: { age: 2 }
        })
            .then((data) => {
                console.log(data.modifiedCount);
            })
            .catch((error) => {
                console.log(error);
            })

    db.collection("users").updateMany({}, {
        $inc: { age: 10 }
    })
        .then((data) => {
            console.log(data.modifiedCount);
        })
        .catch((error) => {
            console.log(error);
        })

    db.collection("users").deleteMany({ age: 37 })
        .then((data) => {
            console.log(data.modifiedCount);
        })
        .catch((error) => {
            console.log(error);
        })


})

