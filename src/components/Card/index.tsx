import React from 'react';
import catDataType from '../../types/catData';
import styled from 'styled-components';

interface Props {
	data: catDataType;
}

const CardContainer = styled.div`
	position: relative;
	overflow: hidden;
	height: 100%;
	width: 100%;
`;

const CardImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: auto;
`;

const Card = ({ data }: Props) => {
	return (
		<CardContainer>
			{/* <img src={data?.image?.url} alt={data?.image?.id} /> */}

			<CardImg src={data?.image?.url} />
		</CardContainer>
	);
};

export default Card;
