app.post('/saveStudent',async (req, res) => {
    console.log(req.body);
    await mongodb.connect();
    const db = mongodb.db("studentDB");
    const collection = db.collection("students");
    await collection.insertOne(req.body);
    res.json({ message: "Student saved successfully" });
    
   


});