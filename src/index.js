import app from "./app.js";
import {sequelize} from "./database/config.database.js";
//para crear la base de datos
//import "./models/Ordes.models.js";
// import "./models/Products.models.js";
// import "./models/User.models.js";

async function main() {
    try {
        await sequelize.sync({ alter: true });
        app.listen(3003)
        console.log("escuchando el puerto",3000);
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}



main();



