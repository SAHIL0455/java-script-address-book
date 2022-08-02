console.log("Welcome to Addresss Book");
class Contact {
  constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  toString() {
    return ("First Name : " +this.firstName +", Last Name : " +this.lastName +", Address : " +this.address +", City : " +this.city +", State : " +this.state +", Zip : " +this.zip + ", Phone Number : " +this.phoneNumber +", Email : " +this.email);
  }
}

function editName(firstNames,property,newValue) {
    switch (property) {
        case "FirstName":
            contactList.find((Contact)=>Contact.firstName==firstNames).firstName = newValue;
            break;
        case "LastName":
            contactList.find((Contact)=>Contact.firstName==firstNames).lastName = newValue;
            break;
        case "Address":
            contactList.find((Contact)=>Contact.firstName==firstNames).address = newValue;
            break;
        case "City":
            contactList.find((Contact)=>Contact.firstName==firstNames).city = newValue;
            break;
        case "State":
            contactList.find((Contact)=>Contact.firstName==firstNames).state = newValue;
            break;
        case "Zip":
            contactList.find((Contact)=>Contact.firstName==firstNames).zip = newValue;
            break;
        case "PhoneNumber":
            contactList.find((Contact)=>Contact.firstName==firstNames).phoneNumber = newValue;
            break;
        case "EmailID":
            contactList.find((Contact)=>Contact.firstName==firstNames).email = newValue;
            break;
        }
}

function deleteContact(firstNames1,property){
    switch (property) {
        case "FirstName":
            contactList.find((Contact)=>Contact.firstName==firstNames1).firstName = null;
            break;
        case "LastName":
            contactList.find((Contact)=>Contact.firstName==firstNames1).lastName = null;
            break;
        case "Address":
            contactList.find((Contact)=>Contact.firstName==firstNames1).address = null;
            break;
        case "City":
            contactList.find((Contact)=>Contact.firstName==firstNames1).city = null;
            break;
        case "State":
            contactList.find((Contact)=>Contact.firstName==firstNames1).state = null;
            break;
        case "Zip":
            contactList.find((Contact)=>Contact.firstName==firstNames1).zip = null;
            break;
        case "PhoneNumber":
            contactList.find((Contact)=>Contact.firstName==firstNames1).phoneNumber = null;
            break;
        case "EmailID":
            contactList.find((Contact)=>Contact.firstName==firstNames1).email = null;
            break;
        }
}

function printAddressBook(){
    for (let i = 0; i < contactList.length; i++) {
        console.log(contactList[i]);   
    }
}

let contactList = new Array();
let contact1 = new Contact("Sahil","Pawar","Chiplun","Ratnagiri","MH",415601,7350310455,"sahilpawar1004@gmail.com");
let contact2 = new Contact("Sai","Patil","karad","Satara","MH",415901,7350310466,"saipatil1004@gmail.com");
contactList.push(contact1);
contactList.push(contact2);
console.log("List of contact : ");
printAddressBook();


console.log("Edit The Contact :");
editName("Sahil", "City", "khed");
console.log("After edit the contact :")
printAddressBook();


console.log("Detele the contact");
deleteContact("Sai","City");
printAddressBook();