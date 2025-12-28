import {fyersModel} from 'fyers-api-v3'

export class Fyers {

    private AppID: string;
    private RedirectURL: string;
    private fyers: fyersModel;
    private SecretKey:string
    private AuthCode:string = ''

    constructor(AppID: string, RedirectURL: string, SecretKey:string) {
        this.AppID = AppID;
        this.RedirectURL = RedirectURL;
        this.fyers = new fyersModel();
        this.fyers.setAppId(AppID);
        this.fyers.setRedirectUrl(RedirectURL);
        this.SecretKey=SecretKey
    }

    GenerateURL(){
        return this.fyers.generateAuthCode();
    }

    async getAccesstoken(Auth_code: string,Secret_ID:string) {
        console.log(Auth_code,Secret_ID)
        this.AuthCode = Auth_code
        try {
            const response = await this.fyers.generate_access_token({ "secret_key": Secret_ID, "auth_code": Auth_code })
            return response;
        } catch (error) {
            throw error;
        }
    }
}