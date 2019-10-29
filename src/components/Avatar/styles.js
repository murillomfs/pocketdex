import styled from 'styled-components';

export const Container = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
        width: 180px;
        height: 180px;
        background: rgba(255,255,255,.6);
        border-radius: 100%;
    }

    span { color: #fff; font-size: 18px; font-weight: 600; display: block; margin-top: 30px; }
`;
