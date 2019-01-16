import { UserType } from '@app/constants/UserType'

export class Constants {

    public static SERVER_ADDRESS = 'http://localhost:8081/';
    public static SERVER_PROXY = '/rest/api';
    public static LogginErrorMsg = 'LogginErrorMsg';
    public static IsUserLogged = 'isUserLoged';
    public static Token = 'Token';
    public static RefreshToken = 'RefreshToken';
    public static Roles = 'Roles';
    public static UserId = 'UserId';

    public static SCH_PREFIX_PREFIX_URL: string = Constants.SERVER_PROXY + '/class-prefixex';
    public static SCH_PREFIX_REGISTRY_PREFIX_URL: string = Constants.SERVER_PROXY + '/class-prefix-registry';

    public static SCH_CLASS_TYPE_PREFIX_URL = Constants.SERVER_PROXY + '/class-type';
    public static SCH_CLASS_TYPE_REGISTRY_PREFIX_URL: string = Constants.SERVER_PROXY + '/class-type-registry';

    public static ALERT_STYLES = {
        ALERT_DANGER : 'alert-danger',
        ALERT_SUCCESS : 'alert-success',
        ALERT_WARNING : 'alert-warning'
    }

    public static REQUEST_SUCCESS_MESSAGE = 'Czynność zakończona powodzeniem.';
    public static MESSAGE_ERROR_PREFIX = 'Czynność zakończona niepowodzieniem.';
    public static MESSAGE_ERROR_SUFIX = ' Proszę spróbować ponownie.';

    public static MESSAGE_ERROR_400 = 'Błąd aplikacji.';
    public static MESSAGE_ERROR_500 = 'Błąd serwera.';
    public static PAGINATION_ERROR = 'Błąd w w działaniu paginacji.';

    static prefixes = {
        loading: {
            failure : 'Niepowodzenie w pobraniu prefiksów.',
            noPrefixes: 'Brak prefiksów w bazie.',
        },
        delete: {
            failure : 'Niepowodzenie usunięcia prefiksu.'
        },
        add: {
            success: 'Dodanie prefiksu/prefiksów zakończone powodzeniem.',
            failure: 'Niepowodzenie dodania prefiksu/prefiksów.',

        },
        validation: {
            prefixExists: 'Prefiks znajduje się już w zbiorze.',
            failure: 'Nazwa prefiksu posiada nieprawidłowy format.'
        },
        update: {
            success: 'Aktualizacja prefiksu zokończona powodzeniem.',
            failure: 'Niepowodzenie w akutalizacji prefiksu.'
        }
    }

    static classTypes = {
        loading: {
            failure : 'Niepowodzenie w pobraniu typu klas.',
            noPrefixes: 'Brak typow klas w bazie.',
        },
        delete: {
            failure : 'Niepowodzenie usunięcia typu klasy.'
        },
        add: {
            success: 'Dodanie typu/typów klasy zakończone powodzeniem.',
            failure: 'Niepowodzenie dodania typu/typów klasy.',

        },
        validation: {
            prefixExists: 'Typ klasy znajduje się już w zbiorze.',
            failure: 'Nazwa typu klasy posiada nieprawidłowy format.'
        },
        update: {
            success: 'Aktualizacja typu klasy zokończona powodzeniem.',
            failure: 'Niepowodzenie w akutalizacji typu klasy.'
        }
    }
}

