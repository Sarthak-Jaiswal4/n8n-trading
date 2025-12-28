import {fyersModel} from 'fyers-api-v3'

export async function FyersExecution(qty:number,asset:"ETH"|"SOL"|"BTC",type:"LONG"|"SHORT"){
    console.log(`${qty},${asset},${type}`)
}