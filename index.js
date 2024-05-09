const express = require("express");
const app = express();
const multer = require('multer')
const path = require('path')
const mongoose = require("mongoose");
//const UserModel = require("./models/Users");
const TestModel = require("./models/testing");
const RegisterModel = require("./models/register");
const AdminModel=require("./models/admin");  //do changes
const BookModel = require("./models/book");
const JobModel = require("./models/Job");
const GuideModel = require("./models/addguide");
const PackageModel = require("./models/addpackage");
const GoaPackageModel = require("./models/addgoapackage");
const SearchModel = require("./models/search");
const BlogModel = require("./models/addblog");
const WildModel = require("./models/addwild");
const HeriModel = require("./models/addheri");
const PilModel = require("./models/addpil");
const HillModel = require("./models/addhill");
const AdvenModel = require("./models/addadven");
const BeachModel = require("./models/addbeach");
const ImgModel = require("./models/addimg");
const AmritModel = require("./models/addamrit");
const GoaModel = require("./models/addgoa");
const SikkimModel = require("./models/addsikkim");
const MunnarModel = require("./models/addmunnar");
const ContactModel = require("./models/contact");
const ReviewModel = require("./models/review");
const ManaliModel = require("./models/addmanali");

var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const stripe = require('stripe')('sk_test_51N55EmSJyRvLqpIArhodBmyni2H9iDngmUyywHlu7itnbaqJ4p17m1hb7NnOt9bOYPZR3JjzD3cpdhq0EQeJD7xp00fEwHmYuS')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views","./views")
app.use(express.static('public'))

const cookieparsers =require("cookie-parser");
app.use(cookieparsers());
const oneDay = 1000 * 60 * 60 * 24;
const sessions=require('express-session');

app.use(sessions({
  secret: "mykey",
  saveUninitialized:true,
  cookie:{ maxAge: oneDay },
  resave: false
}));

var session;

mongoose.connect(
"mongodb+srv://admin:admin@cluster0.v77p3iw.mongodb.net/college" , {
    useNewUrlParser: true, } 
    );



    const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

var  storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,"public/images")
  },
  filename: function(req,file,cb){
      cb(null, file.fieldname + "-" + Date.now()+".jpg")
  }
})
const maxSize = 1*1000*1000;
var upload =multer({
  storage: storage,
  limits:{fileSize:maxSize},
  fileFilter: function(req, file,cb){

      var filetypes = /jpeg|jpg|png/;
      var mimetype=filetypes.test(file.mimetype);
      var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

      if(mimetype && extname){
          return cb(null,true);
      }
      cb("ERR:" +"following filetypes -" +filetypes);
  }
}).single("pic");






 app.get("/", (req, res) => {      //open at a time of local host 5050

  session = req.session;
  if(session.userid)
  {
    res.redirect("/board")
  }
  else
  {
   res.render("adminlogin")
  }
 })

 app.get("/board",(req,res)=>{
  session = req.session;
  if(session.userid)
  {
    res.render("/board")
  }
  else
  {
  res.render("/")  
  }
                           //open after login
})


  app.post("/board",(req,res)=>{
    console.log(req.body)
    AdminModel.find({username:req.body.username ,password: req.body.password}).then((data) => {
  
    
      if(data.length>0)
      {
        session=req.session;
        session.username=req.body.username;
        session.userid=req.body.username;
        console.log(req.session)
        res.redirect("board")
      }
      else{
        res.redirect("/")
        
      }
  
     })
  }
  )



app.get("/getAllbookings",(req,res)=>{
  BookModel.find().then((data)=>          //booking tour
  {
    res.render("booking",{udata:data})
  })
});




app.get("/getAllUsers",(req,res)=>{
  let ustatus=req.query.valid
  console.log(ustatus)
 RegisterModel.find().then((data)=>          //Register table
  {
    res.render("register",{udata1:data , msg:ustatus})
  })
});



