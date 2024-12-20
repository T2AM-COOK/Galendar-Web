import React, { useEffect } from "react";
import SmallContestBox from "../../contentsBox/small";
import * as S from "./indexStyle";
import { useContestList } from "../../../../store/getContestList";

const RecommendBox = () => {
  const { contestList, fetchContestList } = useContestList();

  useEffect(() => {
    fetchContestList();
  }, [fetchContestList]);

  return (
    <S.Container>
      <S.Title>이런 대회 어때요?</S.Title>
      <S.ScrollBox>
        <S.Contents>
          {contestList.map((detail) => (
            <SmallContestBox
              title={detail.title}
              id={detail.id}
              imgLink={detail.imgLink}
            />
          ))}
        </S.Contents>
      </S.ScrollBox>
    </S.Container>
  );
};

export default RecommendBox;
