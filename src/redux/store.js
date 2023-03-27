import { createStore } from 'redux';

// 초기 상태 객체
const initialState = { counter: 0 ,update : false};

// reducer 함수
const reducer = (stateObj = initialState, action) => {

    if(action.type === 'save') {
        return {counter : stateObj.counter+1,data:action.data,update: true}
    }

    return stateObj;
};


// store 생성
const store = createStore(reducer);

export default store;
