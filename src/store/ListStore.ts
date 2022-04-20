import { makeAutoObservable } from 'mobx';

class SearchStore {
	constructor() {
		makeAutoObservable(this);
	}
}

export default SearchStore;
