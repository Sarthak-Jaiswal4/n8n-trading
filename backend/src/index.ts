import express, { type Request, type Response } from 'express'
import { ExecutionModel, FyersModel, NodeModel, UserModel, WorkflowModel } from './models/user.model.js';
import { OrderSchema, SignUpSchema, UpdateworkflowSchema, workflowSchema } from './types/type.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import { middleware } from './middleware.js';
import cors from 'cors'
import { FyersExecution } from './executors/FyersExecutor.js';
import { Fyers } from './executors/FyersClass.js';
import {fyersModel} from 'fyers-api-v3'

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
let corsOptions = {
    origin: '*',
}
mongoose.connect(MONGO_URL!).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});
const JWT_SECRET=process.env.JWT_SECRET!
const app=express()
app.use(express.json())
app.use(cors(corsOptions))

app.post("/signin", express.json(), async (req, res) => {
    const {success,data}=SignUpSchema.safeParse(req.body)

    if (!success) {
        return res.status(403).json({ message: "Username and password are required." });
    }

    try {
        const user = await UserModel.findOne({ username:data.username }).exec();

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        if (user.password !== data.password) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const token=jwt.sign({
            id:user._id
        },JWT_SECRET)

        res.status(200).json({ message: "Sign in successful.", userId: user._id, token });
    } catch (err) {
        res.status(500).json({ message: "Internal server error." });
    }
});

app.post("/signup", express.json(), async (req, res) => {
    const { success, data } = SignUpSchema.safeParse(req.body);

    if (!success) {
        return res.status(403).json({ message: "Invalid username or password format." });
    }

    try {
        const existingUser = await UserModel.findOne({ username: data.username }).exec();
        if (existingUser) {
            return res.status(409).json({ message: "Username already exists." });
        }

        const newUser = new UserModel({
            username: data.username,
            password: data.password
        });

        await newUser.save();

        const token=jwt.sign({
            id:newUser._id
        },JWT_SECRET)

        if(newUser){
            res.status(201).json({ message: "User registered successfully.", userId: newUser._id, token:token });
        }

    } catch (err) {
        res.status(500).json({ message: "Internal server error." });
    }
});

app.post("/workflow", middleware, async (req:Request, res:Response) => {
    const userID = req.userID;
    const { success, data } = workflowSchema.safeParse(req.body);
    if (!success) {
        return res.status(403).json({ message: "input not right" });
    }

    if (!userID) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const workflow = await WorkflowModel.create({
            userID: userID,
            nodes: data.nodes,
            edges: data.edges,
        });

        res.status(200).json({ id: workflow._id, workflow });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
});

