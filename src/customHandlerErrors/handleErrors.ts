class MyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class UndefinedFilterError extends MyError {
    property: string;
    constructor(property: string) {
        super(property);
        this.property = property;
    }
}
