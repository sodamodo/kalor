import {observable} from 'mobx';
import Counter from './models';
import { v4 as uuid } from 'uuid';

class CounterStore {

    @observable counterMap: Map<string, Counter> = new Map()

    createNewCounter(name: string, count: number) {
        this.counterMap.set(uuid(), new Counter(name, count));
    }

    getAllCounters() {
        return this.counterMap.values();
    }
}

export default CounterStore;