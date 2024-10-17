const cowsay = require("cowsay");
require("dotenv").config();

console.log(cowsay.say({
    text: `${process.env.NAME} from ${process.env.CAMPUS}`, 
    e: "oO",
    T: "U "
}));