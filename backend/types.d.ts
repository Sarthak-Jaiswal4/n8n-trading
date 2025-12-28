declare namespace Express {
    export interface Request {
       userID?: string
    }
 }

declare module 'fyers-api-v3' {
    export class fyersModel {
        constructor(params?: {
            AccessToken?: string;
            AppID?: string;
            RedirectURL?: string;
            enableLogging?: boolean;
            Version?: string;
        });
        setAppId(appId: string): void;
        setRedirectUrl(url: string): void;
        setAccessToken(token: string): void;
        generateAuthCode(): string;
        generate_access_token(params: any): Promise<any>;
        get_profile(): Promise<any>;
        getQuotes(symbols: string[]): Promise<any>;
        getMarketDepth(params: any): Promise<any>;
        [key: string]: any;
    }
}
 