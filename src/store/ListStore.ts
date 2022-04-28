import { makeAutoObservable } from 'mobx';
import { catDataType, searchedCatType } from '../types/catData';
import axios from 'axios';
import { BASE_URL } from '../config';
import defaultCat from '../assets/image/default_cat.jpeg';

class ListStore {
	constructor() {
		makeAutoObservable(this);
	}

	catList: searchedCatType[] = [];
	searchCatList: catDataType[] = [];
	isLoading: boolean = false;

	/** 조회된 전체 데이터 중 필요 항목 매핑 */
	mappingValue = (list: catDataType[]) => {
		const result = list.map((data: catDataType) => {
			const imageUrl = data.image?.url ? data.image.url : defaultCat;
			return { name: data.name, image: imageUrl };
		});
		this.catList = [...result];
	};

	/** 모든 데이터 조회 */
	getAllList = async () => {
		this.isLoading = true;
		const result = await axios.get(BASE_URL);
		result.status === 200 ? this.mappingValue(result.data) : (this.catList = []);
		this.isLoading = false;
	};

	/** 선택한 데이터 조회*/
	searchData = async (value: string) => {
		const result = await axios.get(BASE_URL + `/search?q=${value}`);
		result.status === 200
			? (this.catList = [
					{
						name: result.data[0].name,
						image: defaultCat,
					},
			  ])
			: (this.catList = []);
		this.searchCatList = [];
	};

	/** 두글자 이상 입력시 데이터 조회 */
	searchConditionalList = async (event: React.ChangeEvent<{ name?: string; value: string }>) => {
		const { value } = event.target;

		if ((value as string).length >= 2) {
			const result = await axios.get(BASE_URL + `/search?q=${value}`);
			result.status === 200 ? (this.searchCatList = result.data) : (this.searchCatList = []);
		}
	};
}

export default ListStore;

export interface ListStoreType {
	catList: searchedCatType[];
	searchCatList: catDataType[];
	isLoading: boolean;
	getAllList: () => void;
	searchData: (value: string) => void;
	searchConditionalList: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
}
