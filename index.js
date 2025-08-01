import express from 'express';
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import modelRoutes from './routes/model.route.js';



const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ extended: true, parameterLimit:1000000 ,limit: '500mb' }));
app.use('/api/messages/asr/voice_to_text', express.raw({ type: 'audio/*', limit: '50mb' }));
app.use('/api/messages/tts/text_to_voice', express.raw({ limit: '50mb' }));


dotenv.config();
app.use(express.json());

app.use(cors({
  origin: 'https://hackronyx-frontend-updated.vercel.app', // allow only your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you're using cookies or authentication headers
}));


app.use("/api",modelRoutes);




app.listen(3000,()=>{
    console.log('server is running on port '+ 3000);
    // connectDB();
});

 





