import { Handle, Position } from '@xyflow/react'

// const Supported_Asset= ["SOL","ETH"]
export type FyersTradingMetaData = {
    type: '1' | '2' | '3' | '4', // 1: Limit, 2: Market, 3: Stop Limit, 4: Stop Market, matches ActionSheet.tsx (Fyers select options)
    qty: number,
    symbol: string, // Corresponds to z.string() in OrderSchema
    NodeID: string,
    productType: "INTRADAY" | "MARGIN" | "CO" | "CNC" | "BO" | "MTF", // matches OrderSchema and UI options
    limitPrice?: number,
    stopPrice?: number,
    disclosedQty?: number,
    validity: string,
    offlineOrder: boolean,
    stopLoss?: number,
    takeProfit?: number,
    orderTag?: string,
    isSliceOrder: boolean,
    side: 1|-1 
}

function Fyers({data}:{
    data:{
        metadata:FyersTradingMetaData
    }
}) {
  const isLong = data.metadata.side === 1
  return (
    <div className="bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-2 border-emerald-300 dark:border-emerald-700 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 min-w-[200px]">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Fyers Trade</span>
          <span className={`px-2 py-1 rounded-md text-xs font-bold ${
            isLong 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {data.metadata.side === 1 ? "LONG" : "SHORT"}
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Qty:</span>
            <span className="text-base font-bold text-gray-900 dark:text-gray-100">{data.metadata.qty}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Symbol:</span>
            <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{Array.isArray(data.metadata.symbol) ? data.metadata.symbol.join(', ') : data.metadata.symbol}</span>
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="bg-emerald-500! border-2! border-white! dark:border-gray-800! w-3! h-3!"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="bg-emerald-500! border-2! border-white! dark:border-gray-800! w-3! h-3!"
      />
    </div>
  )
}

export default Fyers