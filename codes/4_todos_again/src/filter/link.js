import { connect } from 'react-redux';

const Link = ({ onClick, filter, children }) => {
  if (filter === children) {
    return <b className="filter selected">{children}</b>;
  }
  else {
    return <a href="#" className="filter not-selected"
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}>
      {children}
    </a>
  }
};

const mapStateToProps = (state) => ({
  filter: state.filter
});

export default connect(mapStateToProps)(Link);