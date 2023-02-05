import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  width: 370px;
  margin-top: 40px;
  margin-bottom: 40px;

  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const Thead = styled.thead`
  margin-bottom: 20px;
  width: 100%;
  display: block;
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TR = styled.tr`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TH = styled.th`

  font-weight: 700;
  font-size: 24px;

  color: var(--accent);
  text-align: left;
  text-shadow: var(--main-shadow);
`;

export const Tbody = styled.tbody`
  width: 100%;
  display: block;
`;

export const BR = styled.tr`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TD = styled.td`
  padding: 10px;
  flex-basis: 33.333%;
  font-weight: 500;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;
