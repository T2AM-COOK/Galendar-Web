import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import axios from "axios";

const Join = ({ setTargets }) => {
  const [ageOptions, setAgeOptions] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const handleChangeCheck = (checked, item) => {
    if (checked) {
      setTargets((prev) => [...prev, item]);
    } else {
      setTargets((prev) => prev.filter((el) => el !== item));
    }
  };

  const getTarget = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/target", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setAgeOptions(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTarget();
  }, []);
  return (
    <S.Form>
      {ageOptions.map((option) => (
        <S.Val key={option.id}>
          <input
            type="checkbox"
            name="age"
            id={option.id}
            value={option.id}
            onChange={(e) =>
              handleChangeCheck(e.target.checked, e.target.value)
            }
          />
          {option.name}
        </S.Val>
      ))}
    </S.Form>
  );
};

const Region = ({ setRegions }) => {
  const [regionOptions, setRegionOptions] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const getRegion = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/region", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setRegionOptions(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRegion();
  }, []);

  const handleChangeCheck = (checked, item) => {
    if (checked) {
      setRegions((prev) => [...prev, item]);
    } else {
      setRegions((prev) => prev.filter((el) => el !== item));
    }
  };

  return (
    <S.Form>
      {regionOptions.map((option) => (
        <S.Val key={option.id}>
          <input
            type="checkbox"
            name="land"
            id={option.id}
            value={option.id}
            onChange={(e) =>
              handleChangeCheck(e.target.checked, e.target.value)
            }
          />
          {option.name}
        </S.Val>
      ))}
    </S.Form>
  );
};

const Fee = ({ setCost }) => {
  const feeOptions = [
    { id: "PAID", label: "유료" },
    { id: "FREE", label: "무료" },
  ];

  return (
    <S.Form>
      {feeOptions.map((option) => (
        <S.Val key={option.id}>
          <input
            type="radio"
            id={option.id}
            name="howFee"
            onChange={() => setCost(option.id)}
          />
          {option.label}
        </S.Val>
      ))}
    </S.Form>
  );
};

export { Join, Region, Fee };
