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
        return this.firstName+" "+this.lastName+" "+this.phoneNumber; 
    }
}
try{
let contact=new Contacts("Rachit","Rathi","Juhu","Mumbai","Maharashtra",400054,919004025062,"rachit@gmail.com");
console.log("Contacts are as follows");
console.log(contact.toString());

let AddressBookArray = new Array();
AddressBookArray.push(new Contacts("Mohit","Rathi","Goregaon","Mumbai","Maharashtra",416115,919004025066,"mohit@gmail.com"));
AddressBookArray.push(new Contacts("Parth","Sharma","Eden","Kolkata","WestBengal",416116,919004025067,"parth@gmail.com"));
AddressBookArray.push(new Contacts("Mohan","Patil","Jamnagar","Rajkot","Gujarat",416110,919004025064,"mohan@gmail.com"));
AddressBookArray.push(new Contacts("Vishal","Singh","MallRoad","Shimla","HimachalPradesh",416117,919004025068,"vishal@gmail.com"));
AddressBookArray.push(new Contacts("Rahul","Trivedi","Baner","Pune","Maharashtra",416901,919004025098,"rahul@gmail.com"));
console.log("Contacts in Addressbook Array are: ")
console.log(AddressBookArray.toString());

//UC4: Finding contatcts and updating
let checkIfPresent = AddressBookArray.findIndex(contact=>contact.firstName=="Parth");
AddressBookArray[checkIfPresent].phoneNumber=919890045068;//Updating Contact

//UC5: Deleting Contact by name
AddressBookArray.splice([checkIfPresent],1);
console.log(AddressBookArray.toString());

//UC6: Check the number of contacts in the array
var contactCount=0;
    function totalContacts(AddressBookArray)
    {
       if(AddressBookArray!=null)
       contactCount++;
       return contactCount;
    }
    AddressBookArray.reduce(totalContacts,1);
    console.log("Total count of contacts is: "+contactCount);

    //UC7: Check for duplicate contacts 
    /*let contactNew=new Contacts("Rachit","Sharma","Juhu","Mumbai","Maharashtra",400054,919004025062,"rachit@gmail.com");
     if(AddressBookArray.find(contact=>contactNew.firstName==contactNew.firstName))
     throw "Contact already exists";
    else
    AddressBookArray.push(contactNew);*/

    //UC8: Search Contact by city or state
    AddressBookArray.filter(contact=>contact.city.includes("Mumbai")).forEach(contact=>console.log(contact.toString()));
    
    //UC9
    let ContactMap=new Map();
    AddressBookArray.forEach(contact=>ContactMap.set(contact.firstName, contact.state));
    ContactMap.forEach( (value,key,map) => 
    { 
        if (value == "Maharashtra") 
            console.log("The person from Maharashtra is: ", key);
    }); 

    //UC10: Get person count by city or state
    function PersonCountByState(State)
    {
    let countByState = AddressBookArray.reduce(((count,contact) => {if(contact.state == State) return count+1; return count;}),0);
    return countByState;
    }
    console.log("The number of contacts in Maharshtra are: "+PersonCountByState("Maharashtra"));
}
catch(e){
    console.log(e);
}

