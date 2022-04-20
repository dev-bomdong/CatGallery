import React from 'react';
import styled from 'styled-components';

const SearchSection = styled.section`
	width: 100%;
	margin: 0 auto 2rem auto;
	text-align: center;
`;

const Input = styled.input`
	width: 11.5rem;
	height: 1.3rem;
	margin-bottom: 0.8rem;
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

interface Props {
	searchData: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
}

const SearchBar = ({ searchData }: Props) => {
	return (
		<SearchSection>
			<Input onChange={searchData} placeholder="두 글자 이상 입력해주세요" />
			<SearchBtn type="submit">Search</SearchBtn>
		</SearchSection>
	);
};

export default SearchBar;
