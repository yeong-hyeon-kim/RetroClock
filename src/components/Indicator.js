import React, { Component, useState} from "react";
import "../../src/App.css";

var IndicatorMode

class Indicator extends Component {
  constructor(props) {
    super(props);
    let NowDate = new Date();

    // IndicatorMode = this.props.IC;
    IndicatorMode = ["한글","시간-날짜"];

    let HourSystem = CheckHourSystem(NowDate.getHours()).split("");
    let Hour = ConvertDateTimeHangle(NowDate.getHours(),"H",IndicatorMode).split("");
    let Minute = ConvertDateTimeHangle(NowDate.getMinutes(),"M",IndicatorMode).split("");
    let Second = ConvertDateTimeHangle(NowDate.getSeconds(),"S",IndicatorMode).split("");
  
    let TempYear = NowDate.getFullYear() + ".";
    let TempMonth = NowDate.getMonth() + 1 + ".";
    let TempDay = NowDate.getDate();
  
    if (IndicatorMode[1] === "시간") {
      TempYear = "";
      TempMonth = "";
      TempDay = "";
    }

    this.state = {
      Times : [
        {Year : TempYear, Month : TempMonth, Day : TempDay},
        {HourSystem_A : HourSystem[0], HourSystem_B : HourSystem[1]},
        {Hour_A: Hour[0], Hour_B: Hour[1], Hour_C: Hour[2], Hour_D: Hour[3]},
        {Minute_A: Minute[0], Minute_B: Minute[1], Minute_C: Minute[2],  Minute_D: Minute[3], Minute_E: Minute[4], Minute_F: Minute[5]},
        {Second_A: Second[0], Second_B: Second[1], Second_C: Second[2],  Second_D: Second[3], Second_E: Second[4], Second_F: Second[5]}
      ]
      
    };

    // 타이머 객체 초기화
    let Timer = setInterval(() => {
      this.setState({
        Times : UpdateTimeInfo()
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="Indicator-Options">
          <select className="Indicator-Option" onChange={function(e){
            // console.log(e.target.options[e.target.selectedIndex].text);
            let Unit = e.target.options[e.target.selectedIndex].text;
            IndicatorMode[0] = Unit;
            //e.target.options[e.target.selectedIndex].text
            }.bind(this)}> 
              <option value="한글">한글</option>
              <option value="한자">한자</option>
          </select>
          <select className="Indicator-Option" onChange={function(e){
            // console.log(e.target.options[e.target.selectedIndex].text);
            let Mode = e.target.options[e.target.selectedIndex].text;
            IndicatorMode[1] = Mode;
            //e.target.options[e.target.selectedIndex].text
            }.bind(this)}>
              <option value="시간 날짜">시간-날짜</option>
              <option value="시간">시간</option>
          </select>
        </div>
        <center className="Indicator">
          <table className="Indicator-Border">
            <tbody>
              <tr>
                <td className="Indicator-Date-Line" rowSpan="22">
                  <div className="Indicator-Date">{this.state.Times[0].Year}{this.state.Times[0].Month}{this.state.Times[0].Day}</div>
                </td>
                {/* <td className="Indicator-Blank-Line" rowSpan="22"></td> */}
                <td className="Indicator-Last-Line">ㅤ</td>
                <td className="Indicator-Blank-Line" rowSpan="22"></td>
                <td className="Indicator-Last-Line">ㅤ</td>
                <td className="Indicator-Blank-Line" rowSpan="22"></td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">{this.state.Times[1].HourSystem_A}</td>
                <td className="Indicator-Content-Line">{this.state.Times[2].Hour_A}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">{this.state.Times[1].HourSystem_B}</td>
                <td className="Indicator-Content-Line">{this.state.Times[2].Hour_B}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">.</td>
                <td className="Indicator-Content-Line">{this.state.Times[2].Hour_C}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[2].Hour_D}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">ㅤ</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[3].Minute_A}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[3].Minute_B}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[3].Minute_C}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[3].Minute_D}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[3].Minute_E}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[3].Minute_F}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">ㅤ</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[4].Second_A}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[4].Second_B}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[4].Second_C}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[4].Second_D}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[4].Second_E}</td>
              </tr>
              <tr>
                <td className="Indicator-Content-Line">ㅤ</td>
                <td className="Indicator-Content-Line">{this.state.Times[4].Second_F}</td>
              </tr>
              <tr>
                <td className="Indicator-Last-Line">ㅤ</td>
                <td className="Indicator-Last-Line">ㅤ</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

function CheckHourSystem(Hour){
  let HoursType = ""
  // 자리 수 판별
  let DecimalHours = Hour / 10;
  // debugger
  
  switch (IndicatorMode[0]) {
    case "한글":
      if (DecimalHours > 1.1) {
        HoursType = "오후 "
      }else{
        HoursType = "오전 "
      }
      break;
    case "한자":
      if (DecimalHours > 1.1) {
        HoursType = "午後 "
      }else{
        HoursType = "午後 "
      }
      break;
    
    default:
      break;
  }
  return HoursType
}

