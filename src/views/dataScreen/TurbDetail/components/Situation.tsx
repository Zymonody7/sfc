/* eslint-disable react/prop-types */
import React from "react";
import ReactECharts from "echarts-for-react";
import styles from "./Situation.module.less";
const Situation: any = ({ data }) => {
	const windConfig = {
		series: [
			{
				type: "gauge",
				startAngle: 90,
				endAngle: -270,
				axisLine: {
					lineStyle: {
						width: 15,
						color: [[1, "#07a19366"]]
					}
				},
				pointer: {
					itemStyle: {
						color: "blue"
					}
				},
				axisTick: {
					show: false,
					lineStyle: {
						color: "#fff",
						width: 2
					}
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				detail: {
					valueAnimation: true,
					formatter: " ",
					color: "inherit"
				},
				data: [
					{
						value: 70
					}
				]
			}
		]
	};
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>实时风速</div>
					<div>
						<span style={{ fontSize: "20px" }}>{data.wspeed}</span>
						<span style={{ color: "#ddd" }}>m/s</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div
						className={`${styles.line} ${data.wspeed / 25 > 0.6 && styles.line__warn}  ${
							data.wspeed / 25 > 0.9 && styles.line__danger
						}`}
						style={{ width: `${(data.wspeed / 25) * 100}%` }}
					></div>
				</div>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>环境温度</div>
					<div>
						<span style={{ fontSize: "20px" }}>{data.temp}</span>
						<span style={{ color: "#ddd" }}>℃</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div
						className={`${styles.line} ${data.temp / 40 > 0.6 && styles.line__warn}  ${
							data.temp / 40 > 0.9 && styles.line__danger
						}`}
						style={{ width: `${(data.temp / 40) * 100}%` }}
					></div>
				</div>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>环境湿度</div>
					<div>
						<span style={{ fontSize: "20px" }}>{data.sd}</span>
						<span style={{ color: "#ddd" }}>°</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div
						className={`${styles.line} ${data.sd / 100 > 0.6 && styles.line__warn}  ${
							data.sd / 100 > 0.9 && styles.line__danger
						}`}
						style={{ width: `${(data.sd / 100) * 100}%` }}
					></div>
				</div>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>机器温度</div>
					<div>
						<span style={{ fontSize: "20px" }}>{data.inTemp}</span>
						<span style={{ color: "#ddd" }}>℃</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div
						className={`${styles.line} ${data.inTemp / 100 > 0.6 && styles.line__warn}  ${
							data.inTemp / 100 > 0.9 && styles.line__danger
						}`}
						style={{ width: `${(data.inTemp / 100) * 100}%` }}
					></div>
				</div>
			</div>
			<div className={styles.right}>
				<ReactECharts option={windConfig}></ReactECharts>
				<div style={{ display: "flex", alignItems: "center" }}>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
						<div>实时风向</div>
						<div>
							<span>88</span>
							<span>°</span>
						</div>
					</div>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
						<div>迎风面比例</div>
						<div>
							<span>23</span>
							<span>%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Situation;
