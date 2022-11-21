import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 14px;

    > div {
        display: flex;
        flex-direction: column;

        padding: 8px 0;
    }

    > span {
        color: var(--gray);

        margin-bottom: 3px;
    }
`;