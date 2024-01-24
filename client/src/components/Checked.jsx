const Checked = ({ isChecked, value }) => {
    if (isChecked) {
      return <p>{value}</p>;
    }
    return null
  }

  export default Checked