import React from "react";
import ReactECharts from "echarts-for-react";
import styles from "./Situation.module.less";
const Situation = () => {
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
						<span style={{ fontSize: "20px" }}></span>
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
					<div
						className={`${styles.line} ${98 / 100 > 0.6 && styles.line__warn}  ${98 / 100 > 0.9 && styles.line__danger}`}
						style={{ width: `${(98 / 100) * 100}%` }}
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
