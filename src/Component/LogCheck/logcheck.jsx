/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { axiosInstance } from "../../util/axios";
import Navbar from "../navbar";

function LogCheck() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/log");

        console.log("Server response:", response.data);

        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([response.data]);
        }
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchData();
  }, []); // 빈 dependency array는 컴포넌트가 마운트될 때만 실행

  return (
    <S.Body>
      <Navbar />
      <S.Title>출입 기록 관리</S.Title>
      {data.map((log, index) => {
        if (index < 100000000) {
          return (
            <S.Page key={index} idx={index} className={`page page-${index}`}>
              <S.PageBox>
                <S.MiniTitle>{log.type}</S.MiniTitle>
                <S.Writer>LOG ID: {log.log_id}</S.Writer>
                <S.Date>
                  {new Date(log.date).toISOString().split("T")[0]}
                </S.Date>
              </S.PageBox>
            </S.Page>
          );
        }
      })}
    </S.Body>
  );
}

export default LogCheck;
