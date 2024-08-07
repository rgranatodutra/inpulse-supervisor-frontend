import { createGlobalStyle, css } from "styled-components";

const darkMode = css`
    :root {
        --color-primary: rgb(245, 90, 75);
		--color-primary-o: rgba(245, 90, 75, 0.2);
		--color-primary-so: rgba(245, 90, 75, 0.125);
        --color-grey-8: #15171A;
        --color-grey-7-h: #212529;
        --color-grey-7: #2B2F33;
        --color-grey-6-h: #495057; /* Tonalidade intermediária */
        --color-grey-6: #868E96;
        --color-grey-5: #ADB5BD;
        --color-grey-4: #CED4DA;
        --color-grey-3: #DEE2E6;
        --color-grey-2: #F0F1F3;
        --color-grey-1: #F1F3F5;
        --color-grey-0: #F8F9FA;

		--color-grey-8-o: rgba(21,23,26, 0.125);
		--color-grey-0-o: rgba(248, 249, 250, 0.125);
		
		* {
			color-scheme: dark !important;
		}
    }
`;

const lightMode = css`
    :root {
        --color-primary: rgb(245, 90, 75);
		--color-primary-o: rgba(245, 90, 75, 0.2);
		--color-primary-so: rgba(245, 90, 75, 0.125);
        --color-grey-0: #15171A;
        --color-grey-1: #212529;
        --color-grey-2: #2B2F33;
        --color-grey-3: #495057; /* Tonalidade intermediária */
        --color-grey-4: #868E96;
        --color-grey-5: #ADB5BD;
        --color-grey-6: #CED4DA;
        --color-grey-6-h: #DEE2E6;
        --color-grey-7: #F0F1F3;
        --color-grey-7-h: #F1F3F5;
        --color-grey-8: #F8F9FA;

		--color-grey-0-o: rgba(21, 23, 27, 0.125);
    }
`;

const GlobalStyles = createGlobalStyle<{ darkMode: boolean }>`
${props => props.darkMode ? darkMode : lightMode};

/* Reset CSS */
* {
	margin: 0;
	padding: 0;
	border: none;
	outline: none;

	background: none;
	cursor: default;
}

/* Global */
h1 {
	font-size: 1.125rem;
	font-weight: 500;
	color: var(--color-grey-0);
}

h2 {
	font-size: 1rem;
	font-weight: 500;
	color: var(--color-grey-1);
}

h3 {
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--color-grey-2);
}

body {
	font-family: 'Rethink Sans', sans-serif;
	font-size: 0.875rem;
	font-weight: 400;

	width: 100vw;
	height: 100vh;
	box-sizing: border-box;

	color: var(--color-grey-2);
}


#root {
	width: 100%;
	height: 100%;
	background-color: var(--color-grey-8);
}

button {
	cursor: pointer !important;
	transition: 0.2s ease-in-out;
}

button:disabled {
	pointer-events: none;
	cursor: default !important;
}

button>svg {
	pointer-events: none;
}

::-webkit-scrollbar {
	width: 0.5rem;
	height: 0.5rem;
}

::-webkit-scrollbar-thumb {
	background-color: var(--color-primary);
}

.phone_input_container {
	font-family: 'Rethink Sans', sans-serif;
}

.phone_input_dropdown>.country:hover {
	background: var(--color-grey-6-h) !important;
}

.phone_input_dropdown>.country.highlight {
	background: var(--color-grey-6) !important;
	color: var(--color-grey-2) !important;
}

.phone_input_button>.selected-flag:hover {
	background: var(--color-grey-6) !important;
}

.phone_input_button>.selected-flag.open {
	background: var(--color-grey-5) !important;
}

.customer_active_tag {
	box-sizing: border-box;
	border: 1px solid;
	width: max-content;
	text-align: center;
	padding: 0.125rem 1rem;
	border-radius: 0.25rem;
	font-weight: 600;
	font-size: 0.75rem;

	user-select: none;
}

.customer_active_tag.active {
	background-color: rgba(70, 200, 50, 0.125);
	color: rgb(70, 200, 50);
}

.customer_active_tag.inactive {
	background-color: rgba(200, 70, 50, 0.125);
	color: rgb(200, 70, 50);
}

`;

export default GlobalStyles;