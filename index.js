import cowsay from "cowsay";
import dotenv from "dotenv";

dotenv.config();

console.log(cowsay.say({
    text: `${process.env.NAME} from ${process.env.CAMPUS}`,
    e: "oO",
    T: "U "
}));