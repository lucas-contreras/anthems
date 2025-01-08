import express, { Request, Response } from "express";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();

const app = express();
const router = express.Router();

const PORT = process.env.PORT;

router.use(express.json());

router.get("/", (request: Request, response: Response) => {
    response.status(200).send("nothing");
});

// agregar controladores asi queda prolijo
router.get("/anthem/:id", (request: Request, response: Response) => {
    response.status(200).send({
        "id": "1",
        "name": "Cantad alegres al Señor",
        "backgroundImage": "1-21.jpg",
        // "backgroundImage": "35-45.jpg",
        "source": "http://localhost:8080/001_Cantad_alegres_al_Senior.mp3",
        "description": "Salmo 100:1-5",
        "lyrics": [
            {
                "id": "0",
                "startTime": "00:00",
                "endTime": "00:24",
                "caption": "Salmo 100:1-5",
                "text": [
                    "Cantad alegres al Señor",
                ]
            },
            {
                "id": "1",
                "startTime": "00:25",
                "endTime": "01:01",
                "caption": "1",
                "text": [
                    "Cantad alegres al Señor",
                    "mortales todos por doquier;",
                    "servidle siempre con fervor,",
                    "obedecedle con placer."
                ]
            },
            {
                "id": "2",
                "startTime": "01:02",
                "endTime": "01:38",
                "caption": "2",
                "text": [
                    "Con gratitud canción alzad",
                    "al Hacedor que el ser os dio;",
                    "al Dios excelso venerad,",
                    "que como Padre nos amó."
                ]
            },
            {
                "id": "3",
                "startTime": "01:39",
                "endTime": "02:20",
                "caption": "3",
                "text": [
                    "Su pueblo somos: salvará",
                    "a los que busquen al Señor;",
                    "ninguno de ellos dejará;",
                    "él los ampara con su amor."
                ]
            },
            {
                "id": "4",
                "startTime": "02:20",
                "endTime": "02:23",
                "caption": "Salmo 100:1-5",
                "text": [
                    "Cantad alegres al Señor",
                ]
            },
        ]
    });
});

app.use('/api', router);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});