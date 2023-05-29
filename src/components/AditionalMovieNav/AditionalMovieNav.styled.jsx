import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 3px;
  padding: 20px 20px;
  box-shadow: 0px 6px 5px -4px rgb(0 0 0 / 55%);
`;

export const InfoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const InfoList = styled.ul`
  font-size: 20px;
  list-style: disc;
  padding: 0 20px;
`;

export const InfoItem = styled.li`
  font-size: 20px;
  font-weight: 500;
`;
