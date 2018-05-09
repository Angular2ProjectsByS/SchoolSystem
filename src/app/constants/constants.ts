import { UserType } from "../constants/UserType"

export class Constants {
    public static SERVER_ADDRESS: string = "http://localhost:8081/";
    public static LogginErrorMsg: string = "LogginErrorMsg";
    public static AdminIsLogged: string = "AdminIsLogged";
    public static Token: string = "Token";
    public static RefreshToken: string = "RefreshToken";
    public static Roles = "Roles";
    public static UserTypes: UserType[] = [];
}

