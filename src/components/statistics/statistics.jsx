import data from "../../assets/data.json";
import PropTypes from "prop-types";

const Stats = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map((stat) => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Stats.propTypes = {
  stats: PropTypes.array.isRequired,
};
const Statistic = () => <Stats stats={data} />;
export default Statistic;
