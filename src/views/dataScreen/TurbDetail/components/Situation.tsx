import React from "react";
import ReactECharts from "echarts-for-react";
import styles from "./Situation.module.less";
const Situation = () => {
	const windConfig = {
		series: [
			{
				name: "Pressure",
				type: "gauge",
				startAngle: 90,
				endAngle: -270,
				detail: {
					valueAnimation: true,
					formatter: " "
				},
				progress: {
					show: true,
					overlap: false,
					roundCap: true,
					clip: false
				},
				axisLine: {
					lineStyle: {
						width: 20
					}
				},
				splitLine: {
					show: false,
					distance: 0,
					length: 10
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false,
					distance: 50
				},
				data: [
					{
						value: 50
						// name: "SCORE"
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
						<span style={{ fontSize: "20px" }}>1.3</span>
						<span style={{ color: "#ddd" }}>m/s</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div className={styles.line}></div>
				</div>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>环境温度</div>
					<div>
						<span style={{ fontSize: "20px" }}>18</span>
						<span style={{ color: "#ddd" }}>℃</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div className={styles.line}></div>
				</div>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>环境湿度</div>
					<div>
						<span style={{ fontSize: "20px" }}>28</span>
						<span style={{ color: "#ddd" }}>°</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div className={styles.line}></div>
				</div>
				<div className={styles.title}>
					<div style={{ color: "#ddd" }}>机器温度</div>
					<div>
						<span style={{ fontSize: "20px" }}>58</span>
						<span style={{ color: "#ddd" }}>℃</span>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<div className={styles.line} style={{ width: `${(58 / 100) * 100}%` }}></div>
				</div>
			</div>
			<div className={styles.right}>
				<ReactECharts option={windConfig}></ReactECharts>
			</div>
		</div>
	);
};

export default Situation;
