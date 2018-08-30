import { v4 as uuid } from 'uuid';


class Counter {

    name: string;
    count: number;
    uuid: string = uuid();

    constructor(name: string, count: number) {
           this.name = name;
           this.count = count;
    }
}

export default Counter;