import React from 'react';
import styled from 'styled-components';
import { catDataType } from '../../types/catData';

const SearchSection = styled.div`
	width: 100%;
	margin: 0 auto auto;
	padding: 1rem 0;
	display: flex;
	justify-content: center;
	z-index: 300;
	background-color: #a0bcc2;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
`;

const SearchInput = styled.form`
	height: 2rem;
	text-align: center;
	background-color: #a0bcc2;
`;

const InputDesc = styled.div`
	width: 10rem;
	display: inline-block;
	font-size: 1.1rem;
	font-weight: bold;
	color: white;
`;

const Input = styled.input`
	width: 11rem;
	height: 1.3rem;
	padding: 0.2rem 0.8rem;
	border: 0.15rem solid #ccc;
	border-radius: 0.3rem;
	line-height: 1rem;
	z-index: 200;
`;

const ResultContainer = styled.div`
	display: flex;
	justify-content: end;
`;

const SearchResult = styled.div`
	width: 11rem;
	height: 1.3rem;
	padding: 0.2rem 0.8rem;
	border: 0.1rem solid #ddd;
	border-radius: 0.3rem;
	background-color: #f5f5f5;
	cursor: pointer;
	z-index: 100;

	&:hover {
		color: dodgerblue;
		background-color: white;
	}
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
				<InputDesc>고양이명으로 찾기 :</InputDesc>
				<Input onChange={searchConditionalList} placeholder="두 글자 이상 입력해주세요" />
				{searchCatList?.map((data, idx) => {
					return (
						<ResultContainer>
							<SearchResult
								key={idx}
								onClick={e => {
									searchData(e.currentTarget.innerHTML);
								}}
							>
								{data.name}
							</SearchResult>
						</ResultContainer>
					);
				})}
			</SearchInput>
		</SearchSection>
	);
};

export default SearchBar;
