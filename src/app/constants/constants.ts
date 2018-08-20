import { UserType } from "@app/constants/UserType"

export class Constants {

    public static SERVER_ADDRESS: string = "http://localhost:8081/";
    public static SERVER_PROXY: string = "/rest/api";
    public static LogginErrorMsg: string = "LogginErrorMsg";
    public static IsUserLogged: string = "AdminIsLogged";
    public static Token: string = "Token";
    public static RefreshToken: string = "RefreshToken";
    public static Roles = "Roles";
    
    public static SCH_PREFIX_PREFIX_URL: string = Constants.SERVER_PROXY + "/class-prefixex";
    public static SCH_PREFIX_REGISTRY_PREFIX_URL: string = Constants.SERVER_PROXY + "/class-prefix-registry";

    public static ALERT_STYLES = {
        ALERT_DANGER : "alert-danger",
        ALERT_SUCCESS : "alert-success",
        ALERT_WARNING : "alert-warning"
    }

    static prefixes = {
        loading: {
            failure : "Niepowodzenie w pobraniu prefiksów.",
            noPrefixes: "Brak prefiksów w bazie.",
        },
        delete: {
            failure : "Niepowodzenie usunięcia prefiksu."
        },
        add: {
            success: "Dodanie prefiksu/prefiksów zakończone powodzeniem.",
            failure: "Niepowodzenie dodania prefiksu/prefiksów.",
            
        },
        validation: {
            prefixExists: "Prefiks znajduje się już w zbiorze.",
            failure: "Nazwa prefiksu posiada nieprawidłowy format."
        },
        update: {
            success: "Aktualizacja prefiksu zokończona powodzeniem.",
            failure: "Niepowodzenie w akutalizacji prefiksu."
        }
    }

    public static REQUEST_SUCCESS_MESSAGE = "Czynność zakończona powodzeniem.";
    public static MESSAGE_ERROR_PREFIX = "Czynność zakończona niepowodzieniem."; 
    public static MESSAGE_ERROR_SUFIX = " Proszę spróbować ponownie.";

    public static MESSAGE_ERROR_400 = "Błąd aplikacji.";
    public static MESSAGE_ERROR_500 = "Błąd serwera.";
    public static PAGINATION_ERROR = "Błąd w w działaniu paginacji.";
}

