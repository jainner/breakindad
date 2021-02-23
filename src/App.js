import React, { useState } from 'react';
import styled from '@emotion/styled'
import Frase from './component/frase'

const Contenedor = styled.div`
	display: flex;
	align-items:center;
	padding-top:5rem ;
	flex-direction:column;

`

const Boton = styled.button`
	background:-webkit-linear-gradient(top left,
		#007d35 0%, #007d35 40%, #0f574e 100%
	);
	background-size: 300px;
	font-family:Arial,Helvetica,'sans-serif';
	color:#fff;
	margin-top:3rem;
	padding:1rem 3rem;
	font-size:2rem;
	border:none;
	box-shadow: 3px 3px 5px 3px #000000;
	cursor:pointer;
`

function App() {

	const [frase,guargdarFrase] = useState({})

	const consultarApi = async() =>{
		const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
		const frase = await api.json()
		guargdarFrase(frase[0])		
	}

  return (
	<Contenedor>
		<Frase
			frase={frase}
		/>
		<Boton
			onClick={consultarApi}
		>
			obtener frase
		</Boton>
	</Contenedor>
  );
}

export default App;
