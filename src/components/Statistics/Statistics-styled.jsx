import styled from '@emotion/styled';



export const Section = styled.section`
  margin: 20px auto;
  padding: 20px;

  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg);

  border-radius: 10px;
  box-shadow: var(--main-shadow);
`;

export const Title = styled.h2`
  margin-bottom: 15px;

  text-align: center;
  
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 25px;
  
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Percentage = styled.span`
  font-weight: 700;

  padding-top: 10px;
  color: var(--percentage);
`;