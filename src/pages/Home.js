import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(133, 202, 208, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  padding: 100px 20px;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const Location = styled.div``;
const Temp = styled.div``;
const Desc = styled.div``;
const Separ = styled.div``;
const ConWrap = styled.div``;
const Con = styled.div``;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  //console.log(data);
  //conssole.log(isLoading)

  // api에 요청할때 사용하는 hook
  // 비동기 사용시 상태관리하는 hook
  // useQuery 를 사용할땐 반드시 QueryClientProvider를 설정해야함
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <Wrap>
          <Location> {data?.name} </Location>
          <Temp> {Math.round(data?.main?.temp)} </Temp>
          {/* math.round => 반올림 */}
          <Desc> {data?.weather[0]?.discription} </Desc>

          <Separ></Separ>
          <ConWrap>
            <Con>
              <h3> 체감온도 </h3>
              <p> 20 </p>
            </Con>
            <Con>
              <h3> 최저온도 </h3>
              <p> 20 </p>
            </Con>
            <Con>
              <h3> 최고온도 </h3>
              <p> 20 </p>
            </Con>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
