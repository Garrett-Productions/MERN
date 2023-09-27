const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const brandNewUser = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.imei(),
    email: faker.internet.email(),
    passWord: faker.internet.password(),
    _id: faker.string.uuid()
}

const createCompany = () => {
    const startUp = {
        name: faker.company.name(),
        _id: faker.string.uuid(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country()
    }
}
return startUp;
}

app.get("/api/users/new", (req,res) => {
    console.log("This is working")
    res.json(brandNewUser);
    console.log("this is my new user!", brandNewUser)
})

app.get("/api/companies/new", (req,res) => {
    console.log(res)
    res.json(createCompany());
})

app.get("/api/user/company", (req,res) => {
    console.log("HI LOOK HERE FOR YOUR RESPONSE MATE")
    console.log(res)
    res.json(
            {newUser: brandNewUser,
            startUp: createCompany()
            });
    console.log("I just created my new user lets goooo!")
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );