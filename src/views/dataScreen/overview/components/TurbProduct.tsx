import React from "react";
import ChartBox from "../../components/ChartBox";
import { Charts, Decoration2, CapsuleChart } from "@jiaminghi/data-view-react";
import ReactECharts from "echarts-for-react";
import styles from "./TurbProduct.module.less";
import * as echarts from "echarts";
const TurbProduct = () => {
	const loopConfig = {
		series: [
			{
				type: "gauge",
				startAngle: -Math.PI / 2,
				endAngle: Math.PI * 1.5,
				arcLineWidth: 8,
				data: [{ name: "itemA", value: 65, gradient: ["#03c2fd", "#1ed3e5", "#2fded6"] }],
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false
				},
				pointer: {
					show: false
				},
				dataItemStyle: {
					lineCap: "round"
				},
				details: {
					show: true,
					formatter: "{value}%",
					style: {
						fill: "#1ed3e5",
						fontSize: 16
					}
				}
			}
		]
	};
	const barOption = {
		grid: {
			top: 20,
			// left: 0,
			bottom: "20px"
			// right: 0
		},
		backgroundColor: "#ffffff00",
		tooltip: {},
		xAxis: {
			data: ["风场1", "风场2", "风场3", "风场4", "风场5"],
			boundaryGap: ["10%", "10%"],
			minInterval: 0,
			axisLine: {
				lineStyle: {
					color: "#ffffff"
				}
			},
			axisTick: {
				length: 1
			},
			// 网格样式
			splitLine: {
				show: false,
				lineStyle: {
					color: ["#262732"],
					width: 1,
					type: "solid"
				}
			}
		},
		yAxis: {
			show: false,
			axisLine: {
				lineStyle: {
					color: "#ffffff"
				}
			},
			// 网格样式
			splitLine: {
				show: false,
				lineStyle: {
					color: ["#262732"],
					width: 1,
					type: "solid"
				}
			}
		},
		legend: {
			data: ["已有风机数目", "今年新装风机"],
			top: "-5",
			left: 0
		},
		series: [
			{
				name: "已有风机数目",
				type: "bar",
				data: [18, 20, 36, 10, 10, 20],
				barWidth: 16,
				stack: "total",
				label: {
					show: true, //开启显示
					position: "inside",
					textStyle: {
						//数值样式
						color: "#fff", //字体颜色
						fontSize: 8 //字体大小
					}
				},
				itemStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1, //渐变色在下面修改，这里是透明度
						[
							{
								offset: 0,
								color: "#002cb0"
							},
							{
								offset: 1,
								color: "#66d4c8"
							}
						]
					),

					barBorderRadius: [2, 2, 0, 0] // （顺时针左上，右上，右下，左下）
				}
			},
			{
				name: "今年新装风机",
				type: "bar",
				data: [12, 20, 8, 10, 10, 20],
				barWidth: 25,
				stack: "total",
				label: {
					show: true, //开启显示
					position: "inside",
					textStyle: {
						//数值样式
						color: "#fff", //字体颜色
						fontSize: 8 //字体大小
					}
				},
				itemStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1, //渐变色在下面修改，这里是透明度
						[
							{
								offset: 0,
								color: "#088a59"
							},
							{
								offset: 1,
								color: "#79e7cf"
							}
						]
					),

					barBorderRadius: [4, 4, 2, 2] // （顺时针左上，右上，右下，左下）
				}
			}
		]
	};
	const lineOption = {
		tooltip: {
			trigger: "axis"
		},
		backgroundColor: "#ffffff00",

		legend: {
			data: ["业内平均值", "龙源风电"]
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: false,
				data: [2019, 2020, 2021, 2022, 2023]
			}
		],
		yAxis: [
			{
				type: "value",
				show: false,
				axisLine: {
					lineStyle: {
						color: "#ffffff"
					}
				}
			}
		],
		series: [
			{
				name: "业内平均值",
				type: "line",
				data: [124, 171, 146, 164, 192],
				showSymbol: false,
				smooth: true,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(128, 255, 165)"
						},
						{
							offset: 1,
							color: "rgba(128, 255, 164, 0)"
						}
					])
				}
			},
			{
				name: "龙源风电",
				type: "line",
				data: [220, 265, 191, 234, 290],
				showSymbol: false,
				smooth: true,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(55, 162, 255)"
						},
						{
							offset: 1,
							color: "rgba(55, 162, 255, 0)"
						}
					])
				}
			}
		]
	};
	return (
		<ChartBox width={1360} height={360} title="生产经营信息">
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.header}>
						<div>生产项目完成情况</div>
						<Decoration2 style={{ width: "260px", height: "5px", marginLeft: "16px" }} />
					</div>
					<div style={{ display: "flex", alignItems: "center", flex: 1 }}>
						<Charts style={{ width: "140px", height: "140px" }} option={loopConfig} />
						<CapsuleChart
							config={{
								data: [
									{
										name: "计划生产数",
										value: 167
									},
									{
										name: "已完成数",
										value: 123
									}
								],
								colors: ["#e062ae", "#32c5e9"]
							}}
							style={{ width: "240px", height: "50px" }}
						/>
					</div>
				</div>
				<div className={styles.box} style={{ width: "400px", marginLeft: "40px" }}>
					<div className={styles.header}>
						<div>装机数目统计</div>
						<Decoration2 style={{ width: "260px", height: "5px", marginLeft: "16px" }} />
					</div>
					<div style={{ display: "flex", alignItems: "center", flex: 1, width: "400px" }}>
						<ReactECharts theme={"dark"} option={barOption} style={{ height: "200px", width: "400px" }} />
					</div>
				</div>
				<div className={styles.box} style={{ width: "400px", marginLeft: "40px" }}>
					<div className={styles.header}>
						<div>与业内企业产能对比</div>
						<Decoration2 style={{ width: "260px", height: "5px", marginLeft: "16px" }} />
					</div>
					<div style={{ display: "flex", alignItems: "center", flex: 1, width: "400px" }}>
						<ReactECharts theme={"dark"} option={lineOption} style={{ height: "200px", width: "400px" }} />
					</div>
				</div>
			</div>
		</ChartBox>
	);
};

export default TurbProduct;
