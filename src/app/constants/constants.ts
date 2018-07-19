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

    public static REQUEST_SUCCESS_MESSAGE = "Czynność zakończona powodzieniem.";
    public static MESSAGE_ERROR_PREFIX = "Czynność zakończona niepowodzieniem."; 
    public static MESSAGE_ERROR_SUFIX = " Proszę spróbować ponownie.";

    public static MESSAGE_ERROR_400 = "Błąd aplikacji.";
    public static MESSAGE_ERROR_500 = "Błąd serwera.";

    public static LOADING_SCH_PREFIXES_ERROR = "Niepowodzenie w pobraniu prefiksów.";
    public static DELETING_PREFIX_FAILURE_MESSAGE = "Niepowodzenie usunięcia prefiksu.";
    public static NO_SCH_PREFIXES_MESSAGE = "Brak prefiksów w bazie.";
    
    public static SCH_PREFIXES_ADD_SET_FAILURE_MESSAGE = "Niepowodzenie dodania prefiksu/prefiksów.";
    public static SCH_PREFIXES_ADD_SET_SUCCESS_MESSAGE = "Dodanie prefiksu/prefiksów zakończone powodzeniem.";

    public static ALERT_STYLES = {
        ALERT_DANGER : "alert-danger",
        ALERT_SUCCESS : "alert-success",
        ALERT_WARNING : "alert-warning"
    }
}

