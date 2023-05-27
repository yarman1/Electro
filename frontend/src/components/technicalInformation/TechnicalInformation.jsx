import { useEffect, useState } from "react";
import classes from "./TechnicalInformation.module.css";
import TechnicalInformationItem from "./TechnicalInformationItem";

const TechnicalInformation = ({
  filters,
  type = "checkbox",
  getTechnicalInformation,
}) => {
  let filtersObject;

  if (filters) {
    filtersObject = filters.reduce((obj, filter) => {
      obj[filter.title + ""] = null;
      return obj;
    }, {});
  }

  const [createFilters, setCreateFilters] = useState({});
  const [infoIsFull, setInfoIsFull] = useState(false);

  useEffect(() => {
    if (
      typeof filtersObject === "object" &&
      Object.keys(createFilters).length === Object.keys(filtersObject).length
    )
      setInfoIsFull(true);
  }, [createFilters]);

  useEffect(() => {
    if (type === "radio") {
      getTechnicalInformation(createFilters, infoIsFull);
    }
  }, [createFilters, infoIsFull]);

  const setFilterHandler = (obj) => {
    filtersObject[obj.filter] = obj.value;
    setCreateFilters((prevObject) => {
      return { ...prevObject, [obj.filter]: obj.value };
    });
  };

  const generateUniqueId = () => {
    return Math.floor(Math.random() * Math.floor(10000)); // generate random number for unique ID
  };

  return (
    <div className={classes["technical-info"]}>
      <h2 className={classes["heading-secondary"]}>Technical Information</h2>
      <div className={classes.filters}>
        {filters && filters.length > 0
          ? filters.map((filter) => (
              <TechnicalInformationItem
                key={filter.title}
                filtersInfo={filter}
                type={type}
                uniqueId={generateUniqueId()} // add unique ID to TechnicalInformationItem component
                setFilterHandler={setFilterHandler}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default TechnicalInformation;
