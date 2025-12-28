import { Handle, Position } from '@xyflow/react'

export type TimerNodeMetaData ={
    time:number
    NodeID: string
}

function Timer({data,isConnectable}:{
    data:{
        metadata:TimerNodeMetaData
    },
    isConnectable:boolean
}) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 min-w-[180px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">Timer</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Every</span>
          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{data.metadata.time}</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Second{data.metadata.time !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
        className="!bg-purple-500 !border-2 !border-white dark:!border-gray-800 !w-3 !h-3"
      />
    </div>
  )
}

export default Timer