import styled from "styled-components";

const StyledGroupModal = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	max-height: calc(100% - 1rem);
	vertical-align: top;

	.modal-table {
		max-height: 25vmax;
		overflow: auto;
	}
`;

export default StyledGroupModal;
