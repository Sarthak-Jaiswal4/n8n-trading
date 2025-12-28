import { fyersModel } from 'fyers-api-v3';
export async function FyersExecution(qty, asset, type) {
    // const fyers = new fyersModel()
    // const AppID="V73IEKZB3S-100";
    // const RedirectURL=`https://www.google.com`;
    // const auth:string = await generateAuthCode(AppID,RedirectURL,fyers)
    // // console.log(auth)
    // const authcode = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiJWNzNJRUtaQjNTIiwidXVpZCI6IjhiODE0M2JjYjljZjQ1YTI4YzhhOGI4MzlhY2JhYjRhIiwiaXBBZGRyIjoiIiwibm9uY2UiOiIiLCJzY29wZSI6IiIsImRpc3BsYXlfbmFtZSI6IkZBRDc2MDIwIiwib21zIjoiSzEiLCJoc21fa2V5IjoiZGIzZTAxNDA0ZjQzNGZiYjcyMGMwYjRhMDQzMjRmOTNlZmUzMGZiNTg3ZTVmNzdlNDRiYTg4OTYiLCJpc0RkcGlFbmFibGVkIjoiTiIsImlzTXRmRW5hYmxlZCI6Ik4iLCJhdWQiOiJbXCJkOjFcIixcImQ6MlwiLFwieDowXCIsXCJ4OjFcIixcIng6MlwiXSIsImV4cCI6MTc2NjY0MDQ5NSwiaWF0IjoxNzY2NjEwNDk1LCJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJuYmYiOjE3NjY2MTA0OTUsInN1YiI6ImF1dGhfY29kZSJ9.D_nx5sttinFNrrmxtDJ26VA8XgSD-gSF7W2px356GAg"; 
    // const secretKey = "94ORCUJO28";
    // fyers.generate_access_token({ "secret_key": secretKey, "auth_code": authcode }).then((response) => {
    // console.log(response)
    // }).catch((error) => {
    // console.log(error)
    // })
    // const AccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCcFRGY21FeFBuTGF3SXNfLTJ4S1JWNEFEU19ZSmJMZFJCZnQ0TWJSOExHV0pGNXVHNlBkY240ejBnYTBLYXVWckFFM3RabHZUejJFRERHUlJud2NjRk13Y183XzUtQkZPMHlBRTB0MzFuOUl6a0s3MD0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiJkYjNlMDE0MDRmNDM0ZmJiNzIwYzBiNGEwNDMyNGY5M2VmZTMwZmI1ODdlNWY3N2U0NGJhODg5NiIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiRkFENzYwMjAiLCJhcHBUeXBlIjoxMDAsImV4cCI6MTc2NjcwOTAwMCwiaWF0IjoxNzY2NjEwNzI2LCJpc3MiOiJhcGkuZnllcnMuaW4iLCJuYmYiOjE3NjY2MTA3MjYsInN1YiI6ImFjY2Vzc190b2tlbiJ9.M5ToDsI0Cvbv1QoIXMvRi3MgT4JYMg6Eab2b5ljrl9g';
    // fyers.setAccessToken(AccessToken)
    // // fyers.get_funds().then((response:any)=>{
    // //     console.log(response)
    // // }).catch((error:any)=>{
    // //     console.log(error)
    // // }) 
    const reqBody = {
        "symbol": "NSE:SBIN-EQ",
        "qty": 1,
        "type": 1,
        "side": -1,
        "productType": "INTRADAY",
        "limitPrice": 355,
        "stopPrice": 0,
        "disclosedQty": 0,
        "validity": "DAY",
        "offlineOrder": false,
        "stopLoss": 0,
        "takeProfit": 0,
        "orderTag": "tag1",
        "isSliceOrder": false
    };
    // fyers.place_order(reqBody).then((response:any) => {
    //     console.log(response)
    //   }).catch((error:any) => {
    //       console.log(error)
    //   })
    console.log(`${qty},${asset},${type}`);
}
//# sourceMappingURL=FyersExecutor.js.map