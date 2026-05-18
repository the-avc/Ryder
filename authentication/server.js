const passport= require ('passport');
const LocalStrategy= require('passport-local').Strategy;
passport.use(new LocalStrategy(async(USERNAME, password, done) => {
     //authenticationp logic here
     try{
        console.log('recieved credentials:',USERNAME, password);
          const user= await person.findOne({username:USERNAME});
          if(!user){
            return done(null,false,{message:'incorrect username.'} ); 
          }

     }catch (err){

     }
}))