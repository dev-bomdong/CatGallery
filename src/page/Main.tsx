import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import { BASE_URL } from '../config';
import { catDataType, searchedCatType } from '../types/catData';
import defaultCat from '../assets/image/default_cat.jpeg';

const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 1024px;
	text-align: center;
`;

const Main = () => {
	const [catList, setCatList] = useState<searchedCatType[]>([]);
	const [searchCatList, setSearchCatList] = useState<catDataType[]>([]);

	const mappingValue = (list: catDataType[]) => {
		let resultArr = [];
		const result = list.map((data: catDataType) => {
			return { name: data.name, image: data?.image?.url };
		});
		resultArr = [...result];
		setCatList(resultArr);
	};

	/** 모든 데이터 조회 */
	const getAllList = async () => {
		const result = await axios.get(BASE_URL);
		result.status === 200 ? mappingValue(result.data) : setCatList([]);
	};

	/** 선택한 데이터 조회*/
	const searchData = async (value: string) => {
		const result = await axios.get(BASE_URL + `/search?q=${value}`);
		result.status === 200
			? setCatList([
					{
						name: result.data[0].name,
						image: defaultCat,
					},
			  ])
			: setCatList([]);
		setSearchCatList([]);
	};

	/** 두글자 이상 입력시 데이터 조회 */
	const searchConditionalList = async (
		event: React.ChangeEvent<{ name?: string; value: string }>,
	) => {
		const { value } = event.target;

		if ((value as string).length >= 2) {
			const result = await axios.get(BASE_URL + `/search?q=${value}`);
			result.status === 200 ? setSearchCatList(result.data) : setSearchCatList([]);
		}
	};

	useEffect(() => {
		getAllList();
	}, []);

	return (
		<Container>
			<Header title="😸 고양이 사진 갤러리 😻" />
			<SearchBar
				searchData={searchData}
				searchConditionalList={searchConditionalList}
				searchCatList={searchCatList}
			/>
			<List catList={catList} />
		</Container>
	);
};

export default Main;