function ConvertDateTimeHangle(Number, Type, Mode) {
  // 한글 시간
  let HangleTime = "";
  let Hour
  // 십의 자리
  let TensPlace;
  // 일의 자리
  let UnitsPlace;

  // let IndicatorMode = this.props.IC;
  let TimeUnit = ["", "", ""];

  // 자리 수 판별
  let DecimalTime = Number / 10;
  // debugger
  switch (Mode[0]) {
    case "한글":
      TimeUnit = [" 시", " 분", " 초"];
      break;
    case "한자":
      TimeUnit = [" 時", " 分", " 秒"];
      break;
    
    default:
      break;
  }

  //Ex. 12 / 10 = 1.2
  TensPlace = (Number / 10).toString().substring(0,1);
  UnitsPlace = (Number / 10).toFixed(1).toString().substring(2,3);
  
  if (Type === "M" || Type === "S") {
    let Blank = ""
    
    // 일의 자리가 0이라면 공백을 추가하지 않는다.
    // 세 시 사십 삼 분 십 초
    if (UnitsPlace !== "0") {
      Blank = " "
    }

    switch (TensPlace) {
      case "1":
        HangleTime += "십" + Blank;
        break;
      case "2":
        HangleTime += "이십" + Blank;
        break;
      case "3":
        HangleTime += "삼십" + Blank;
        break;
      case "4":
        HangleTime += "사십" + Blank;
        break;
      case "5":
        HangleTime += "오십" + Blank;
        break;
      default:
        break;
    }

    switch (UnitsPlace) {
      case "1":
        HangleTime += "일"
        break;
      case "2":
        HangleTime += "이";
        break;
      case "3":
        HangleTime += "삼";
        break;
      case "4":
        HangleTime += "사";
        break;
      case "5":
        HangleTime += "오";
        break;
      case "6":
        HangleTime += "육";
        break;
      case "7":
        HangleTime += "칠";
        break;
      case "8":
        HangleTime += "팔";
        break;
      case "9":
        HangleTime += "구";
        break;
      default:
        break;
    }

     //  0이면 '분, 초' 문자를 표시하지 않음.
    if (DecimalTime !== 0) {
      if (Type === "M") {
        HangleTime += TimeUnit[1];
      } else {
        HangleTime += TimeUnit[2];
      }
    }

  } else {
    // 12시각제로 변환하여 표시
    if (Number >= 12) {
      Hour = Number - 12
    } else {
      Hour = Number
    }

    switch (Hour.toString()) {
      case "1":
        HangleTime = "한"
        break;
      case "2":
        HangleTime = "두";
        break;
      case "3":
        HangleTime = "세";
        break;
      case "4":
        HangleTime = "네";
        break;
      case "5":
        HangleTime = "다섯";
        break;
      case "6":
        HangleTime = "여섯";
        break;
      case "7":
        HangleTime = "일곱";
        break;
      case "8":
        HangleTime = "여덟";
        break;
      case "9":
        HangleTime = "아홉";
        break;
      case "10":
        HangleTime = "열";
        break;
      case "11":
        HangleTime = "열한";
        break;
      case "12": case "0":
        HangleTime = "열두";
        break;
      default:
        break;
    }

    HangleTime += TimeUnit[0];
  }

  return HangleTime;
}

function UpdateTimeInfo() {
  let NowDate = new Date();

  let HourSystem = CheckHourSystem(NowDate.getHours()).split("");
  let Hour = ConvertDateTimeHangle(NowDate.getHours(),"H",IndicatorMode).split("");
  let Minute = ConvertDateTimeHangle(NowDate.getMinutes(),"M",IndicatorMode).split("");
  let Second = ConvertDateTimeHangle(NowDate.getSeconds(),"S",IndicatorMode).split("");

  //console.log(HourSystem, Hour, Minute, Second);
  // debugger
  let TempYear = NowDate.getFullYear() + ".";
  let TempMonth = NowDate.getMonth() + 1 + ".";
  let TempDay = NowDate.getDate();

  if (IndicatorMode[1] === "시간") {
    TempYear = "";
    TempMonth = "";
    TempDay = "";
  }

  let TimeInfo = [
    {Year : TempYear, Month : TempMonth, Day : TempDay},
    {HourSystem_A : HourSystem[0], HourSystem_B : HourSystem[1]},
    {Hour_A: Hour[0], Hour_B: Hour[1], Hour_C: Hour[2], Hour_D: Hour[3]},
    {Minute_A: Minute[0], Minute_B: Minute[1], Minute_C: Minute[2],  Minute_D: Minute[3], Minute_E: Minute[4], Minute_F: Minute[5]},
    {Second_A: Second[0], Second_B: Second[1], Second_C: Second[2],  Second_D: Second[3], Second_E: Second[4], Second_F: Second[5]}
  ]

  return TimeInfo;
}

export default Indicator;