app.get("/getAlljobs",(req,res)=>{
  JobModel.find().then((data)=>          //guides table
   {
     res.render("Job",{udata2:data})
   })
 });
 

 app.get("/getAllcontact",(req,res)=>{
  ContactModel.find().then((data)=>          //guides table
   {
     res.render("contact",{udata22:data})
   })
 });
 


 
app.get("/getUsers1", (req, res) => {
 RegisterModel.find().then((data) => {  //Admin dashboard
        res.json(data);
    
       })
});



app.get("/getUsers", (req, res) => {
    AdminModel.find().then((data) => {  //Admin dashboard
          res.json(data);
      
         })
  });

app.get("/removeUser/:rid",(req,res)=>{
  RegisterModel.findOneAndRemove({_id: req.params.rid}).then((data)=>{
    res.redirect("/getAllusers")
  })
})


  app.get("/editUser/:id",(req,res)=>{
    console.log(req.params.id)
    RegisterModel.findOne({_id:req.params.id}).then((data)=>{      //edit delete of register
      console.log(data)
      res.render("edituser",{udata1:data})
    })
  })

  
app.post("/updateUser",async(req,res)=>
{
  let string="ok"
  const updatedDocument = await RegisterModel.findOneAndUpdate({_id:req.body.uid},req.body,{
    upsert:true,
    new:true,                                                 //edit of register
  })
  console.log(updatedDocument,req.body.uid)
  res.redirect("/getAllusers?valid=" + string)
})









app.post("/register", async (req, res) => {
console.log(req.body.userReg)

const newUReg = new RegisterModel(req.body.userReg);
await newUReg.save();


//const newUser1 = new RegisterModel(req.body);
await newUReg.save();

// res.json(user);
//res.redirect("/")

})




app.post("/book", async (req, res) => {
  console.log(req.body.userBook)
  
  const newUBook = new BookModel(req.body.userBook);
  await newUBook.save();
  
  
  //const newUser1 = new BookModel(req.body);
  // await newUBook.save();
  
  // res.json(user);
  //res.redirect("/")
  
  })

  app.post("/Job", async (req, res) => {
    console.log(req.body.userJob)
    
    const newUJob = new JobModel(req.body.userJob);
    await newUJob.save();
    
    
    //const newUser1 = new BookModel(req.body);
    await newUJob.save();
    
    // res.json(user);
    //res.redirect("/")
    
    })

    app.post("/Contact", async (req, res) => {
      console.log(req.body.usercontact)
      
      const newUContact = new ContactModel(req.body.usercontact);
      await newUContact.save();
      
      
      //const newUser1 = new BookModel(req.body);
      await newUContact.save();
      
      // res.json(user);
      //res.redirect("/")
      
      })
  

    app.get("/addguide", (req, res) => {      //open at a time of local host 5050
      res.render("addguide")
    })

    app.get("/getGuide", (req, res) => {
      GuideModel.find().then((data) => {  
            res.json(data);
        
           })
    });