app.put("/workflow/:workflowid", middleware, async (req, res) => {
    const userID = req.userID;
    const workflowID = req.params.workflowid;
    const { success, data } = UpdateworkflowSchema.safeParse(req.body);
    if (!success) {
        return res.status(403).json({ message: "input not right" });
    }

    try {
        const existingWorkflow = await WorkflowModel.findOne({
            _id: workflowID,
        });

        if (!existingWorkflow) {
            return res.status(404).json({ message: "Workflow not found" });
        }

        const workflow = await WorkflowModel.findByIdAndUpdate(
            workflowID,
            {
                $push:{nodes: data.nodes,edges: data.edges}
            },
            { new: true }
        );

        res.status(200).json({ id: workflow!._id, workflow });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
})

app.get("/workflow/:workflowid", middleware, async (req, res) => {
    const workflowID = req.params.workflowid;

    try {
        const workflow = await WorkflowModel.findOne({
            _id: workflowID,
        });

        if (!workflow) {
            return res.status(404).json({ message: "Workflow not found" });
        }

        res.status(200).json({ workflow });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
})

app.get("/allworkflows",async(req,res)=>{
    const allworkflows=await WorkflowModel.find()
    res.status(200).json(allworkflows)
})

app.get("/workflow/execution/:workflowid", middleware, async (req, res) => {
    const workflowID = req.params.workflowid;

    try {
        const workflow = await WorkflowModel.findOne({
            _id: workflowID
        });

        if (!workflow) {
            return res.status(404).json({ message: "Workflow not found" });
        }

        const executions = await ExecutionModel.find({
            workflowID: new mongoose.Types.ObjectId(workflowID)
        }).exec();

        res.status(200).json({ executions });
    } catch (error) {
        console.error("Error fetching executions:", error);
        res.status(500).json({ message: "Something went wrong", error });
    }
})

app.get('/nodes',async(req,res)=>{
    const nodes=await NodeModel.find()
    res.status(200).json(nodes)
})

app.post('/fyers/getUrl',middleware,async(req,res)=>{
    const userID = req.userID;
    if(!userID) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const data=req.body
    const { App_ID, Redirect_URL, Secret_ID } = data;
    
    const fyers=new Fyers(App_ID,Redirect_URL,Secret_ID)
    const url=fyers.GenerateURL()

    try {
        const cred=await FyersModel.create({
            UserID: userID,
            AppID:App_ID,
            RedirectURL:Redirect_URL,
            SecretKey:Secret_ID,
        })
    } catch (error) {
        console.log("Error in saving fyes credentials",error)
    }
    res.status(200).json(url)
})

app.post('/fyers/getToken',middleware,async(req,res)=>{
    const userID=req.userID
    const data=req.body
    const { Auth_Code, App_ID, Redirect_URL, Secret_ID } = req.body;

    const fyers = new Fyers(App_ID, Redirect_URL, Secret_ID);
    const url=fyers.GenerateURL()
    const token:any=await fyers.getAccesstoken(Auth_Code,Secret_ID)

    if(token.code==200){
        const updatecred = await FyersModel.findOneAndUpdate(
            { UserID: new mongoose.Types.ObjectId(userID) },
            {
                AccessToken: token.access_token,
                RefreshToken: token.refresh_token
            },
            { new: true }
        );
        res.status(200).json(token)
        return
    }
    res.status(500).json("Error")
})

app.get('/fyers/getcredentials',middleware,async(req,res)=>{
    const UserID=req.userID

    const getcredentials=await FyersModel.findOne({UserID:new mongoose.Types.ObjectId(UserID)})
    if(getcredentials){
        res.status(200).json({"credentials":getcredentials,"status":"success"})
        return
    }
    res.status(404).json({"Error":"No credentials found","status":"failure"})
})

app.post('/fyers/Placeorder',middleware,async(req,res)=>{
    const UserID=req.userID
    const {success,data}= OrderSchema.safeParse(req.body)

    if (!success) {
        return res.status(403).json({ message: "Order input not right" });
    }

    const getcredentials=await FyersModel.findOne({UserID:new mongoose.Types.ObjectId(UserID)})
    if(!getcredentials || !getcredentials.AccessToken){
        res.status(404).json({"status":"failure"})
        return
    }

    try {
        const fyers = new fyersModel()
        fyers.setAppId(getcredentials.AppID)
        fyers.setRedirectUrl(getcredentials.RedirectURL)
        fyers.setAccessToken(getcredentials.AccessToken)
        fyers.place_order(data).then((response:any) => {
            console.log(response)
            res.status(200).json({"order":response,"status":"success"})
        }).catch((error:any) => {
              console.log(error)
        })
    } catch (error) {
        console.log("Error",error)
    }
})

app.post('/fyers/getsymbol',middleware,async(req,res)=>{
    const UserID=req.userID
    const {sym}=req.body
    if(!sym){
        res.status(400).json({"message":"No symbol found"})
        return;
    }
    const getcredentials=await FyersModel.findOne({UserID:new mongoose.Types.ObjectId(UserID)})
    if(!getcredentials || !getcredentials.AccessToken){
        res.status(404).json({"status":"failure"})
        return
    }
    const symbol=`NSE:${sym}-EQ`
    try {
        const fyers = new fyersModel()
        fyers.setAppId(getcredentials.AppID)
        fyers.setRedirectUrl(getcredentials.RedirectURL)
        fyers.setAccessToken(getcredentials.AccessToken)
        fyers.getQuotes([symbol]).then((response:any)=>{
            res.status(200).json({"quotes":response,"status":"success"})
        }).catch((err:any)=>{
            console.log(err)
        })
    } catch (error) {
        console.log("Error",error)
    }
})

app.listen(3000,()=>{
    console.log("Running at port 3000")
})

export type TriggerType = "ACTION" | "TRIGGER"
export type NodeKind = "price-trigger" | "timer" | "Fyers" | "lighter" | "hyperliquid"
type NodeMetadata = any
interface Nodetype {
    type: NodeKind;
    data: {
      kind: TriggerType;
      metadata: NodeMetadata;
    };
    id: string;
    position: { x: number; y: number };
    NodeID:string
}
interface Edges{
    source:string,
    id:string,
    target:string
}

async function init(){
    while(1){
        const workflows=await WorkflowModel.find()
        workflows.map(async workflow => {
            const trigger= workflow.nodes.find(x => x.data?.kind==="TRIGGER")

            switch (trigger?.type){
                case "timer":
                    await executor(workflow,trigger)
            }
        })

    }
}

async function executor(workflow:any,trigger:any){
    const execution=await ExecutionModel.find({workflowID:workflow._id}).sort({startTime:-1})
    const latestExecution = execution && execution.length > 0 ? execution[0] : null;

    if (
        !latestExecution ||
        new Date(latestExecution.startTime).getTime() < Date.now() - (trigger.data?.metadata?.time * 1000)
    ) {
        const createexecution = await ExecutionModel.create({
            workflowID: workflow._id,
            status: "PENDING",
            startTime: new Date()
        })
        await nodeexecutor(workflow.nodes,workflow.edges)
        createexecution.endTime=new Date()
        createexecution.status="COMPLETED"
        await createexecution.save()
    } 
}

async function nodeexecutor(nodes:Nodetype[],edges:Edges[]) {
    const trigger= nodes.find((node:Nodetype) => node.data.kind==="TRIGGER")
    if(!trigger) return;
    await recursiveexec(nodes,edges,trigger.id)
}

async function recursiveexec(nodes:Nodetype[],edges:Edges[],sourceid:any){

    const aheadnodes = edges.filter(edge => edge.source === sourceid).map(edge => edge.target);

    await Promise.all(aheadnodes.map(async (nodeclientid) =>{
        const node=nodes.find(({id}) => id===nodeclientid);
        if(!node) return;
        switch (node.type){
            case "Fyers":
                await FyersExecution(node.data.metadata.qty,node.data.metadata.asset,node.data.metadata.type);
        }
    }))
    await Promise.all(aheadnodes.map(id => recursiveexec(nodes,edges,id)))
}

// init()