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
import { useEffect, useState } from "react"
import type { FyersTradingMetaData } from "@/nodes/actions/Fyers"
import type { PriceNodeMetaData } from "@/nodes/triggers/Pricetrigger"
import type { TimerNodeMetaData } from "@/nodes/triggers/Timer"
import { http } from "@/lib/http"
import { CheckCircle } from "lucide-react"
import { Separator } from "./ui/separator"

type NodeMetadata = FyersTradingMetaData | PriceNodeMetaData | TimerNodeMetaData

interface FyersCredentials {
    App_ID:string
    Redirect_URL:string
    Secret_ID:string
}

const Support_Action =[
    {
        id:"hyperliquid",
        title:"Hyperliquid",
        Description:"Place trade at hyperliquid"
    },
    {
        id:"Fyers",
        title:"Fyers",
        Description:"Place trade at liquid"
    },
    {
        id:"backpack",
        title:"Backpack",
        Description:"Place trade at backpack"
    }
]

export const Supported_Asset= ["SOL","ETH"]

export function ActionSheet({
    onSelect
}: { 
    onSelect: (kind: NodeKind, metadata: NodeMetadata) => void
}) {
    const [Metadata, setMetadata] = useState<Partial<FyersTradingMetaData>>({})
    const [SelectedAction, setSelectedAction] = useState(Support_Action[0].id)
    const [credentials, setcredentials] = useState<Partial<FyersCredentials>>({})
    const [generateURL, setgenerateURL] = useState(false)
    const [URL, setURL] = useState("")
    const [isVerified, setisVerified] = useState(false)

    const valuechange=(value:any)=>{
        setSelectedAction(value)
        setMetadata((metadata)=>({...metadata,NodeID:"69427f2ea1d3a4cf106354c1"}))
    }

    const getURl=async(credentials:any)=>{
        const url:string=await http.post('/fyers/getUrl',credentials,{auth:true})
        setgenerateURL(true)
        setURL(url)
    }

    const getToken=async(credentials:any)=>{
        await http.post('/fyers/getToken',credentials,{auth:true})
        setisVerified(true)
    }

    const getcredentials=async()=>{
        const getcred=await http.get('/fyers/getcredentials',{auth:true})
        return getcred
    }

    useEffect(() => {
        (async () => {
            const Fyerscred: any = await getcredentials();
            if (Fyerscred.status === "success") {
                setcredentials({
                    App_ID: Fyerscred.credentials.AppID,
                    Redirect_URL: Fyerscred.credentials.RedirectURL,
                    Secret_ID: Fyerscred.credentials.SecretKey,
                });
                setgenerateURL(true);
                setisVerified(true);
            } else {
                setgenerateURL(false);
                setisVerified(false);
                setURL("");
                setcredentials({});
            }
        })();
    }, [])
    

  return (
    <Sheet open={true}>
      <SheetContent className="text-black flex flex-col h-full">
        <div className="overflow-y-auto px-2">
          <SheetHeader>
            <SheetTitle>Select Trigger</SheetTitle>
            <SheetDescription>
              Select trigger that you need
              <Select value={SelectedAction} onValueChange={(value)=>valuechange(value)}>
                  <SelectTrigger className="w-full px-4">
                      <SelectValue placeholder="select trigger" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                      {Support_Action.map((e) => <>
                              <SelectItem value={e.id}> {e.title} </SelectItem>
                          </>
                      )}
                      </SelectGroup>
                  </SelectContent>
              </Select>

              {(SelectedAction==='hyperliquid' || SelectedAction==='backpack') && <div className="flex flex-col gap-2 pt-2">
                  <h1>Type</h1>
                  <Select value={Metadata?.type} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      side: Number(value) as 1 | -1
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select type" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectGroup>
                              <SelectItem key={"1"} value={"1"}> Long </SelectItem>
                              <SelectItem key={"-1"} value={"-1"}> Short </SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  <h1>Qty</h1>
                  <input className="border px-2 py-2 rounded-md" type="text" onChange={(e)=>setMetadata(metadata => ({...metadata,qty: Number(e.target.value)})) }></input>

                  <h1>Symbol</h1>
                  <Select value={Metadata?.symbol} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      symbol: value
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select type" />
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

              {(SelectedAction==='Fyers' ) && <div className="flex flex-col gap-2 py-2">
                  <h1>Type</h1>
                  <Select value={Metadata?.type} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      type: value as '1' | '2' | '3' | '4'
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select type" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectGroup>
                              <SelectItem key={1} value={'1'}> Limit </SelectItem>
                              <SelectItem key={2} value={'2'}> Market </SelectItem>
                              <SelectItem key={3} value={'3'}> Stop Limit </SelectItem>
                              <SelectItem key={4} value={'4'}> Stop Market </SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  <h1>Qty</h1>
                  <input className="border px-2 py-2 rounded-md" type="number" onChange={(e)=>setMetadata(metadata => ({...metadata,qty: Number(e.target.value)})) }></input>

                  <h1>Symbol</h1>
                  <Select value={Metadata?.symbol} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      symbol: value
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select symbol" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectGroup>
                          {Supported_Asset.map((e) => 
                              <SelectItem key={e} value={e}> {e} </SelectItem>
                          )}
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  <h1>Side</h1>
                  <Select value={String(Metadata.side)} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      side: Number(value) as 1 | -1
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select side" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectGroup>
                              <SelectItem key={1} value={"1"}> Buy </SelectItem>
                              <SelectItem key={-1} value={"-1"}> Sell </SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  <h1>Product Type</h1>
                  <Select defaultValue="INTRADAY" value={Metadata?.productType} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      productType: value as "INTRADAY" | "MARGIN" | "CO" | "CNC" | "BO" | "MTF"
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select product type" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"INTRADAY"}>
                          <SelectGroup>
                              <SelectItem key={"INTRADAY"} value={"INTRADAY"}> INTRADAY <span className="text-xs text-gray-500"> – Applicable for all segments.</span></SelectItem>
                              <SelectItem key={"MARGIN"} value={"MARGIN"}> MARGIN <span className="text-xs text-gray-500"> – Applicable only for derivatives</span></SelectItem>
                              <SelectItem key={"CO"} value={"CO"}> CO <span className="text-xs text-gray-500"> – Cover Order</span></SelectItem>
                              <SelectItem key={"CNC"} value={"CNC"}> CNC <span className="text-xs text-gray-500"> – For equity only</span></SelectItem>
                              <SelectItem key={"BO"} value={"BO"}> BO <span className="text-xs text-gray-500"> – Bracket Order</span></SelectItem>
                              <SelectItem key={"MTF"} value={"MTF"}> MTF <span className="text-xs text-gray-500"> – Approved Symbols Only</span></SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  {(Metadata?.type==="1" || Metadata?.type==='4') && <>
                    <h1>Limit Price</h1>
                    <input className="border px-2 py-2 rounded-md" type="number" onChange={(e)=>setMetadata(metadata => ({...metadata,limitPrice: Number(e.target.value)})) }></input>
                  </>}

                {(Metadata?.type==="3" || Metadata?.type==='4') && <>
                  <h1>Stop Price</h1>
                  <input className="border px-2 py-2 rounded-md" type="number" onChange={(e)=>setMetadata(metadata => ({...metadata,stopPrice: Number(e.target.value)})) }></input>
                </>}

                {Metadata?.productType==="CNC" && <>
                  <h1>Disclosed Qty</h1>
                  <input className="border px-2 py-2 rounded-md" type="number" onChange={(e)=>setMetadata(metadata => ({...metadata,disclosedQty: Number(e.target.value)})) }></input>
                </>}

                  <h1>Validity</h1>
                  <Select value={Metadata?.validity} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      validity: value
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="select validity" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"DAY"}>
                          <SelectGroup>
                              <SelectItem key={"IOC"} value={"IOC"}> Immediate or Cancel (IOC) </SelectItem>
                              <SelectItem key={"DAY"} value={"DAY"}> Day </SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  <h1>Offline Order</h1>
                  <Select value={String(Metadata?.offlineOrder)} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      offlineOrder: Boolean(value)
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="offline order?" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"false"}>
                          <SelectGroup>
                              <SelectItem key={"true"} value={"true"}> Yes </SelectItem>
                              <SelectItem key={"false"} value={"false"}> No </SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>

                  {(Metadata?.productType==="CO" || Metadata?.productType==='BO') && <>
                    <h1>Stop Loss</h1>
                    <input className="border px-2 py-2 rounded-md" type="number" onChange={(e)=>setMetadata(metadata => ({...metadata,stopLoss: Number(e.target.value)})) }></input>
                  </>}

                  {(Metadata?.productType==='BO') && <>
                    <h1>Take Profit</h1>
                    <input className="border px-2 py-2 rounded-md" type="number" onChange={(e)=>setMetadata(metadata => ({...metadata,takeProfit: Number(e.target.value)})) }></input>
                  </>}

                  <h1>Is Slice Order</h1>
                  <Select value={String(Metadata?.isSliceOrder)} onValueChange={(value)=>setMetadata(metadata => ({
                      ...metadata,
                      isSliceOrder: Boolean(value) as true | false
                  }))}>
                      <SelectTrigger className="w-full px-4">
                          <SelectValue placeholder="slice order?" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"false"}>
                          <SelectGroup>
                              <SelectItem key={"true"} value={"true"}> Yes </SelectItem>
                              <SelectItem key={"false"} value={"false"}> No </SelectItem>
                          </SelectGroup>
                      </SelectContent>
                  </Select>
              </div>}
                  
              <Separator className="mt-4 p-[0.8px]" />

              {
                  (SelectedAction==='Fyers') && <div className="flex flex-col pt-4 gap-2">
                      <h1 className="text-lg font-medium text-black/80">Credentials</h1>
                      <h1>App ID</h1>
                      <input className="border px-2 py-2 rounded-md" value={credentials?.App_ID} type="text" onChange={(e)=>setcredentials(credential => ({...credential,App_ID: (e.target.value)})) }></input>
      
                      <h1>Secret ID</h1>
                      <input className="border px-2 py-2 rounded-md" value={credentials?.Secret_ID} type="text" onChange={(e)=>setcredentials(credential => ({...credential,Secret_ID: (e.target.value)})) }></input>

                      <h1>Redirect URL</h1>
                      <input className="border px-2 py-2 rounded-md" value={credentials?.Redirect_URL} type="text" onChange={(e)=>setcredentials(credential => ({...credential,Redirect_URL: (e.target.value)})) }></input>
      
                      <Button onClick={()=> getURl(credentials)} className="bg-sky-500 px-3 text-white py-2 hover:bg-sky-600 hover:cursor-pointer my-4">Get URL</Button>

                      {(generateURL && URL.length!=0) && <div className="border p-2 rounded-lg flex flex-wrap "> <a href={`${URL}`}>{URL}</a> </div> }
      
                      {(generateURL && URL.length!=0) && <div className="flex flex-col gap-2">
                          <h1>Auth Code</h1>
                          <input className="border px-2 py-2 rounded-md" type="text" onChange={(e)=>setcredentials(credential => ({...credential,Auth_Code: (e.target.value)})) }></input>

                          <Button onClick={()=> getToken(credentials)} className="bg-sky-500 px-3 text-white py-2 hover:bg-sky-600 hover:cursor-pointer my-4">Get Token</Button>
                      </div> }

                      {isVerified && (
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Verified</span>
                        </div>
                      )}
                  </div>
              }

            </SheetDescription>
          </SheetHeader>
        </div>

        <SheetFooter>
          <Button onClick={()=>{
            onSelect(
                SelectedAction,
                Metadata
            )
          }} type="submit">Create Action</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
