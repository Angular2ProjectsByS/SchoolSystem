export abstract class ValidationService {
    
    protected validate(word, pattern) {
        return pattern.test(word);
    }

}