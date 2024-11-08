import React from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";

const SmallContestBox = ({ title, id, imgLink }) => {
  return (
    <div
      style={{
        width: "284px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        cursor: "pointer",
      }}
    >
      <Link
        to={`/contestinfo/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.ContestImg src={imgLink} />
      </Link>
      <S.Text>
        <Link
          to={`/contestinfo/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.Title>{title}</S.Title>
        </Link>
        <div
          style={{
            width: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        ></div>
      </S.Text>
    </div>
  );
};

export default SmallContestBox;
