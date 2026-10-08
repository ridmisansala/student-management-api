app.get('/sortBy/:order',async (req, res)=>{
    const order = req.params.order; 
    const sort={
        firstName:order==='asc'? 1:-1
    }
    
    await mongodb.connect();
    const db = mongodb.db("studentDB");
    const userArray=await db.collection("students").find().sort(sort).toArray();   
    res.json(userArray);


});

app.get('/searchStudents/:searchTerm', async (req, res) => {
      try {
        console.log("Searching students with term:", req.params.searchTerm);
   
    const query = req.params.searchTerm;
    await mongodb.connect();
    const db = mongodb.db("studentDB");
    const collection = db.collection("students");
   const students = await collection.find({
            $or: [
                { firstName: { $regex: query, $options: "i" } },
                { lastName: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } }
            ]
        }).toArray();
    res.json(students);
     } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});