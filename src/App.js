import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCaretUp } from 'react-icons/fa';
import './App.css';
import logo from './icon.png'
import CanvasJSReact from './JS/canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investment: '$3000000',
      earning: '$3000000',
    };
  }

  renderItem = (data) => {
    return (
      <Row>
        <Col md={7} sm={7} xs={7} style={{ textAlign: 'left' }}>
          <img src={logo} className='logostyle' />
          <text className='sBlackFont'>Reed's Inc</text>
        </Col>
        <Col md={3} sm={3} xs={3} style={{ textAlign: 'right' }}>
          <text className='ssBlackFont'>$0.9094</text>
          <br></br>
          <text className='ssGrayFont'>3.90%</text>
        </Col>
        <Col md={1} sm={1} xs={1} style={{ textAlign: 'right' }}>
          <FaCaretUp style={{ color: '#06FAB4', marginTop: 10 }} size={30} />
        </Col>
      </Row>
    )
  }
  render() {
    const options_profit = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      height: 200,
      // title: {
      //   // fontFamily: "tahoma",
      //   text: "Performance"
      // },
      axisY: {
        // title: "Number of iPhones ( in Million )",
        includeZero: false,
      },
      data: [
        {
          type: "area",
          color: "#BCE0FF",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0.## Million",
          dataPoints: [
            { x: new Date(2017, 0), y: 7.6 },
            { x: new Date(2016, 0), y: 7.3 },
            { x: new Date(2015, 0), y: 6.4 },
            { x: new Date(2014, 0), y: 5.3 },
            { x: new Date(2013, 0), y: 4.5 },
            { x: new Date(2012, 0), y: 3.8 },
            { x: new Date(2011, 0), y: 3.2 },
          ]
        }
      ]
    }

    const options_asset = {
      animationEnabled: true,
      // title: {
      //   fontFamily: "tahoma",
      //   text: "Asset Allocation"
      // },
      // subtitles: [{
      //   text: "71% Positive",
      //   verticalAlign: "center",
      //   fontSize: 24,
      //   dockInsidePlotArea: true
      // }],
      height: 270,
      // width: 270,
      data: [{
        type: "doughnut",
        showInLegend: true,
        indexLabelFontSize: 16,
        radius: "100%",
        innerRadius: "60%",
        indexLabelPlacement: "inside",
        indexLabel: "{y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "series-1", y: 26, color: '#30C1FF' },
          { name: "series-2", y: 32, color: '#B14BF4' },
          { name: "series-3", y: 24, color: '#FFCD30' },
          { name: "series-4", y: 10, color: '#06FAB4' },
          { name: "series-5", y: 9, color: '#FD7963' }
        ]
      }]
    }
    return (
      <div className="App">
        <Container>
          <Row style={{ marginBottom: 15, marginTop: 15 }}>
            <Col md={7} sm={12} style={{ marginBottom: 10 }}>
              <div className='gray'>
                <div style={{ width: '100%', height: 80, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, }}>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <text className='LLgrayFont'>Performance</text>
                      <br></br>
                      <text className='LblackFont'>Profit & Loss</text>
                    </Col>
                    <Col md={4} sm={4} xs={4} style={{ textAlign: 'right' }}>
                      <text className='LLblueFont'>0.31%</text>
                      <br></br>
                      <text className='LblackFont'>3000.91</text>
                    </Col>
                  </Row>
                </div>
                <CanvasJSChart options={options_profit}
                />
                <Row>
                  <Col md={4} sm={6} style={{ textAlign: 'left' }}>
                    <form>
                      <text className='normalFont'>Investment</text>
                      <br></br>
                      <input
                        type="text"
                        placeholder=''
                        value={this.state.investment}
                        className='inputfield'
                      />
                    </form>
                  </Col>
                  <Col md={{ span: 4, offset: 4 }} sm={6} style={{ textAlign: 'left' }}>
                    <form>
                      <text className='normalFont'>Earning</text>
                      <br></br>
                      <input
                        type="text"
                        placeholder=''
                        value={this.state.earning}
                        className='inputfield'
                        style={{ borderRadius: 5 }}
                      />
                    </form>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={5} sm={12} style={{ marginBottom: 10 }}>
              <div className='gray'>
                <text className='LgrayFont'>Assets Performance</text>
                <div className='board'>
                  <Row>
                    <Col md={7} sm={7} xs={7} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={3} sm={3} xs={3} style={{ textAlign: 'right' }}>
                      <text className='ssBlackFont'>$0.9094</text>
                      <br></br>
                      <text className='ssGrayFont'>3.90%</text>
                    </Col>
                    <Col md={1} sm={1} xs={1} style={{ textAlign: 'right' }}>
                      <FaCaretUp style={{ color: '#06FAB4', marginTop: 10 }} size={30} />
                    </Col>
                  </Row>
                </div>
                <div className='board'>
                  <Row>
                    <Col md={7} sm={7} xs={7} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={3} sm={3} xs={3} style={{ textAlign: 'right' }}>
                      <text className='ssBlackFont'>$0.9094</text>
                      <br></br>
                      <text className='ssGrayFont'>3.90%</text>
                    </Col>
                    <Col md={1} sm={1} xs={1} style={{ textAlign: 'right' }}>
                      <FaCaretUp style={{ color: '#06FAB4', marginTop: 10 }} size={30} />
                    </Col>
                  </Row>
                </div>
                <div className='board'>
                  <Row>
                    <Col md={7} sm={7} xs={7} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={3} sm={3} xs={3} style={{ textAlign: 'right' }}>
                      <text className='ssBlackFont'>$0.9094</text>
                      <br></br>
                      <text className='ssGrayFont'>3.90%</text>
                    </Col>
                    <Col md={1} sm={1} xs={1} style={{ textAlign: 'right' }}>
                      <FaCaretUp style={{ color: '#06FAB4', marginTop: 10 }} size={30} />
                    </Col>
                  </Row>
                </div>
                <div className='board'>
                  <Row>
                    <Col md={7} sm={7} xs={7} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={3} sm={3} xs={3} style={{ textAlign: 'right' }}>
                      <text className='ssBlackFont'>$0.9094</text>
                      <br></br>
                      <text className='ssGrayFont'>3.90%</text>
                    </Col>
                    <Col md={1} sm={1} xs={1} style={{ textAlign: 'right' }}>
                      <FaCaretUp style={{ color: '#06FAB4', marginTop: 10 }} size={30} />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12} style={{ marginBottom: 10 }}>
              <div className='gray1'>
                <text className='LgrayFont'>Assets Performance</text>
                <Row>
                  <Col md={8} sm={8} xs={8} style={{paddingLeft:10, paddingRight:0}}>
                    <CanvasJSChart options={options_asset}
                    />
                    <div style={{ width: '100%', height: 26, backgroundColor: '#F1F1F1', position: 'absolute', top: 244 }}>
                      <text></text>
                    </div>
                  </Col>
                  <Col md={4} sm={4} xs={4} style={{paddingLeft:10, paddingRight:10, justifyContent:'center', alignItems:'center'}}>
                    <div className='board1' style={{justifyContent:'center', alignItems:'center'}}>
                      <div style={{ justifyContent:'center', alignItems:'center', display:'flex' ,marginTop:35, marginBottom:5 }}>
                          <div style={{ backgroundColor: '#30C1FF', width: 16, height: 16, borderRadius: 8, marginRight: 10 }}></div>
                          <span>series-1</span>
                      </div>
                      <div style={{ justifyContent:'center', alignItems:'center', display:'flex' ,marginTop:5, marginBottom:5 }}>
                          <div style={{ backgroundColor: '#B14BF4', width: 16, height: 16, borderRadius: 8, marginRight: 10 }}></div>
                          <span>series-1</span>
                      </div>
                      <div style={{ justifyContent:'center', alignItems:'center', display:'flex' ,marginTop:5, marginBottom:5 }}>
                          <div style={{ backgroundColor: '#FFCD30', width: 16, height: 16, borderRadius: 8, marginRight: 10 }}></div>
                          <span>series-1</span>
                      </div>
                      <div style={{ justifyContent:'center', alignItems:'center', display:'flex' ,marginTop:5, marginBottom:5 }}>
                          <div style={{ backgroundColor: '#06FAB4', width: 16, height: 16, borderRadius: 8, marginRight: 10 }}></div>
                          <span>series-1</span>
                      </div>
                      <div style={{ justifyContent:'center', alignItems:'center', display:'flex' ,marginTop:5, marginBottom:5 }}>
                          <div style={{ backgroundColor: '#FD7963', width: 16, height: 16, borderRadius: 8, marginRight: 10 }}></div>
                          <span>series-1</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} sm={12} style={{ marginBottom: 10 }}>
              <div className='gray'>
                <text className='LgrayFont'>Assets Details</text>
                <div className='board'>
                  <Row>
                    <Col md={8} sm={8} xs={8} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={4} sm={4} xs={4} style={{ textAlign: 'right' }}>
                      <Button className='Buttons' style={{ backgroundColor: '#EFCD28', }}>More</Button>
                    </Col>
                  </Row>
                </div>
                <div className='board'>
                  <Row>
                    <Col md={8} sm={8} xs={8} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={4} sm={4} xs={4} style={{ textAlign: 'right' }}>
                      <Button className='Buttons' style={{ backgroundColor: '#F50B62', }}>More</Button>
                    </Col>
                  </Row>
                </div>
                <div className='board'>
                  <Row>
                    <Col md={8} sm={8} xs={8} style={{ textAlign: 'left' }}>
                      <img src={logo} className='logostyle' />
                      <text className='sBlackFont'>Reed's Inc</text>
                    </Col>
                    <Col md={4} sm={4} xs={4} style={{ textAlign: 'right' }}>
                      <Button className='Buttons' style={{ backgroundColor: '#B14BF4', }}>More</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}


export default App;
