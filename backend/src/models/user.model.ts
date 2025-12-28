import mongoose, { Schema } from 'mongoose'

const UserSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const EdgeSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    target:{
        type:String,
        required:true
    }
},{_id:false})

const PositionSchema=new Schema({
    x:{
        type:Number,
        required:true
    },
    y:{
        type:Number,
        required:true
    }
},{_id:false})

const NodeDataSchema=new Schema({
    kind:{
        type:String,
        enum:["ACTION","TRIGGER"]
    },
    metadata: Schema.Types.Mixed
},{_id:false})

const credentialsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    value:{
        type:String
    },
    required:{
        type:Boolean,
        required:true
    }
})

const WorkFlowNodesSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    NodeID:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"NodeModel"
    },
    data:NodeDataSchema,
    position:PositionSchema,
    credentials:[credentialsSchema],
    type:{
        type:String,
        required:true
    }

},{_id:false})

const WorkflowSchema=new Schema({
    userID:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"UserModel"
    },
    nodes:[WorkFlowNodesSchema],
    edges:[EdgeSchema]
})

const NodeSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    kind:{
        type:String,
        enum:["ACTION","TRIGGER"],
        required:true
    },
    credentials:[credentialsSchema],
    type:{
        type:String,
        required:true
    }
})

const ExecutionSchema=new Schema({
    workflowID:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"WorkflowModel"
    },
    status:{
        type:String,
        enum:["PENDING","COMPLETED"]
    },
    startTime:{
        type:Date,
        required:true,
        default:Date.now()
    },
    endTime:{
        type:Date
    }
})

const FyersCredentials=new Schema({
    UserID:{
        type:mongoose.Types.ObjectId,
        ref:"UserModel",
        required:true
    },
    AppID:{
        type:String,
        required:true
    },
    RedirectURL:{
        type:String,
        required:true
    },
    SecretKey:{
        type:String,
        required:true
    },
    AccessToken:{
        type:String,
    },
    RefreshToken:{
        type:String,
    }
})

export const UserModel=mongoose.model("UserModel",UserSchema)
export const WorkflowModel=mongoose.model("WorkflowModel",WorkflowSchema)
export const NodeModel=mongoose.model("NodeModel",NodeSchema)
export const ExecutionModel=mongoose.model("ExecutionModel",ExecutionSchema)
export const FyersModel=mongoose.model("FyersModel",FyersCredentials)