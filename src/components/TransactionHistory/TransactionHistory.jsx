import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TR,
  TH,
  Tbody,
  BR,
  TD,
} from './TransactionHistory-styled';

export const TransactionsHistory = ({ items }) => {
    return (
      <Table>
        <Thead>
          <TR>
            <TH>Type</TH>
            <TH>Amount</TH>
            <TH>Currency</TH>
          </TR>
        </Thead>

        <Tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <BR key={id}>
                <TD>{type}</TD>
                <TD>{amount}</TD>
                <TD>{currency}</TD>
              </BR>
            );
          })}
        </Tbody>
      </Table>
    );
};


TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};