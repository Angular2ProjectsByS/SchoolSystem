import { ViewMessageModel } from "@app/model/view/view-messages-model";


export class ClassSpecializationViewMessages extends ViewMessageModel {

    constructor() {
        super();
        this.setUp();
    }

    setUp() {
        this.title = "Specjalizacje (klasy)";
        this.loading.failure = "Niepowodzenie w pobraniu specjializacji.";
        this.loading.noEntities = "Brak specjalizacji w bazie.";
        this.delete.failure = "Niepowodzenie w usunięciu specjializacji.";
        this.delete.title = "Usuwanie specjalizacji";
        this.delete.messageBody = "Czy napewno chcesz usunąć specjalizacje"; 
        this.add.success = "Dodanie specjalizacji zakończone powodzeniem.";
        this.add.failure = "Niepowodzenie dodania specjalizacji.";
        this.validation.entityExists = "Specjalizacja znajduje się już w zbiorze.";
        this.validation.failure = "Nazwa specjalizacji posiada nieprawidłowy format.";
        this.validation.wrongFormating = "Nazwa specjalizacji posiada nieprawidłowy format.";
        this.update.success = "Aktualizacja prefiksu zakończona powodzeniem.";
        this.update.failure = "Niepowodzenie w aktualizacji prefiksu.";
    }

}