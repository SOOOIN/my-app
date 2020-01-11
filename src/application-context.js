import React from "react";
import {createContext, useContext, useState}from "react";
const Context = createContext()

//글로벌하게 상태를 관리한다 context (reducer) , redux (reducer)
// => 관심사에 따른 컴포넌트 분리
// => 불필요한 랜더링 방지
// => context
// => redux => dev => 복잡성 ↑
// reducer는 여러개의 값을 헌번에 바꿀떄  한번만 랜더링 하도록 하기좋음 

export function ApplicationContextProvider({children, font: init}){
    const [font, setFont] = useState(init);

const value = {
    font, setFont
};

    return<Context.Provider value={value}>{children}</Context.Provider>;
}
export function useApplicationContext(){
    return useContext(Context);
}
