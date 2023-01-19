import express from "express";
import { sequelize } from "../sequelize.js";
import { experiencesRouter } from "./experiencesRouter.js";
import{usersRouter} from "./usersRouter.js";


const router = express.Router();




router.use("/experiences", experiencesRouter);
router.use("/users", usersRouter);


// post method for experiences
// at http://localhost:5001/experiences
router.post("/experiences", async (req, res) =>
{
    try
    {
        const {idExperienta, titluExperienta, descriereExperienta, dataExperienta, adresaExperienta, idUtilizator} = req.body;
        const result = await sequelize.query
        (
            `INSERT INTO Experiences (idExperienta, titluExperienta, descriereExperienta, dataExperienta, adresaExperienta, idUtilizator) VALUES
            (:idExperienta, :titluExperienta, :descriereExperienta, :dataExperienta, :adresaExperienta, :idUtilizator)`,
            {
                replacements: {idExperienta, titluExperienta, descriereExperienta, dataExperienta, adresaExperienta, idUtilizator}
            }
        );
        res.status(201).send(result);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});