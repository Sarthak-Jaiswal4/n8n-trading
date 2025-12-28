import * as z from "zod";
export const SignUpSchema = z.object({
    username: z.string().min(3).max(100),
    password: z.string()
});
export const workflowSchema = z.object({
    nodes: z.array(z.object({
        NodeID: z.string(),
        id: z.string(),
        data: z.object({
            kind: z.enum(["ACTION", "TRIGGER"]),
            metadata: z.any()
        }),
        position: z.object({
            x: z.number(),
            y: z.number()
        }),
        type: z.string()
    })),
    edges: z.array(z.object({
        id: z.string(),
        source: z.string(),
        target: z.string()
    }))
});
export const UpdateworkflowSchema = z.object({
    nodes: z.object({
        NodeID: z.string(),
        id: z.string(),
        data: z.object({
            kind: z.enum(["ACTION", "TRIGGER"]),
            metadata: z.any()
        }),
        position: z.object({
            x: z.number(),
            y: z.number()
        }),
        type: z.string()
    }),
    edges: z.object({
        id: z.string(),
        source: z.string(),
        target: z.string()
    })
});
export const OrderSchema = z.object({
    symbol: z.string(),
    qty: z.number(),
    type: z.number(),
    side: z.number(),
    productType: z.string(),
    limitPrice: z.number(),
    stopPrice: z.number(),
    disclosedQty: z.number(),
    validity: z.string(),
    offlineOrder: z.boolean(),
    stopLoss: z.number(),
    takeProfit: z.number(),
    orderTag: z.string(),
    isSliceOrder: z.boolean()
});
//# sourceMappingURL=type.js.map