import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SetURLSearchParams } from "react-router-dom";
import StyledPageController from "./styles";

export type PageState = {
	current: number;
	total: number;
	totalPages: boolean;
};

type PageControllerProps = {
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams;
	nextPage: boolean;
	disabled: boolean;
};

const PageController = ({ searchParams, setSearchParams, nextPage, disabled }: PageControllerProps) => {
	const pageParam = searchParams.get("page");
	const currentPage = pageParam ? Number(pageParam) : 1;
	const isPreviousPageButtonDisabled: boolean = currentPage <= 1 || disabled;
	const isNextPageButtonDisabled: boolean = !nextPage || disabled;

	const onClickPreviousPage = () =>
		setSearchParams((prev) => {
			prev.set("page", String(currentPage - 1));

			return prev;
		});

	const onClickNextPage = () =>
		setSearchParams((prev) => {
			prev.set("page", String(currentPage + 1));

			return prev;
		});

	return (
		<StyledPageController>
			<button disabled={isPreviousPageButtonDisabled} onClick={onClickPreviousPage}>
				<FaAngleLeft />
			</button>
			<span>Página: {currentPage}</span>
			<button disabled={isNextPageButtonDisabled} onClick={onClickNextPage}>
				<FaAngleRight />
			</button>
		</StyledPageController>
	);
};

export default PageController;
