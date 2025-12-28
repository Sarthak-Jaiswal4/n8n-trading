import { Handle, Position } from '@xyflow/react'

const Supported_Asset= ["SOL","ETH"]
export type TradingMetaData ={
    type:"LONG" | "SHORT"
    qty:number,
    symbol: typeof Supported_Asset
}

function Hyperliquid({data}:{
    data:{
        metadata:TradingMetaData
    }
}) {
  const isLong = data.metadata.type === "LONG"
  return (
    <div className="bg-linear-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 min-w-[200px]">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">Hyperliquid Trade</span>
          <span className={`px-2 py-1 rounded-md text-xs font-bold ${
            isLong 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {data.metadata.type}
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Qty:</span>
            <span className="text-base font-bold text-gray-900 dark:text-gray-100">{data.metadata.qty}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Symbol:</span>
            <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">{Array.isArray(data.metadata.symbol) ? data.metadata.symbol.join(', ') : data.metadata.symbol}</span>
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="bg-cyan-500! border-2! border-white! dark:border-gray-800! w-3! h-3!"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="bg-cyan-500! border-2! border-white! dark:border-gray-800! w-3! h-3!"
      />
    </div>
  )
}

export default Hyperliquid