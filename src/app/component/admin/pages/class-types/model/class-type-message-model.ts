import { ViewMessageModel } from "@app/model/view/view-messages-model";

export class ClassTypeMessageModel extends ViewMessageModel {

    constructor() {
        super();
        this.setUp();
    }

    setUp() {
        this.title = "Typy klas";
        this.loading.failure = "Niepowodzenie w pobraniu typu klas.";
        this.loading.noEntities = "Brak typow klas w bazie.";
        this.delete.failure = "Niepowodzenie usunięcia typu klasy.";
        this.delete.title = "Usuwanie typu";
        this.delete.messageBody = "Czy napewno chcesz usunąć typ";
        this.add.failure = "Niepowodzenie dodania typu/typów klasy.";
        this.add.success = "Dodanie typu/typów klasy zakończone powodzeniem.";
        this.validation.entityExists = "Typ klasy znajduje się już w zbiorze.";
        this.validation.failure = "Nazwa typu klasy posiada nieprawidłowy format.";
        this.validation.wrongFormating =  "Typ klasy posiada nieprawidłowy format.";
        this.update.success = "Aktualizacja typu klasy zokończona powodzeniem.";
        this.update.failure = "Niepowodzenie w akutalizacji typu klasy.";
    }

}
