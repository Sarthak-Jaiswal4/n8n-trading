import * as z from "zod";
export declare const SignUpSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const workflowSchema: z.ZodObject<{
    nodes: z.ZodArray<z.ZodObject<{
        NodeID: z.ZodString;
        id: z.ZodString;
        data: z.ZodObject<{
            kind: z.ZodEnum<{
                ACTION: "ACTION";
                TRIGGER: "TRIGGER";
            }>;
            metadata: z.ZodAny;
        }, z.core.$strip>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>>;
    edges: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        source: z.ZodString;
        target: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const UpdateworkflowSchema: z.ZodObject<{
    nodes: z.ZodObject<{
        NodeID: z.ZodString;
        id: z.ZodString;
        data: z.ZodObject<{
            kind: z.ZodEnum<{
                ACTION: "ACTION";
                TRIGGER: "TRIGGER";
            }>;
            metadata: z.ZodAny;
        }, z.core.$strip>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>;
    edges: z.ZodObject<{
        id: z.ZodString;
        source: z.ZodString;
        target: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const OrderSchema: z.ZodObject<{
    symbol: z.ZodString;
    qty: z.ZodNumber;
    type: z.ZodNumber;
    side: z.ZodNumber;
    productType: z.ZodString;
    limitPrice: z.ZodNumber;
    stopPrice: z.ZodNumber;
    disclosedQty: z.ZodNumber;
    validity: z.ZodString;
    offlineOrder: z.ZodBoolean;
    stopLoss: z.ZodNumber;
    takeProfit: z.ZodNumber;
    orderTag: z.ZodString;
    isSliceOrder: z.ZodBoolean;
}, z.core.$strip>;
//# sourceMappingURL=type.d.ts.map