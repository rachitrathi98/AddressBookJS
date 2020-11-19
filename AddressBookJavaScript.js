console.log("Welcome to Address Book Creation");
class Contacts
{
    constructor(...params)
    {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.emailId=params[7];      
    }
    //getters and setters
    get firstName(){return this._firstName;}
    set firstName(firstName){
        let fname=RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(fname.test(firstName))
        this._firstName=firstName;
        else
        throw "Enter the first name properly";
    }
    get lastName(){return this._lastName;}
    set lastName(lastName){
         let lname=RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(lname.test(lastName))
        this._lastName=lastName;
        else
        throw "Enter the last name properly";
        }

    get address(){return this._address;}
    set address(address){
        let addressValid = RegExp("^[A-Za-z]{4,}$");
        if(addressValid.test(address))
            this._address= address;
        else
        throw "Enter the address properly";
        }

    get city(){return this._city;}
    set city(city){ 
        let cityValid = RegExp("^[A-Za-z]{4,}$");
        if(cityValid.test(city))
        this._city= city;
        else
        throw "Enter the city properly";
        }

    get state(){return this._state;}
    set state(state){
        let stateValid = RegExp("^[A-Za-z]{4,}$");
        if(stateValid.test(state))
        this._state=state;       
         else
        throw "Enter the state properly";
    }   
    get zip(){return this._zip;}
    set zip(zip){
        let zipValid = RegExp("^[0-9]{6}$");
        if(zipValid.test(zip))
            this._zip= zip;
        else
        throw "Enter a valid zip";
       }
   
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){ 
        let phoneNoValid = RegExp("^[0-9]{2}[0-9]{10}$");
        if(phoneNoValid.test(phoneNumber))
        this._phoneNumber= phoneNumber;
        else
        throw "Enter a valid phone number";
        }

    get emailId(){return this._email;}
    set emailId(emailId){
        let emailValid = RegExp("^[A-Za-z]+[\w.+-]*[@]{1}[A-Za-z0-9]+[.][a-z]{2,}[.]?[a-z]*$");
        if(emailValid.test(emailId))
        this._emailId= emailId;
        else
        throw "Enter a valid email ID";
        }

    toString()
    {
        return this.firstName+" "+this.lastName; 
    }
}
try{
let contact=new Contacts("Rachit","Rathi","Juhu","Mumbai","Maharashtra",400054,919004025062,"rachit@gmail.com");
console.log("Contacts are as follows");
console.log(contact.toString());
}
catch(e){
    console.log(e);
}
