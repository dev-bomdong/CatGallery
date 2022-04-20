import React from 'react';
import styled from 'styled-components';
import catDataType from '../../types/catData';
import Card from '../Card';

interface Props {
	catList: catDataType[];
}

const Container = styled.section`
	max-width: 1024px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1em;
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
