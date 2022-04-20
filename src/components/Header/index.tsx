import React from 'react';
import styled from 'styled-components';

interface Props {
	title: string;
}

const Title = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
`;

const Header = ({ title }: Props) => {
	return (
		<Title>
			<h1>{title}</h1>
		</Title>
	);
};

export default Header;
