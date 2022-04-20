import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import axios from 'axios';
import catDataType from '../types/catData';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 1024px;
	text-align: center;
`;

const Main = () => {
	const [catList, setCatList] = useState<catDataType[]>([]);
	const [searchCatList, setSearchCatList] = useState<catDataType[]>([]);
	const url = 'https://api.thecatapi.com/v1/breeds';

	/** 모든 데이터 조회 */
	const getAllData = async () => {
		const result = await axios.get(url);
		result.status === 200 ? setCatList(result.data) : setCatList([]);
	};

	/** 두글자 이상 입력시 검색*/
	const searchData = async (event: React.ChangeEvent<{ name?: string; value: string }>) => {
		const { value } = event.target;

		if ((value as string).length >= 2) {
			const result = await axios.get(url + `/search?q=${value}`);
			result.status === 200 ? setSearchCatList(result.data) : setSearchCatList([]);
		}
	};

	useEffect(() => {
		getAllData();
	}, []);

	return (
		<Container>
			<Header title="😸 고양이 사진 갤러리 😻" />
			<SearchBar searchData={searchData} />
			<List catList={catList} />
		</Container>
	);
};

export default Main;
