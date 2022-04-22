import React from 'react';
import styled from 'styled-components';
import catDataType from '../../types/catData';

const SearchSection = styled.div`
	width: 100%;
	margin: 0 auto 2rem auto;
	display: flex;
	justify-content: center;
`;

const SearchInput = styled.div`
	height: 1.3rem;
	text-align: center;
`;

const Input = styled.input`
	width: 11.5rem;
	height: 1.3rem;
	padding: 0.2rem 0.8rem;
	border: 0.15rem solid #ccc;
	border-radius: 0.3rem;
	line-height: 1rem;
`;

const SearchBtn = styled.button`
	width: 4.5rem;
	height: 2rem;
	margin-left: 0.5rem;
	color: white;
	background-color: dodgerblue;
	border: none;
	border-radius: 0.3rem;
	font-size: 0.8rem;
	font-style: bold;
`;

const SearchResult = styled.div`
	width: 11.5rem;
	height: 1.3rem;
	padding: 0.2rem 0.8rem;
	border: 0.1rem solid #ddd;
	background-color: #f5f5f5;
	cursor: pointer;
`;

interface Props {
	searchData: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
	searchCatList: catDataType[];
}

const SearchBar = ({ searchData, searchCatList }: Props) => {
	return (
		<SearchSection>
			<SearchInput>
				<Input onChange={searchData} placeholder="두 글자 이상 입력해주세요" />
				{searchCatList?.map(data => {
					return <SearchResult>{data.name}</SearchResult>;
				})}
			</SearchInput>
			<SearchBtn type="submit">Search</SearchBtn>
		</SearchSection>
	);
};

export default SearchBar;
