/**
 * Created by chen4_000 on 1/31/2015.
 */

var User = App.model('user');
var Users = App.model('Users');

function SignIn (req,res){
    Users.findOne({Email:req.body.email}, function (err,doc){
        if(err){
            res.status(500).send("Problem occurred: "+err)
        }
        else if(doc !='undefined' && doc != null){
            if(doc._doc.Password==req.body.password){
                res.status(200).send(doc);
            }
            else {
                res.status(500).send("There was an error with your E-Mail/Password combination. Please try again.")
            }

        }
        else
        {
            res.status(500).send("That User doesn't exist.")

        }
    });
}

function Register (req,res){

 Users.find({Email:req.body.email}, function (err,docs){
        if(err){

        }
        else if(docs !='undefined' && docs.length>0){
            res.status(500).send("Email already exists")
        }
         else
            {
                var userModel =CreateUserModel(req,res);

            }
    })
}

function CreateUserModel(req,res){
    var newUser = User({
        Email : req.body.email,
        Username : req.body.username,
        Password : req.body.password
    });
    newUser.save(function(err){
        if(err){
             console.log(err);
            res.status(500).send("something wrong "+err)
        }
        else{
            res.status(200).send(newUser);
        }
    });

}


exports.SignIn =SignIn;
exports.Register = Register;