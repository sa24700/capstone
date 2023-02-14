const express = require('express')
app = express()
require( 'dotenv').config();
const port = process.env.PORT || 8080
app.use(express.json());
const cors = require('cors');
app.use(cors());

     ////////////////////////////////
    //Database functions
    /////////////////////////////
const mongoose = require('mongoose');
const mongooseUri = process.env.MONGO_CRED;
mongoose.connect(mongooseUri,{useNewUrlParser: true},{useUnifiedTopology: true});
const userSchema = {
    firstName: String,
    lastName: String,
    phoneNum: String,
    email: String,
    orgName: String,
    userName: String,
    password: String,
    leader: Boolean,
    skills: Array,
    volLvl: String,
    volPoints:  Number 
}

const volSheetSchema = {
    userId: String,
    eventId: String,
    startDate: Date,
    startTime: String,
    endTime: String,
    relevantSkill: String
}

const eventItemSchema = {
    eventId: String,
    itemName: String,
    quantity: Number,
    public: Boolean,
    specialInfo: String

}

const skillSchema = {
    userId: String,
    skillName: String,
    professional: Boolean,
    skillLvl: String
}

const eventSchema = {
    userId: String,
    volSheets: Array,
	startDate: Date,
    endDate: Date,
    startTime: String,
    endTime: String,
    eventName: String,
    location: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    extraInfo: String
}

const users = mongoose.model("users", userSchema);
const events = mongoose.model("events", eventSchema);
const volSheet = mongoose.model("volSheet", volSheetSchema);
const usrskills = mongoose.model("usrskills", skillSchema);
const eventItems = mongoose.model("eventItems", eventItemSchema);

mongoose.connection.once("on", () =>{
  console.log("Mongoose has connected.");
});

app.post('/addUser',  async function(req,res){

     


    console.log("userName " + req.body.userName);
     try{
        var newUser;
        if(req.body.pick == false){

                firstName = req.body.userName;
                lastName = req.body.lastName;
                phoneNum = req.body.phoneNumber;
                email =  req.body.email;
                userName =  req.body.userName;
                password = req.body.password;
                leader =  req.body.pick;
                skills =  req.body.skills;
                volLvl =  "0";
                volPoints =   0;



            newUser =  new users({
                    firstName,
                    lastName,
                    phoneNum,
                    email,
                    userName,
                    password,
                    leader,
                    skills,
                    volLvl,
                    volPoints
              });
        }
        else if(req.body.pick == true){


            
                firstName =  req.body.firstName;
                lastName = req.body.lastName;
                phoneNum =  req.body.phonenumber;
                email = req.body.email;
                userName = req.body.userName;
                password = req.body.password;
                leader =  req.body.pick;
                orgName =  req.body.organization  ;       



            newUser =  new users({
                    firstName,
                    lastName,
                    phoneNum,
                    email,
                    userName,
                    password,
                    leader,
                    orgName
              });
        }     
            newUser.save();        
     }
     catch(e){
        console.log(e);
     }
      
});

app.post('/createEvent',  async function(req,res){ 
    try{
        
        console.log("eventName " + req.body.eventName);
   
            var newEvent; 
 
            userId = "test",
            volSheets = [1,2,3],

            startDate =  req.body.startDate,
            endDate =  req.body.endDate,
            startTime =  req.body.startTime,
            endTime =   req.body.endTime,
            eventName =  req.body.eventName,
 
            location =   req.body.location,
            street =   req.body.street,
            city =   req.body.city,
           
            state =   req.body.myState,
             zip =   req.body.zip,
            
            extraInfo =   req.body.description
   
   
            newEvent =  new events({
                userId,
                volSheets,
                startDate ,
                endDate,
                startTime,
                endTime ,
                eventName ,
                location ,
                street ,
                city,
                zip,
                state,
                extraInfo
            });
        newEvent.save();   
    }
    catch(e){
      console.log(e);
    }
   
});

app.get('/showAllEvents',  async function(req,res){ 
    try{
      const eventsList = await events.find({});
       res.end(JSON.stringify(eventsList));
    }
    catch(e){
      console.log(e);
    }
});

app.get('/showAllEvents/:id',  async function(req,res){ 
    try{
      
      const userEventsList = await events.find({userName: req.params.id});
       res.end(JSON.stringify(userEventsList));
    }
    catch(e){
      console.log(e);
    }
});

app.get('/showAllVolunteers',  async function(req,res){ 
    try{
      const volunteerList = await users.find({leader:false});
       res.end(JSON.stringify(volunteerList));
    }
    catch(e){
      console.log(e);
    }
});

app.get('/deleteEvent',   function(req,res){

    try{
      
      beginner.deleteOne({name: req.query.eventId}).then(function(){
      
      res.redirect('/');
      });

    }
    catch(e){
      console.log(e);
    }
});




// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
