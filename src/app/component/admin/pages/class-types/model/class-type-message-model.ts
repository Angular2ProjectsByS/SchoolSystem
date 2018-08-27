import { ViewMessageModel } from "@app/model/view/view-messages-model";

export class ClassTypeMessageModel extends ViewMessageModel {

    constructor() {
        super();
        this.setUp();
    }

    setUp() {
        this.loading.failure = "Niepowodzenie w pobraniu typu klas.";
        this.loading.noPrefixes = "Brak typow klas w bazie.";
        this.delete.failure = "Niepowodzenie usunięcia typu klasy.";
        this.add.success = "Dodanie typu/typów klasy zakończone powodzeniem.";
        this.add.failure = "Niepowodzenie dodania typu/typów klasy.";
        this.validation.prefixExists = "Typ klasy znajduje się już w zbiorze.";
        this.validation.failure = "Nazwa typu klasy posiada nieprawidłowy format.";
        this.update.success = "Aktualizacja typu klasy zokończona powodzeniem.";
        this.update.failure = "Niepowodzenie w akutalizacji typu klasy.";
    }

}
