const Filters = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          props.setNameFilter(e.target.value);
        }}
      />

      <input
        type="number"
        onChange={(e) => {
          props.setAgeFilter(e.target.value);
        }}
      />

      <label>
        <input
          type="radio"
          name="color"
          value="female"
          onChange={(e) => {
            props.setGenderFilter(e.target.value);
          }}
        />
        Female
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="male"
          onChange={(e) => {
            props.setGenderFilter(e.target.value);
          }}
        />
        Male
      </label>

      <input
        type="text"
        onChange={(e) => {
          props.setCompanyFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default Filters;
