import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import Loading from './Loading';
import { ListStoreType } from '../store/ListStore';

const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 1024px;
	text-align: center;
`;

interface Props {
	store: ListStoreType;
}

const Main = observer(({ store }: Props) => {
	const { catList, searchCatList, isLoading, getAllList, searchData, searchConditionalList } =
		store;

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
			{isLoading && <Loading type="spai" color="white" message="로딩중. . 🐈" />}
			<List catList={catList} />
		</Container>
	);
});

export default Main;