app.get("/getAllguides",(req,res)=>{
  GuideModel.find().then((data)=>          //guides table
   {
     res.render("allguide",{udata3:data})
   })
 });
 
    app.post("/createGuide",async(req,res)=>
    {
      console.log(req.body)           //when we made new form from dashboard
      const newguide=new GuideModel(req.body);
      await newguide.save();
    })

    app.get("/addpackage", (req, res) => {      //open at a time of local host 5050
      res.render("addpackage")
    })

    app.get("/getpackage", (req, res) => {
      PackageModel.find().then((data) => {  
            res.json(data);
        
           })
    });


    app.get("/getAllpackage",(req,res)=>{
      PackageModel.find().then((data)=>          //guides table
       {
         res.render("allpackage",{udata4:data})
       })
     });
     
 

    app.post("/createPackage",async(req,res)=> {
      upload(req,res,async function(err){
        if(err){
            res.send(err)
        }
        else
        {
            const finalData={...req.body, pic:req.file.filename }
    // userMongo is a class
    const newpackage=new PackageModel(finalData);
     await newpackage.save();
     res.send("success," +req.file.filename)
    // let usermsg = encodeURIComponent("registration_done");
    // res.redirect("submit/?msg=" + usermsg );
    // res.render("allpackage")
    // res.redirect("allpackage")
}
})
      // console.log(req.body)           //when we made new form from dashboard
      // const newpackage=new PackageModel(req.body);
      // await newpackage.save();
    })

    app.get("/goapackage/:uid",(req,res)=>
    {
      GoaPackageModel.find({name:req.params.uid}).then((data)=>{
        res.json(data);
      })
    })

    app.get("/addgoapackage", (req, res) => {      //open at a time of local host 5050
      res.render("addgoapackage")
    })

    app.get("/getgoapackage", (req, res) => {
      GoaPackageModel.find().then((data) => {  
            res.json(data);
        
           })
    });


    app.get("/getallgoapackage",(req,res)=>{
      GoaPackageModel.find().then((data)=>          //guides table
       {
         res.render("allgoapackage",{udata5:data})
       })
     });
     
 

    app.post("/creategoaPackage",async(req,res)=>
    {
      console.log(req.body)           //when we made new form from dashboard
      const newgoapackage=new GoaPackageModel(req.body);
      await newgoapackage.save();
    })
//payment

app.post('/create-checkout-session', async (req, res) => {
  console.log(req.body)
  const newUBook = new BookModel(req.body);
  await newUBook.save();
  //return false
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: req.body.submit,
          },
          unit_amount: req.body.rate*100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/paymentsuccess',
    cancel_url: 'http://localhost:4242/cancel',
  });

  res.redirect(303, session.url);
});




app.post("/create", async (req, res) => {
   
  const newUser = new TestModel(req.body);
  await newUser.save();

  const newAdmin = new AdminModel(req.body);
  await newAdmin.save();

  const newUser1 = new RegisterModel(req.body);
  await newUser1.save();

  const newJob = new JobModel(req.body);
  await newJob.save();

  const newContact = new ContactModel(req.body);
  await newContact.save();

  const newBook = new BookModel(req.body);
  await newBook.save();
 // res.json(user);
  res.redirect("/")
});

app.listen(5050, () => {
  console.log("SERVER RUNS PERFECTLY! hahaha");
});




app.post("/loginuser", async (req,res) =>
{
  let string ="ok"
  RegisterModel.find({email:req.body.email,password:req.body.pass}).then((data)=>
  {
    res.json(data);
    console.log(data)
  });
})

app.get("/getMyBookings/:userid",(req,res)=>{
  console.log(req.params.userid)
  BookModel.find({user_id:req.params.userid}).then((data)=>{
    res.json(data);
  })
})


