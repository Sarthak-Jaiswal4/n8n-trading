import { Handle, Position } from "@xyflow/react"

export type PriceNodeMetaData = {
    asset:string
    price:number,
    decimal:number
}

function Pricetrigger({data,isConnectable}:{
    data:{
        metadata:PriceNodeMetaData
    },
    isConnectable:boolean
}) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-300 dark:border-blue-700 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 min-w-[180px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Price Trigger</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Asset:</span>
            <span className="text-base font-bold text-gray-900 dark:text-gray-100">{data.metadata.asset}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Price:</span>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">${data.metadata.price.toFixed(data.metadata.decimal)}</span>
          </div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
        className="!bg-blue-500 !border-2 !border-white dark:!border-gray-800 !w-3 !h-3"
      />
    </div>
  )
}

export default Pricetrigger