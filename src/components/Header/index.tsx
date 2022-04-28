import React from 'react';
import styled from 'styled-components';

interface Props {
	title: string;
}

const Title = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
	cursor: pointer;
`;

const Header = ({ title }: Props) => {
	const refresh = () => {
		window.location.replace('/');
	};
	return (
		<Title onClick={refresh}>
			<h1>{title}</h1>
		</Title>
	);
};

export default Header;
