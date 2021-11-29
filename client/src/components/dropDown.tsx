/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, Fragment } from "react";
import Select from "react-select";
import axios from "axios";
import AsyncSelect from 'react-select/async';

export const DropDown = (props: any) => {
  const [year, setYear] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);

  const [inputValue, setValue] = useState('');

  const getModel = async () => {
    const result = await axios(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    );
    setModel(result.data);
  };

  const handleInputChange = (value: any) => {
    setValue(value);
  };
 
  const handleChange = (value: any) => {
    setModel(value);
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
        // getOptionLabel={e => e.Model_Name}
        // getOptionValue={e => e.Model_Name}
        loadOptions={getModel}
        onInputChange={handleInputChange}
        onChange={handleChange}
        />
    </Fragment>
  );
};

