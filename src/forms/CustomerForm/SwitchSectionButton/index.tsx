import { Context, ReactNode, useContext } from "react";
import StyledSwitchSectionButton from "./styles";

type SwitchSectionButtonProps = {
    children: ReactNode;
    displayOnMode: "edit" | "create" | "both";
    currentMode: "edit" | "create";
    sectionId: number;
    context: Context<any>;
}

const SwitchSectionButton = ({
    children,
    currentMode,
    displayOnMode,
    sectionId,
    context
}: SwitchSectionButtonProps) => {
    const { renderingSectionState } = useContext(context);

    const onClickFunction = () => renderingSectionState.set(sectionId);
    const isSelected = renderingSectionState.value === sectionId;
    const isDisplaying = displayOnMode === currentMode || displayOnMode === "both";

    return (
        <StyledSwitchSectionButton
            $isSelected={isSelected}
            $isDisplaying={isDisplaying}
            onClick={onClickFunction}
            type="button"
        >
            {children}
        </StyledSwitchSectionButton>
    );
}

export default SwitchSectionButton;