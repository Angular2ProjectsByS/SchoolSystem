import { ViewMessageModel } from "@app/model/view/view-messages-model";

export class PrefixViewMessages extends ViewMessageModel {

    constructor() {
        super();
        this.setUp();
    }

    setUp() {
        this.title = "Prefiksy";
        this.loading.failure = "Niepowodzenie w pobraniu prefisów.";
        this.loading.noEntities = "Brak prefiksów w bazie.";
        this.delete.failure = "Niepowodzenie usunięcia prefiksu.";
        this.delete.title = "Czy napewno chcesz usunąć prefix";
        this.delete.messageBody =  "Usuwanie prefiksu";
        this.add.success = "Dodanie prefiksu/prefiksów zakończone powodzeniem.";
        this.add.failure = "Niepowodzenie dodania prefiksu/prefiksów.";
        this.validation.entityExists = "Prefiks znajduje się już w zbiorze.";
        this.validation.failure = "Nazwa prefiksu posiada nieprawidłowy format.";
        this.validation.wrongFormating = "Nazwa prefiksu posiada nieprawidłowy format.";
        this.update.success = "Aktualizacja prefiksu zokończona powodzeniem.";
        this.update.failure = "Niepowodzenie w akutalizacji prefiksu.";
    }

}
