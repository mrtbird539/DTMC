import React, { useState, useEffect, Fragment, Component } from "react";
import Select from "react-select";
import AsyncSelect from 'react-select/async';

export const DropDown = (props: any) => {
  const [year, setYear] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState(null);

  const getModel = () => {
    return carModels.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    ).then(results => {
        const res = results.data
        return res
    })
  };

  const handleInputChange = value => {
    setValue(value);
  };
 
  const handleChange = value => {
    setSelectedValue(value);
  }

  return (
    <Fragment>
      <Select options={year} />
      <Select options={make} />
      {/* <Select options={model} /> */}
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={model}
        getOptionLabel={e => e.first_name + ' ' + e.last_name}
        loadOptions={getModel}
        onInputChange={handleInputChange}
        onChange={handleChange} />
      {/* <button type="button" onClick={}>
        Search
        </button> */}
    </Fragment>
  );
};
