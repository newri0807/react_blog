import './App.css';
import React, { useState } from 'react';

function App() {

  let [modal, modal변경] = useState(false);  // 첫 화면에선 UI가 보이지않는 상태정보를 state로 만들어둠 
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [누른제목, 누른제목변경] = useState([0,0,0]);
  //let [버튼, 버튼변경] = useState([0, 0, 0]);
  let [입력값, 입력값변경] = useState('');



  return (
    <div className="App">

      <nav className="nav">
        <h3>Blog</h3>
      </nav>

      

      { 글제목.map(function (a, i) {
        return (
          <div className="list"  key={i}>
            <h3 onClick={() => { 누른제목변경(i) }}> {a}
              <span onClick={() => {
                let copy = [...따봉]; 
                //copy.unshift(입력값);
                copy[i]++; // 증감식                
                따봉변경(copy)
              }} className="likes">
                좋아요 👍 {따봉[i]}
              </span>
            </h3>
            <p>2월 18일 발행</p>
{/* 
              <button onClick={() => {
                  누른제목변경(i); 
                  modal변경(!modal) 
              }} > 열기 </button>
                {
                  modal === true 
                    ? <Modal 글제목={글제목[i]} 누른제목={누른제목} i={i}/>
                    : null
                } */}


            <hr />
            
            </div>

            
          )
        })
      }


      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={
            ()=>{
              var newArray = [...글제목];
              newArray.unshift(입력값);
              글제목변경(newArray);          
            }


        }>저장</button>
      </div>

          <div  className="opnCls">
            {/* <button onClick={() => { 누른제목변경(0) }}>버튼1</button>
            <button onClick={() => { 누른제목변경(1) }}>버튼2</button>
            <button onClick={() => { 누른제목변경(2) }}>버튼3</button> */}
            <button onClick={() => { modal변경(!modal) }}>열고닫기</button>
          </div>
          
          {
            modal === true
              ? <Modal 글제목={글제목} 누른제목={누른제목} />
              : null
          }


                          

    </div>

  );
}

function Modal(props) {
  

    return (

      <div className="modal">
        <h5>제목 : {props.글제목[props.누른제목]}</h5>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  
  
  
  
    )
    }
export default App;
