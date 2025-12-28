export declare class Fyers {
    private AppID;
    private RedirectURL;
    private fyers;
    private SecretKey;
    private AuthCode;
    constructor(AppID: string, RedirectURL: string, SecretKey: string);
    GenerateURL(): string;
    getAccesstoken(Auth_code: string, Secret_ID: string): Promise<any>;
}
//# sourceMappingURL=FyersClass.d.ts.map