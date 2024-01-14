import transactions from "../../assets/transactions.json";
import PropTypes from "prop-types";
import css from "./transactionhistory.module.css";

const History = ({ item }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {item.map(({ type, amount, currency }, index) => (
        <tr key={index}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
History.propTypes = {
  item: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
const TransactionHistory = () => <History item={transactions} />;
export default TransactionHistory;
