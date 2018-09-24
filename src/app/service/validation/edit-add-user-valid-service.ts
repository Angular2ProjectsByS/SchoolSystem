export abstract class ValidationService {
    
    protected validate(word, pattern) {
        if (word === undefined) return false;
        return pattern.test(word);
    }

}