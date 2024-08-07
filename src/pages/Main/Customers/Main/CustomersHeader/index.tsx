import { FaArrowDown, FaArrowUp, FaMapLocationDot, FaTags, FaUsers } from "react-icons/fa6";
import { useEffect } from "react";
import { customRequest } from "../../../../../api";
import InfoBox from "../../../../../components/InfoBox";
import InfoSection from "../../../../../styles/info-section.style";
import useCustomState from "../../../../../utils/customState.hook";

type CustomerStatistics = {
    customersCount: number;
    largestSegment: string;
    largestCity: string;
    largestState: string;
    percentageOfCustomersInLargestSegment: string;
    percentageOfCustomersInLargestState: string;
    customersIncreasePreviousMonth: number;
}

const CustomersHeader = () => {
    const customersStatisticsState = useCustomState<CustomerStatistics>({} as CustomerStatistics);

    useEffect(() => {
        customRequest<CustomerStatistics, undefined>({
            method: "get",
            service: "customers",
            endpoint: "/statistics",
            onSuccess: (data) => customersStatisticsState.set(data),
            enableToast: true,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        customersCount,
        customersIncreasePreviousMonth,
        largestSegment,
        largestState,
        percentageOfCustomersInLargestState,
        percentageOfCustomersInLargestSegment
    } = customersStatisticsState.value;

    const percentageCustomersSegment = <p><b>{percentageOfCustomersInLargestSegment?.slice(0, 4)}%</b>{" "}dos seus clientes são desse segmento</p>
    const percentageCustomersState = <p><b>{percentageOfCustomersInLargestState?.slice(0, 4)}%</b>{" "}dos seus clientes estão aqui</p>
    const percentageCustomersIncreased = (
        <>
            <span
                className={
                    customersIncreasePreviousMonth > 0 ? "increase" :
                        customersIncreasePreviousMonth < 0 ? "decrease" : ""
                }
            >
                {
                    customersIncreasePreviousMonth > 0 ? <><FaArrowUp /> - </> :
                        customersIncreasePreviousMonth < 0 ? <><FaArrowDown /> + </> : <>+</>
                }
                {customersIncreasePreviousMonth}%
            </span>
            em relação ao mês anterior
        </>
    );

    return (
        <InfoSection>
            <div>
                <InfoBox
                    icon={<FaUsers />}
                    title="Clientes Ativos"
                    mainValue={customersCount?.toLocaleString("pt-BR")}
                    subValue={percentageCustomersIncreased}
                />
                <InfoBox
                    icon={<FaTags />}
                    title="Maior Segmento"
                    mainValue={largestSegment}
                    subValue={percentageCustomersSegment}
                />
                <InfoBox
                    icon={<FaMapLocationDot />}
                    title="Maior Estado"
                    mainValue={largestState}
                    subValue={percentageCustomersState}
                />
            </div>
        </InfoSection>
    );
}

export default CustomersHeader;