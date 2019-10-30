import styled from 'styled-components';

export const Container = styled.div`
    height: 300px;
    background: rgb(185,153,195);
    background: linear-gradient(90deg, rgba(185,153,195,1) 0%, rgba(78,77,142,1) 100%);

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
    }

    h1 {
        color: #fff;
        font-weight: 800;
        font-size: 20px;
    }

    .avatar-holder {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .avatar {
        width: 150px;
        height: 150px;
        background: rgba(255,255,255,.2);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span { 
        color: #fff; 
        font-size: 18px; 
        font-weight: 600; 
        display: block; 
        margin-top: 30px; 
        text-transform: capitalize;
    }
`;

export const List = styled.div`
    padding: 0 15px;

    ul { 
        padding: 0; 
        list-style: none;
    }

    ul li {
        padding: 0 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #f1f1f1;
    }

    ul li svg { display: none; }

    ul li span {
        font-weight: 600;
        color: #000;
        font-size: 14px;
    }

    ul li:first-child { 
        background: rgb(255,226,1);
        background: linear-gradient(90deg, rgba(255,226,1,1) 0%, rgba(232,179,4,1) 100%);
        border-radius: 0 0 12px 12px;
    }

    ul li:first-child svg { display: block; }
    ul li:first-child span { color: #fff; }
    ul li:first-child .number { display: none; }
    ul li:first-child .type { border: 1px solid #fff; }

    ul li .number { width: 24px; text-align: center; display: inline-block; }
    ul li .name { width: 80px; text-align: left; display: inline-block; }

    ul li .type {
        font-size: 10px;
        display: inline-block;
        padding: 5px 8px;
        border: 1px solid #ccc;
        border-radius: 2px;
    }

    .close {
        display: inline-block;
        background: red;
        font-size: 10px;
        color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        text-align: center;
        font-weight: 600;
        line-height: 13px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -8px;
        margin: auto;
    }
`;
