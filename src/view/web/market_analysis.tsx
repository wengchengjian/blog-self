import React from "react";
import moment from "moment";
import { Tabs, DatePicker, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./index.less";
const { TabPane } = Tabs;

const MarketAnalysis = () => {
  const handleChangeTab = (key: string) => {
    console.log(key);
  };
  const handleChangeDate = (e: moment.Moment | null) => {
    console.log(e);
  };
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={(key) => handleChangeTab(key)}>
        <TabPane tab={"KA商家趋势大盘及诊断分析"} key="1">
          <div style={{ padding: "10px 10px" }}>
            <Row justify="start">
              <Col>
                <span>异动概述:&nbsp;</span>
              </Col>
              <Col>
                <span>波动异常</span>
              </Col>
            </Row>

            <Row>
              <span>日环比:&nbsp;</span>
              <span>基准值:&nbsp;</span>
              <span>549 -&gt;</span>
              <span> 实际值: </span>
              <span> 621</span>,<span> 上升</span>
              <span>13.11%</span>
              <span>(72)</span>
            </Row>

            <Row>
              <span>
                <span className="important">*</span>
                <span>开始日期: </span>
                <DatePicker onChange={(e) => handleChangeDate(e)} />
              </span>
              <span></span>
            </Row>
          </div>
        </TabPane>
        <TabPane tab={"全量商家趋势大盘及诊断分析"} key="2">
          Content of tab2
        </TabPane>
      </Tabs>
    </>
  );
};

export default MarketAnalysis;
