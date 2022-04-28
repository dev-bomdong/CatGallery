import React from 'react';
import styled from 'styled-components';

interface Props {
	title: string;
}

const Title = styled.div`
	width: 100%;
	margin: 1rem auto 0;
	padding: 0.05rem 0;
	text-align: center;
	background-color: #dae5d0;
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
`;

const TitleText = styled.h1`
	cursor: pointer;
	color: black;
`;

const Header = ({ title }: Props) => {
	const refresh = () => {
		window.location.replace('/');
	};
	return (
		<Title>
			<TitleText onClick={refresh}>{title}</TitleText>
		</Title>
	);
};

export default Header;
