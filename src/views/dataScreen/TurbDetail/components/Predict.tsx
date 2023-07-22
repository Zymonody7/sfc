import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import cloneDeep from "lodash.clonedeep";

const Page: React.FC = () => {
	const DEFAULT_OPTION = {
		legend: {
			data: ["实时功率"]
		},
		grid: {
			top: 40,
			left: 100,
			right: 100,
			bottom: 40
		},
		visualMap: {
			show: false,
			min: 0,
			max: 1000,
			color: ["#057748", "#177CB0"]
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: true,
				splitLine: {
					show: false
				},

				axisLabel: {
					textStyle: {
						color: "#ffffff"
					}
				},
				data: (function () {
					let now = new Date();
					let res = [];
					let len = 30;
					while (len--) {
						res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
						now = new Date(now - 2000);
					}
					return res;
				})()
			}
		],
		yAxis: [
			{
				type: "value",
				scale: true,
				name: "实际功率",
				boundaryGap: [0.2, 0.2],
				splitLine: {
					show: false
				},

				axisLabel: {
					textStyle: {
						color: "#ffffff"
					}
				}
			}
		],
		// dataZoom: [
		// 	{
		// 		type: "inside",
		// 		start: 0,
		// 		end: 20
		// 	},
		// 	{
		// 		start: 0,
		// 		end: 20
		// 	}
		// ],
		series: [
			{
				name: "实际功率",
				type: "line",
				smooth: true,

				data: (function () {
					let res = [];
					let len = 0;
					while (len < 30) {
						res.push((Math.random() * 50000 + 5).toFixed(1) - 0);
						len++;
					}
					return res;
				})()
			}
		]
	};

	let count;

	const [option, setOption] = useState(DEFAULT_OPTION);

	function fetchNewData() {
		const axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
		const newOption = cloneDeep(option); // immutable
		const data0 = newOption.series[0].data;
		// const data1 = newOption.series[1].data;
		data0.shift();
		data0.push(Math.round(Math.random() * 50000));
		// data1.shift();
		// data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

		newOption.xAxis[0].data.shift();
		newOption.xAxis[0].data.push(axisData);
		// newOption.xAxis[1].data.shift();
		// newOption.xAxis[1].data.push(count++);

		setOption(newOption);
	}

	useEffect(() => {
		const timer = setInterval(() => {
			fetchNewData();
		}, 1000);

		return () => clearInterval(timer);
	});

	return <ReactECharts option={option} style={{ height: 450 }} />;
};

export default Page;
