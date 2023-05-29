import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 20px 20px;
`;

export const ReviewList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style: disc;
`;

export const ReviewItem = styled.li`
  padding: 5px 5px;
  margin-bottom: 3px;
`;

export const ReviewAvtor = styled.p`
  font-weight: 500;
  margin-bottom: 3px;
`;
