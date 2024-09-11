import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SetURLSearchParams } from "react-router-dom";
import StyledPageController from "./styles";

export type PageState = {
	current: number;
	total: number;
	totalPages: boolean;
};

type PageControllerProps = {
	searchParams?: URLSearchParams;
	pageProp?: string;
	onClickNextPageFn?: () => void;
	onClickPreviousPageFn?: () => void;
	setSearchParams?: SetURLSearchParams;
	nextPage: boolean;
	disabled: boolean;
};

const PageController = ({
	searchParams,
	pageProp,
	onClickPreviousPageFn,
	onClickNextPageFn,
	setSearchParams,
	nextPage,
	disabled,
}: PageControllerProps) => {
	const pageParam = searchParams ? searchParams.get("page") : pageProp;
	const currentPage = pageParam ? Number(pageParam) : 1;
	const isPreviousPageButtonDisabled: boolean = currentPage <= 1 || disabled;
	const isNextPageButtonDisabled: boolean = !nextPage || disabled;

	const onClickPreviousPage = () => {
		if (setSearchParams) {
			setSearchParams((prev) => {
				prev.set("page", String(currentPage - 1));
				return prev;
			});
		}
		if (onClickPreviousPageFn) {
			onClickPreviousPageFn();
		}
	};

	const onClickNextPage = () => {
		if (setSearchParams) {
			setSearchParams((prev) => {
				prev.set("page", String(currentPage + 1));

				return prev;
			});
		}
		if (onClickNextPageFn) {
			onClickNextPageFn();
		}
	};
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
