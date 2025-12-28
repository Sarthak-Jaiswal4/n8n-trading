import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { NodeKind } from "./Workflow"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
import type { TimerNodeMetaData } from "@/nodes/triggers/Timer"
import type { PriceNodeMetaData } from "@/nodes/triggers/Pricetrigger"
import type { TradingMetaData } from "@/nodes/actions/Fyers"

type NodeMetadata = TradingMetaData | PriceNodeMetaData | TimerNodeMetaData

const Support_Trigger =[
    {
        id:"timer",
        title:"Timer",
        Description:"Run this trigger every x second/minutes",
    },
    {
        id:"price-trigger",
        title:"Price Trigger",
        Description:"Run this trigger on some trigger"
    }
]

const Supported_Asset= ["SOL","ETH"]

export function TriggerSheet({
    onSelect
}: { 
    onSelect: (kind: NodeKind, metadata: NodeMetadata) => void
}) {
    const [Metadata, setMetadata] = useState<TimerNodeMetaData | PriceNodeMetaData>({
        time: 3600,NodeID:""
    })
    const [SelectedTrigger, setSelectedTrigger] = useState(Support_Trigger[1].id)

  return (
    <Sheet open={true}>
      <SheetContent className="px-2 text-black">
        <SheetHeader>
          <SheetTitle>Select Trigger</SheetTitle>
          <SheetDescription>
            Select trigger that you need
            <Select value={SelectedTrigger} onValueChange={(value)=>setSelectedTrigger(value)}>
                <SelectTrigger className="w-full px-4">
                    <SelectValue placeholder="select trigger" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {Support_Trigger.map((e) => <>
                            <SelectItem value={e.id}> {e.title} </SelectItem>
                        </>
                    )}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {SelectedTrigger==='timer' && <div className="flex flex-col gap-2 pt-2">
                <h1>Number of Second to run the trigger</h1>
                <input className="border px-2 py-2 rounded-md" type="text" onChange={(e)=>setMetadata(metadata => ({...metadata,time: Number(e.target.value),NodeID:"69427e98a1d3a4cf106354c0"})) }></input>
            </div>}

            {SelectedTrigger==='price-trigger' && <div className="flex flex-col gap-2 pt-2">
                Price:
                <input className="border px-2 py-2 rounded-md" type="text" onChange={(e)=>setMetadata(metadata => ({...metadata,price: Number(e.target.value),NodeID:"694301916eb8bee93640d041"})) }></input>

                Asset
                <Select value={Metadata.asset} onValueChange={(value)=>setMetadata(metadata => ({
                    ...metadata,
                    asset: value
                }))}>
                    <SelectTrigger className="w-full px-4">
                        <SelectValue placeholder="select asset" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        {Supported_Asset.map((e) => <>
                                <SelectItem key={e} value={e}> {e} </SelectItem>
                            </>
                        )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>}

          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <Button onClick={()=>{
            onSelect(
                SelectedTrigger,
                Metadata
            )
          }} type="submit">Create Trigger</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
