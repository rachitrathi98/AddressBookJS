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
        this.emailI=params[7];      
    }
    //getters and setters
    get firstName(){return this._firstName;}
    set firstName(firstName){this._firstName=firstName;}

    get lastName(){return this._lastName;}
    set lastName(lastName){this._lastName=lastName;}

    get address(){return this._address;}
    set address(address){this._address= address;}

    get city(){return this._city;}
    set city(city){ this._city= city;}

    get state(){return this._state;}
    set state(state){this._state=state;}
   
    get zip(){return this._zip;}
    set zip(zip){this._zip=zip;}
   
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){ this._phoneNumber= phoneNumber;}

    get email(){return this._email;}
    set email(emailId){this._email= email;}

    toString()
    {
        return this.firstName+" "+this.lastName; 
    }
}

let contact=new Contacts("Rachit","Rathi","Juhu","Mumbai","Maharashtra",400054,9004025063,"rachit@gmail.com");
console.log("Contacts are as follows");
console.log(contact.toString());