/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, Fragment, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import AsyncSelect from 'react-select/async';

export const DropDown = (props: any) => {
  const [year, setYear] = useState<number | undefined>(2000);
  const [yearOptions, setYearOptions] = useState([{ value: 1995, label: '1995' }]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);

  const [inputValue, setValue] = useState('');

  useEffect( () => {
    console.log({year});
  }, [year]);

  const getModel = async () => {
    const result = await axios(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    );
    setModel(result.data);
  };

  return (
    <Fragment>
      <Select options={yearOptions} onChange={(e) => setYear(e?.value)}/>
      <Select options={make} />
      {/* <Select options={model} /> */}
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={model}
        // getOptionLabel={e => e.Model_Name}
        // getOptionValue={e => e.Model_Name}
        loadOptions={getModel}
        onInputChange={setValue}
        // onChange={setModel}
        />
    </Fragment>
  );
};