app.post("/search", async (req, res) => {--
  console.log(req.body.userSearch)
  
  const newUSearch = new SearchModel(req.body.userSearch);
  await newUSearch.save();
  
  
  //const newUser1 = new BookModel(req.body);
  await newUSearch.save();
  
  // res.json(user);
  //res.redirect("/")
  
  })

  app.get("/getsearch", (req, res) => {
    SearchModel.find().then((data) => {  
          res.json(data);
      
         })
  });
  app.get("/package/:uid",(req,res)=>
    {
      SearchModel.find({name:req.params.uid}).then((data)=>{
        res.json(data);
      })
    })

    app.get("/getsinglePackages/:uid",(req,res)=>{
      GoaPackageModel.find({_id:req.params.uid}).then((data)=>{
      res.json(data);
      })
      
      })



      app.get("/addblog", (req, res) => {      //open at a time of local host 5050
        res.render("addblog")
      })
  
      app.get("/getblog", (req, res) => {
        BlogModel.find().then((data) => {       //get data from frnt end
              res.json(data);
          
             })
      });
  
  app.get("/getAllblog",(req,res)=>{
    BlogModel.find().then((data)=>          // table
     {
       res.render("allblog",{udata5:data})
     })
   });
   
      app.post("/createBlog",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newblog=new BlogModel(req.body);
        await newblog.save();
      })


      app.get("/getsingleblog/:uid",(req,res)=>{
        BlogModel.find({_id:req.params.uid}).then((data)=>{
        res.json(data);
        })
      })



      app.get("/goapackage/:uid",(req,res)=>     //for search
      {
        GoaPackageModel.find({name:req.params.uid}).then((data)=>{
          res.json(data);
        })
      })


  
      app.get("/addwild", (req, res) => {      //open at a time of local host 5050
        res.render("addwild")
      })
  
      app.get("/getwild", (req, res) => {
        WildModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
  
      app.get("/getallwild",(req,res)=>{
      WildModel.find().then((data)=>          //guides table
         {
           res.render("allwild",{urdata1:data})
         })
       });
       
   
  
      app.post("/createWild",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newWild=new WildModel(req.body);
        await newWild.save();
      })



      app.get("/addheri", (req, res) => { 
        res.render("addheri")
      })
  
      app.get("/getheri", (req, res) => {
        HeriModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
      app.get("/getallheri",(req,res)=>{
      HeriModel.find().then((data)=>          //guides table
         {
           res.render("allheri",{urdata2:data})
         })
       });
       
      app.post("/createHeri",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newHeri=new HeriModel(req.body);
        await newHeri.save();
      })

      app.get("/addpil", (req, res) => { 
        res.render("addpil")
      })
  
      app.get("/getpil", (req, res) => {
        PilModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
      app.get("/getallpil",(req,res)=>{
      PilModel.find().then((data)=>          //guides table
         {
           res.render("allpil",{urdata3:data})
         })
       });
       
      app.post("/createPil",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newPil=new PilModel(req.body);
        await newPil.save();
      })

//forgot password

      app.post("/mail",async (req,res)=>{
        //console.log(req.body.tomail)
        RegisterModel.find({email:req.body.tomail}).then((data)=>{
          console.log(data.length);
          if(data.length<1){
          res.status(200).json({message: 'Email not found', type: 'fail'})

        }
          else {
      
       
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'itzaditisharma@gmail.com',
            pass: 'xdeskykafumomkna'
          }
        });
        
        var mailOptions = {
          from: 'itzaditisharma@gmail.com',
          // to: 'ishachaudhary3699@gmail.com',
          to: `${data[0].email}`,
          subject: 'Sending Email using Node.js',
          text: `That was easy! ${data[0].password}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.status(200).json({message: 'Email successfull sent!', type: 'success'})
          }
      })
    })



      app.get("/addhill", (req, res) => { 
        res.render("addhill")
      })
  
      app.get("/gethill", (req, res) => {
        HillModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
      app.get("/getallhill",(req,res)=>{
      HillModel.find().then((data)=>          //guides table
         {
           res.render("allhill",{urdata4:data})
         })
       });
       
      app.post("/createHill",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newhill=new HillModel(req.body);
        await newhill.save();
      })

      app.get("/addadven", (req, res) => { 
        res.render("addadven")
      })
  
      app.get("/getadven", (req, res) => {
        AdvenModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
      app.get("/getalladven",(req,res)=>{
      AdvenModel.find().then((data)=>          //guides table
         {
           res.render("alladven",{urdata5:data})
         })
       });
       
      app.post("/createAdven",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newadven=new AdvenModel(req.body);
        await newadven.save();
      })


      app.get("/addbeach", (req, res) => { 
        res.render("addbeach")
      })
  
      app.get("/getbeach", (req, res) => {
        BeachModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
      app.get("/getallbeach",(req,res)=>{
      BeachModel.find().then((data)=>          //guides table
         {
           res.render("allbeach",{urdata6:data})
         })
       });
       
      app.post("/createBeach",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newbeach=new BeachModel(req.body);
        await newbeach.save();
      })

      app.get("/addimg", (req, res) => { 
        res.render("addimg")
      })
  
      app.get("/getimg", (req, res) => {
        ImgModel.find().then((data) => {  
              res.json(data);
          
             })
      });
  
      app.get("/getallimg",(req,res)=>{
      ImgModel.find().then((data)=>          //guides table
         {
           res.render("allimg",{urdata7:data})
         })
       });
       
      app.post("/createImg",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newimg=new ImgModel(req.body);
        await newimg.save();
      })


      app.get("/addamrit", (req, res) => {      //open at a time of local host 5050
        res.render("addamrit")
      })
  
      app.get("/getamrit", (req, res) => {
        AmritModel.find().then((data) => {       //get data from frnt end
              res.json(data);
          
             })
      });
  
  app.get("/getAllamrit",(req,res)=>{
    AmritModel.find().then((data)=>          // table
     {
       res.render("allamrit",{udata11:data})
     })
   });
   
      app.post("/createAmrit",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newamrit=new AmritModel(req.body);
        await newamrit.save();
      })


      app.get("/addgoa", (req, res) => {      //open at a time of local host 5050
        res.render("addgoa")
      })
  
      app.get("/getgoa", (req, res) => {
        GoaModel.find().then((data) => {       //get data from frnt end
              res.json(data);
          
             })
      });
  
  app.get("/getAllgoa",(req,res)=>{
    GoaModel.find().then((data)=>          // table
     {
       res.render("allgoa",{udata12:data})
     })
   });
   
      app.post("/createGoa",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newgoa=new GoaModel(req.body);
        await newgoa.save();
      })


      app.get("/addsikkim", (req, res) => {      //open at a time of local host 5050
        res.render("addsikkim")
      })
  
      app.get("/getsikkim", (req, res) => {
        SikkimModel.find().then((data) => {       //get data from frnt end
              res.json(data);
          
             })
      });
  
  app.get("/getAllsikkim",(req,res)=>{
    SikkimModel.find().then((data)=>          // table
     {
       res.render("allsikkim",{udata13:data})
     })
   });
   
      app.post("/createSikkim",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newsikkim=new SikkimModel(req.body);
        await newsikkim.save();
      })


      app.get("/addmunnar", (req, res) => {      //open at a time of local host 5050
        res.render("addmunnar")
      })
  
      app.get("/getmunnar", (req, res) => {
        MunnarModel.find().then((data) => {       //get data from frnt end
              res.json(data);
          
             })
      });
  
  app.get("/getAllmunnar",(req,res)=>{
    MunnarModel.find().then((data)=>          // table
     {
       res.render("allmunnar",{udata14:data})
     })
   });
   
      app.post("/createMunnar",async(req,res)=>
      {
        console.log(req.body)           //when we made new form from dashboard
        const newmunnar=new MunnarModel(req.body);
        await newmunnar.save();
      })


      // reviews
app.post("/review", async (req, res) => {
  console.log(req.body.review)

  const newrev = new ReviewModel(req.body.review);
  await newrev.save();

})
app.get("/getallReviews", (req, res) => {
  ReviewModel.find().then((data) => {

    res.render("allreviews", { udata19: data })
  })
});
app.get("/getreview", (req, res) => {
  ReviewModel.find().then((data) => {       //get data from frnt end
        res.json(data);
    
       })
});



app.get("/addmanali", (req, res) => {      //open at a time of local host 5050
  res.render("addmanali")
})

app.get("/getmanali", (req, res) => {
  ManaliModel.find().then((data) => {       //get data from frnt end
        res.json(data);
    
       })
});

app.get("/getAllmanali",(req,res)=>{
ManaliModel.find().then((data)=>          // table
{
 res.render("allmanali",{udata18:data})
})
});

app.post("/createManali",async(req,res)=>
{
  console.log(req.body)           //when we made new form from dashboard
  const newmanali=new ManaliModel(req.body);
  await newmanali.save();
})





app.get("/logout", (req, res) => {
 
  req.session.destroy((err)=>{
    res.redirect("/")
  })
    
       
});




