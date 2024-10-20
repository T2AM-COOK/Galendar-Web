import React from "react";
import * as S from "./indexStyle";

const Join = () => {
    const ageOptions = [
        { id: "everyone", label: "누구나" },
        { id: "elementary", label: "초등학생" },
        { id: "middle", label: "중학생" },
        { id: "high", label: "고등학생" },
        { id: "academic", label: "대학생" },
        { id: "postgraduate", label: "대학원생" },
        { id: "normal", label: "일반인" },
        { id: "foreign", label: "외국인" },
    ];

    return (
        <div>
            <S.Label>
                {ageOptions.map(option => (
                    <S.Val key={option.id}>
                        <input type="checkbox" name="age" id={option.id} />
                        <label htmlFor={option.id} style={{ cursor: "pointer" }}>
                            <S.ValText>{option.label}</S.ValText>
                        </label>
                    </S.Val>
                ))}
            </S.Label>
        </div>
    );
};

const Region = () => {
    const regionOptions = [
        { id: "all", label: "전체" },
        { id: "online", label: "온라인" },
        { id: "nationwide", label: "전국" },
        { id: "seoul", label: "서울" },
        { id: "busan", label: "부산" },
        { id: "incheon", label: "인천" },
        { id: "daegu", label: "대구" },
        { id: "daejeon", label: "대전" },
        { id: "gwangju", label: "광주" },
        { id: "ulsan", label: "울산" },
        { id: "kyonggi", label: "경기" },
        { id: "gyeongbuk", label: "경북" },
        { id: "gyeongnam", label: "경남" },
        { id: "jeonbuk", label: "전북" },
        { id: "jeonnam", label: "전남" },
        { id: "chungbuk", label: "충북" },
        { id: "chungnam", label: "충남" },
        { id: "gangwon", label: "강원" },
        { id: "abroad", label: "해외" },
    ];

    return (
        <div>
            <S.Label>
                {regionOptions.map(option => (
                    <S.Val key={option.id}>
                        <input type="checkbox" name="land" id={option.id} />
                        <label htmlFor={option.id} style={{ cursor: "pointer" }}>
                            <S.ValText>{option.label}</S.ValText>
                        </label>
                    </S.Val>
                ))}
            </S.Label>
        </div>
    );
};

const Fee = () => {
    const feeOptions = [
        { id: "paid", label: "유료" },
        { id: "free", label: "무료" },
    ];

    return (
        <div>
            <S.Label>
                {feeOptions.map(option => (
                    <S.Val key={option.id}>
                        <input type="radio" id={option.id} name="howFee" />
                        <label htmlFor={option.id} style={{cursor:"pointer"}}>
                        <S.ValText>{option.label}</S.ValText>
                        </label>
                    </S.Val>
                ))}
            </S.Label>
        </div>
    );
};

export {Join, Region, Fee}
