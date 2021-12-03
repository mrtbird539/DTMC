import React, { useState, Fragment, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { makeOptions, yearOptions } from "../utils/ymm";

export const DropDown = (props: any) => {
  const [year, setYear] = useState<number | undefined>();
  const [make, setMake] = useState<string | undefined>();
  const [model, setModel] = useState<string | undefined>();
  const [modelOptions, setModelOptions] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    if (make) {
      getModel(make, year);
    }
  }, [make]);

  const getModel = async (make: any, year: any) => {
    const result = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    );
    const data = result.data.Results;
    console.log(data);
    const options = data.map((r: { Model_Name: string }) => ({
      value: r.Model_Name,
      label: r.Model_Name,
    }));
    setModelOptions(options);
  };

  return (
    <div className="columns">
      <Select
        className="column"
        id="year"
        options={yearOptions}
        onChange={(e) => setYear(e?.value)}
      />
      <Select
        className="column"
        options={makeOptions}
        isDisabled={!year}
        onChange={(e) => setMake(e?.value)}
      />
      <Select
        className="column"
        options={modelOptions}
        isDisabled={!make}
        onChange={(e) => setModel(e?.value)}
      />
    </div>
  );
};
