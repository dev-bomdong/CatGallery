import React from 'react';
import styled from 'styled-components';
import { catDataType } from '../../types/catData';

const SearchSection = styled.div`
	width: 100%;
	margin: 0 auto 2rem auto;
	display: flex;
	justify-content: center;
	z-index: 300;
`;

const SearchInput = styled.div`
	height: 1.3rem;
	text-align: center;
	z-index: 200;
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
	z-index: 100;
`;

interface Props {
	searchData: (value: string) => void;
	searchConditionalList: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
	searchCatList: catDataType[];
}

const SearchBar = ({ searchData, searchConditionalList, searchCatList }: Props) => {
	return (
		<SearchSection>
			<SearchInput>
				<Input onChange={searchConditionalList} placeholder="두 글자 이상 입력해주세요" />
				{searchCatList?.map((data, idx) => {
					return (
						<SearchResult
							key={idx}
							onClick={e => {
								searchData(e.currentTarget.innerHTML);
							}}
						>
							{data.name}
						</SearchResult>
					);
				})}
			</SearchInput>
			<SearchBtn type="submit">Search</SearchBtn>
		</SearchSection>
	);
};

export default SearchBar;
