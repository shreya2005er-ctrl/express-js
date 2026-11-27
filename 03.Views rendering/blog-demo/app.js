import express from 'express';
import blogRoutes from './routes/blogRoutes.js';

const app= express();

app.set("view engine","pug");
app.set("views","./views");

const PORT = 3000;

app.use(express.static('public'));

app.use('/', blogRoutes);

app.get("/profile",(req,res)=>{
    const user = {
        name: "Sonam Soni",
        age: 36,
        profession: "Developer",
        skills: ["NodeJs","Express JS",
            "React"]
    }
    res.render('profile',{
        title: 'User Profile',
        user: user
    })
})

app.listen(PORT,()=>console.log("Server is running on PORT 3000"))