import { PublicClientApplication, AuthorizationUrlRequest, SilentRequest, AuthenticationResult, Configuration, LogLevel, AccountInfo, InteractionRequiredAuthError, EndSessionRequest, RedirectRequest, PopupRequest } from "@azure/msal-browser";
import { SsoSilentRequest } from "@azure/msal-browser/dist/src/request/SsoSilentRequest";

import { MSAL_CONFIG } from './azure-authentication-config';

/**
 * AuthModule for application - handles authentication in app.
 */
export class AzureAuthenticationContext {

    private myMSALObj: PublicClientApplication = new PublicClientApplication(MSAL_CONFIG); // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/classes/_src_app_publicclientapplication_.publicclientapplication.html
    private account?: AccountInfo; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-common/modules/_src_account_accountinfo_.html
    private loginRedirectRequest?: RedirectRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_redirectrequest_.html
    private loginRequest?: PopupRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_popuprequest_.html
    private profileRedirectRequest?: RedirectRequest;
    private profileRequest?: PopupRequest;
    private mailRedirectRequest?: RedirectRequest;
    private mailRequest?: PopupRequest;
    private silentProfileRequest?: SilentRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_silentrequest_.html
    private silentMailRequest?: SilentRequest;
    private silentLoginRequest?: SsoSilentRequest;

    private emptyAccountInfo: AccountInfo = {
        homeAccountId: "",
        environment: "",
        tenantId: "",
        username: "",
        localAccountId: "",
        name: ""
    };
    
    constructor() {
        // @ts-ignore
        this.account = null;
        this.setRequestObjects();
    }
    


    /**
     * Initialize request objects used by this AuthModule.
     */
    private setRequestObjects(): void {
        this.loginRequest = {
            scopes: [],
            prompt:'select_account'
        };

        this.loginRedirectRequest = {
            ...this.loginRequest,
            redirectStartPage: window.location.href
        };

        this.profileRequest = {
            scopes: ["User.Read"]
        };

        this.profileRedirectRequest = {
            ...this.profileRequest,
            redirectStartPage: window.location.href
        };

        // Add here scopes for access token to be used at MS Graph API endpoints.
        this.mailRequest = {
            scopes: ["Mail.Read"]
        };

        this.mailRedirectRequest = {
            ...this.mailRequest,
            redirectStartPage: window.location.href
        };

        this.silentProfileRequest = {
            scopes: ["openid", "profile", "User.Read"],
            //@ts-ignore
            account: this.emptyAccountInfo,
            forceRefresh: false
        };

        this.silentMailRequest = {
            scopes: ["openid", "profile", "Mail.Read"],
            //@ts-ignore
            account: this.emptyAccountInfo,
            forceRefresh: false
        };

        this.silentLoginRequest = {
            loginHint: "IDLAB@msidlab0.ccsctp.net"
        }
    }
    

    /**
     * Calls getAllAccounts and determines the correct account to sign into, currently defaults to first account found in cache.
     * TODO: Add account chooser code
     * 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    private getAccount(): AccountInfo | undefined {
        // need to call getAccount here?
        const currentAccounts = this.myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            console.log("No accounts detected");
            return undefined;
        }

        if (currentAccounts.length > 1) {
            // Add choose account code here
            console.log("Multiple accounts detected, need to add choose account code.");
            return currentAccounts[0];
        } else if (currentAccounts.length === 1) {
            return currentAccounts[0];
        }
    }

    /**
     * Checks whether we are in the middle of a redirect and handles state accordingly. Only required for redirect flows.
     * 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#redirect-apis
     */
    loadAuthModule(incomingFunction: any): void {
        this.myMSALObj.handleRedirectPromise().then((resp:any) => {
            this.handleResponse(resp, incomingFunction);
        }).catch(console.error);
    }

    /**
     * Handles the response from a popup or redirect. If response is null, will check if we have any accounts and attempt to sign in.
     * @param response 
     */
    handleResponse(response: AuthenticationResult, incomingFunction: any) {
        if (response !== null) {
            this.account = response.account;
        } else {
            this.account = this.getAccount();
        }

        if (this.account) {
            console.log(`handleResponse = ${JSON.stringify(this.account)}`)
            incomingFunction(this.account);
        }
    }



    /**
     * Calls loginPopup or loginRedirect based on given signInType.
     * @param signInType 
     */
    login(signInType: string, setUser: any): void {
        if (signInType === "loginPopup") {
            this.myMSALObj.loginPopup(this.loginRequest).then((resp: AuthenticationResult) => {
                this.handleResponse(resp, setUser);
            }).catch(err => {
                console.error(err)
            });
        } else if (signInType === "loginRedirect") {
            this.myMSALObj.loginRedirect(this.loginRedirectRequest);
        }
    }

    /**
     * Logs out of current account.
     */
    logout(account: AccountInfo): void {
        const logOutRequest: EndSessionRequest = {
            account
        };

        this.myMSALObj.logout(logOutRequest);
    }

    /**
     * Gets a token silently, or falls back to interactive popup.
     */
    private async getTokenPopup(silentRequest: SilentRequest, interactiveRequest: PopupRequest): Promise<any> {
        try {
            const response: AuthenticationResult = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                return this.myMSALObj.acquireTokenPopup(interactiveRequest).then((resp) => {
                    return resp.accessToken;
                }).catch((err) => {
                    console.error(err);
                    return null;
                });
            } else {
                console.error(e);
            }
        }
    }

    /**
     * Gets a token silently, or falls back to interactive redirect.
     */
    private async getTokenRedirect(silentRequest: SilentRequest, interactiveRequest: RedirectRequest): Promise<any> {
        try {
            const response = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                this.myMSALObj.acquireTokenRedirect(interactiveRequest).catch(console.error);
            } else {
                console.error(e);
            }
        }
    }
}

export default AzureAuthenticationContext ;