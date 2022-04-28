import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { searchedCatType } from '../../types/catData';

interface Props {
	catList: searchedCatType[];
}

const Container = styled.section`
	max-width: 1024px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1em;
	background-color: white;
`;

const List = ({ catList }: Props) => {
	return (
		<Container>
			{catList.map((info, idx) => {
				return <Card key={idx} data={info} />;
			})}
		</Container>
	);
};

export default List;
