import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
`;

const TextBox = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Loading = ({ color, message }) => {
	return (
		<Container>
			<TextBox>
				<h1>{message}</h1>
				<ReactLoading color={color} height="80%" width="80%" />
			</TextBox>
		</Container>
	);
};

export default Loading;
