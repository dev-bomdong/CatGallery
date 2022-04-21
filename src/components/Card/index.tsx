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

	${CardContainer}:hover & {
		webkit-filter: blur(2px);
		filter: blur(2px);
		transition: filter 0.3s;
	}
`;

const CardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(90, 0, 10, 0.4);
	color: #fff;
	font-size: 1.5em;
	font-weight: bold;
	opacity: 0;

	&:hover {
	  color: white;
		font-size: 1.5em
		transform: scale(1.1);
		opacity: 1;
		transition: opacity 0.3s;
	}
`;

const Card = ({ data }: Props) => {
	return (
		<CardContainer>
			<CardImg src={data?.image?.url} />
			<CardName>{data.name}</CardName>
		</CardContainer>
	);
};

export default Card;
