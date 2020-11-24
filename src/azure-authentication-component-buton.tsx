import React, { useState } from 'react';
import AzureAuthenticationContext from "./azure-authentication-context";
import { AccountInfo } from "@azure/msal-browser";
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;


const AzureAuthenticationButton = ( { currentUser }:any): JSX.Element => {

    const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();
    const [authenticated, setAuthenticated] = useState<Boolean>(false);
    const [user, setUser] = useState<AccountInfo>();
    //const { isAuthenticated, signOut } = AzureAuthenticationContext.init();

    //const authModule: any = AzureAuthenticationContext();
/*
    window.addEventListener("load", async () => {
        AzureAuthenticationContext.loadAuthModule();
    });
*/
    const signIn = (method: string): void => {
        const typeName = "loginPopup";
        const signInType = isIE ? "loginRedirect" : typeName;
        authenticationModule.login(signInType, returnedAccountInfo);

    }
    
    const returnedAccountInfo = (user: AccountInfo) => {
        console.log(`WebsiteAuth = ${JSON.stringify(user)}`)
        setAuthenticated(user?.name ? true : false);
        currentUser = user;
        setUser(user);
    } 
    const signOut = (): void => {
        if (user) {
            currentUser = undefined;
            authenticationModule.logout(user);
        }
    }
    
    
    return (
        <div>
            {!authenticated && (
                <div>
                    <button onClick={() => signIn("loginPopup")}>Sign in (Pop-up)</button>
                </div>
            )}

            {authenticated && (
                <button onClick={() => signOut()}>{ user?.name } Sign out</button>
            )}
        </div>
    );
};

export default AzureAuthenticationButton;


