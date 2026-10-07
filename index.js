app.post('/saveStudent',async (req, res) => {
    console.log(req.body);
    await mongodb.connect();
    const db = mongodb.db("studentDB");
    const collection = db.collection("students");
    await collection.insertOne(req.body);
    res.json({ message: "Student saved successfully" });
    
   


});
app.get(('/students'),async (req, res) => {
    await mongodb.connect();
    const db = mongodb.db("studentDB");
    const collection = db.collection("students");
    const students = await collection.find({}).toArray();
    res.json(students);
});
app.delete('/removeStudent/:studentId', async (req, res) => {
    const studentId = req.params.studentId;
    await mongodb.connect();
    const db = mongodb.db("studentDB");
    const collection = db.collection("students");
    await collection.deleteOne({ studentId: studentId });
    res.json({ message: "Student removed successfully" });
});