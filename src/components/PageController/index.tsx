import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import StyledPageController from "./styles";
import { SetURLSearchParams } from "react-router-dom";

export type PageState = {
    current: number;
    total: number;
    perPage: number;
}

type PageControllerProps = {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
    totalPages: number;
}

const PageController = ({ searchParams, setSearchParams, totalPages }: PageControllerProps) => {

    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? Number(pageParam) : 1;
    const isPreviousPageButtonDisabled: boolean = currentPage <= 1;
    const isNextPageButtonDisabled: boolean = currentPage >= totalPages;

    const onClickPreviousPage = () => setSearchParams(prev => {
        prev.set("page", String(currentPage - 1));

        return prev;
    });

    const onClickNextPage = () => setSearchParams(prev => {
        prev.set("page", String(currentPage + 1));

        return prev;
    });

    return (
        <StyledPageController>
            <button
                disabled={isPreviousPageButtonDisabled}
                onClick={onClickPreviousPage}
            >
                <FaAngleLeft />
            </button>
            <span>
                Página: {currentPage}/{totalPages}
            </span>
            <button
                disabled={isNextPageButtonDisabled}
                onClick={onClickNextPage}
            >
                <FaAngleRight />
            </button>
        </StyledPageController>
    );
}

export default PageController;