import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { calculateUrgency } from "./services/urgencyScorer.js";
import {enhanceUrgency} from "./services/llmExplainer.js"

dotenv.config();
const Port = process.env.PORT ;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req,res)=>{
    res.json("Backend is running");
})

app.post('/analyze',async(req,res)=>{
    const {applications} = req.body;

    let result = [];

    for(const application of applications){
        const urgencyScore = calculateUrgency(application);
        const enhanced = await enhanceUrgency(application,urgencyScore);

        result.push({
            id : application.id,
            tenantName : application.tenantName,
            urgencyScore,
            ...enhanced,
        })
    }

    result.sort((a,b)=>b.urgencyScore-a.urgencyScore );

    res.json({
        prioritized : result.slice(0,3)
    })
})


app.listen(Port, ()=>{
    console.log(`Server running on Port ${Port}`);
})

