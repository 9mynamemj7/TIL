## 문제 1. 


__예시__

|TV|Radio|Social_Media|Influencer|Sales|
|---:|---:|---:|---:|---:|
|0|16.0|6.566231|2.907983|Mega|54.732757|
|1|13.0|9.237765|2.409567|Mega|46.677897|
|2|41.0|15.886446|2.913410|Mega|150.177829|
|3|83.0|30.020028|6.922304|Mega|298.246340|
|4|15.0|8.437408|1.405998|Micro|56.594181|

<br/>

__df.info()__


RangeIndex: 4572 entries, 0 to 4571


Data columns (total 5 columns):

| # |  Column  |      Non-Null Count | Dtype | 
|---|---|---|---|
|0|   TV          |  4562 non-null|   float64|
|1|   Radio       |  4568 non-null|   float64|
|2|   Social_Media|  4566 non-null|   float64|
|3|   Influencer  |  4572 non-null|   object |
|4|   Sales       |  4566 non-null|   float64|

dtypes: float64(4), object(1)


### 1-1
1. 데이터 세트 내에 총 결측값의 개수는 몇 개인가? (답안 예시) 23

        df.isna().sum().sum()

        # 결측치가 포함된 행 추출
        df.isna().any(axis=1)
        all - False 값이 하나라도 들어가 있으면 False를 반환
        any - 모든 요소가 거짓(False)인 경우에만 거짓(False)을 반환
2. TV, Radio, Social Media 등 세 가지 다른 마케팅 채널의 예산과 매출액과의 상관분석을 통하여 각 채널이 매출에 어느 정도 연관이 있는지 알아보고자 한다.
    - 매출액과 가장 강한 상관관계를 가지고 있는 채널의 상관계수를 소수점 5번째 자리에서 반올림하여 소수점 넷째 자리까지 기술하시오. (답안 예시) 0.1234

            lng = df.corr().Sales.drop('Sales').max()
            print(round(lng,5))

            corr() -> 상관계수 알아보는 메서드
            q2.max() -> 최대값
            q2.argmax() -> 최대값이 있는 위치 번호
            q2.idxmax() -> 최대값이 있는 인덱스명
            q2.nlargest(2) -> 상위 2개의 인덱스명, 값


3. 매출액을 종속변수, TV, Radio, Social Media의 예산을 독립변수로 하여 회귀분석을 수행하였을 때, 세 개의 독립변수의 회귀계수를 큰 것에서부터 작은 것 순으로 기술하시오. 
    - 분석 시 결측치가 포함된 행은 제거한 후 진행하며, 회귀계수는 소수점 넷째 자리 이하는 버리고 소수점 셋째 자리까지 기술하시오. (답안 예시) 0.123

            LinearRegression().fit(X,y)
            coef_ - > 계수
            intercept_ -> 절편
            
            math.ceil() -> 올림
            math.floor() -> 내림
            math.trunc() -> 버림
            round(숫자, 자리수) - > 반올림
