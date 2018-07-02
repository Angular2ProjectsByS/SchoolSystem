import { UserType } from "../constants/UserType"

export class Constants {
    public static SERVER_ADDRESS: string = "http://localhost:8081/";
    public static SERVER_PROXY: string = "/rest/api";
    public static LogginErrorMsg: string = "LogginErrorMsg";
    public static IsUserLogged: string = "AdminIsLogged";
    public static Token: string = "Token";
    public static RefreshToken: string = "RefreshToken";
    public static Roles = "Roles";
    
    public static SCH_PREFIX_PREFIX_URL: string = Constants.SERVER_PROXY + "/class-prefixex";
}

