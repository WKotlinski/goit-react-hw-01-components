import data from "../../assets/data.json";
import PropTypes from "prop-types";
import css from "./statistics.module.css";
const Stats = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.stat}>
        {stats.map((stat) => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label} </span>
            <span className={css.percentage}>{stat.percentage}</span>
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
