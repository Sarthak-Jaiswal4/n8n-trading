import mongoose from 'mongoose';
export declare const UserModel: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username: string;
        password: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        username: string;
        password: string;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const WorkflowModel: mongoose.Model<{
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }> & {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }> & {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }> & {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }> & {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
}, mongoose.Document<unknown, {}, {
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }> & {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }> & {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    }>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userID: mongoose.Types.ObjectId;
        nodes: mongoose.Types.DocumentArray<{
            id: string;
            type: string;
            NodeID: mongoose.Types.ObjectId;
            credentials: mongoose.Types.DocumentArray<{
                required: boolean;
                title: string;
                value?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                required: boolean;
                title: string;
                value?: string | null;
            }> & {
                required: boolean;
                title: string;
                value?: string | null;
            }>;
            data?: {
                metadata?: any;
                kind?: "ACTION" | "TRIGGER" | null;
            } | null;
            position?: {
                x: number;
                y: number;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            id: string;
            type: string;
            NodeID: mongoose.Types.ObjectId;
            credentials: mongoose.Types.DocumentArray<{
                required: boolean;
                title: string;
                value?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                required: boolean;
                title: string;
                value?: string | null;
            }> & {
                required: boolean;
                title: string;
                value?: string | null;
            }>;
            data?: {
                metadata?: any;
                kind?: "ACTION" | "TRIGGER" | null;
            } | null;
            position?: {
                x: number;
                y: number;
            } | null;
        }> & {
            id: string;
            type: string;
            NodeID: mongoose.Types.ObjectId;
            credentials: mongoose.Types.DocumentArray<{
                required: boolean;
                title: string;
                value?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                required: boolean;
                title: string;
                value?: string | null;
            }> & {
                required: boolean;
                title: string;
                value?: string | null;
            }>;
            data?: {
                metadata?: any;
                kind?: "ACTION" | "TRIGGER" | null;
            } | null;
            position?: {
                x: number;
                y: number;
            } | null;
        }>;
        edges: mongoose.Types.DocumentArray<{
            id: string;
            source: string;
            target: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            id: string;
            source: string;
            target: string;
        }> & {
            id: string;
            source: string;
            target: string;
        }>;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        userID: mongoose.Types.ObjectId;
        nodes: mongoose.Types.DocumentArray<{
            id: string;
            type: string;
            NodeID: mongoose.Types.ObjectId;
            credentials: mongoose.Types.DocumentArray<{
                required: boolean;
                title: string;
                value?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                required: boolean;
                title: string;
                value?: string | null;
            }> & {
                required: boolean;
                title: string;
                value?: string | null;
            }>;
            data?: {
                metadata?: any;
                kind?: "ACTION" | "TRIGGER" | null;
            } | null;
            position?: {
                x: number;
                y: number;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            id: string;
            type: string;
            NodeID: mongoose.Types.ObjectId;
            credentials: mongoose.Types.DocumentArray<{
                required: boolean;
                title: string;
                value?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                required: boolean;
                title: string;
                value?: string | null;
            }> & {
                required: boolean;
                title: string;
                value?: string | null;
            }>;
            data?: {
                metadata?: any;
                kind?: "ACTION" | "TRIGGER" | null;
            } | null;
            position?: {
                x: number;
                y: number;
            } | null;
        }> & {
            id: string;
            type: string;
            NodeID: mongoose.Types.ObjectId;
            credentials: mongoose.Types.DocumentArray<{
                required: boolean;
                title: string;
                value?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                required: boolean;
                title: string;
                value?: string | null;
            }> & {
                required: boolean;
                title: string;
                value?: string | null;
            }>;
            data?: {
                metadata?: any;
                kind?: "ACTION" | "TRIGGER" | null;
            } | null;
            position?: {
                x: number;
                y: number;
            } | null;
        }>;
        edges: mongoose.Types.DocumentArray<{
            id: string;
            source: string;
            target: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            id: string;
            source: string;
            target: string;
        }> & {
            id: string;
            source: string;
            target: string;
        }>;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    }, mongoose.Types.Subdocument<string | mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    }> & ({
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    })>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userID: mongoose.Types.ObjectId;
    nodes: mongoose.Types.DocumentArray<{
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    }, mongoose.Types.Subdocument<string | mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    }> & ({
        id: string;
        type: string;
        NodeID: mongoose.Types.ObjectId;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    } | {
        id: string;
        type: string;
        NodeID: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        data?: {
            metadata?: any;
            kind?: "ACTION" | "TRIGGER" | null;
        } | null;
        position?: {
            x: number;
            y: number;
        } | null;
        _id: string;
    })>;
    edges: mongoose.Types.DocumentArray<{
        id: string;
        source: string;
        target: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        id: string;
        source: string;
        target: string;
    }> & {
        id: string;
        source: string;
        target: string;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const NodeModel: mongoose.Model<{
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
}, mongoose.Document<unknown, {}, {
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        type: string;
        kind: "ACTION" | "TRIGGER";
        title: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        description: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        type: string;
        kind: "ACTION" | "TRIGGER";
        title: string;
        credentials: mongoose.Types.DocumentArray<{
            required: boolean;
            title: string;
            value?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            required: boolean;
            title: string;
            value?: string | null;
        }> & {
            required: boolean;
            title: string;
            value?: string | null;
        }>;
        description: string;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: string;
    kind: "ACTION" | "TRIGGER";
    title: string;
    credentials: mongoose.Types.DocumentArray<{
        required: boolean;
        title: string;
        value?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        required: boolean;
        title: string;
        value?: string | null;
    }> & {
        required: boolean;
        title: string;
        value?: string | null;
    }>;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ExecutionModel: mongoose.Model<{
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
}, mongoose.Document<unknown, {}, {
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        workflowID: mongoose.Types.ObjectId;
        startTime: NativeDate;
        status?: "PENDING" | "COMPLETED" | null;
        endTime?: NativeDate | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        workflowID: mongoose.Types.ObjectId;
        startTime: NativeDate;
        status?: "PENDING" | "COMPLETED" | null;
        endTime?: NativeDate | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    workflowID: mongoose.Types.ObjectId;
    startTime: NativeDate;
    status?: "PENDING" | "COMPLETED" | null;
    endTime?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const FyersModel: mongoose.Model<{
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
}, mongoose.Document<unknown, {}, {
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        UserID: mongoose.Types.ObjectId;
        AppID: string;
        RedirectURL: string;
        SecretKey: string;
        AccessToken?: string | null;
        RefreshToken?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        UserID: mongoose.Types.ObjectId;
        AppID: string;
        RedirectURL: string;
        SecretKey: string;
        AccessToken?: string | null;
        RefreshToken?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    UserID: mongoose.Types.ObjectId;
    AppID: string;
    RedirectURL: string;
    SecretKey: string;
    AccessToken?: string | null;
    RefreshToken?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.model.d.ts.map