import styled from 'styled-components'

type ContainerProps = {
    shownBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.shownBackground ? '#E2E3E3' : '#E2E3E3'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor:  pointer;
   
`;

type IconProps = {
    opacity?: number;
    
} 

export const Icon = styled.img<IconProps>`
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    opacity: ${props => props.opacity ?? 1}
`;