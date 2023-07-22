import { UploadOutlined } from "@ant-design/icons";
import { Upload, Button, UploadProps, message, Card, Input, Form, Empty } from "antd";
import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
const props: UploadProps = {
	name: "file",
	action: "https://5fb2-171-117-18-132.ngrok-free.app/turbine/excel/pred/data",
	headers: {
		"ngrok-skip-browser-warning": "ngrok-skip-browser-warning"
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	}
};
const lineOption = {
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
				let len = 96;
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
	dataZoom: [
		{
			type: "inside",
			start: 0,
			end: 30
		},
		{
			start: 0,
			end: 30
		}
	],
	series: [
		{
			name: "实际功率",
			type: "line",
			smooth: true,

			data: (function () {
				let res = [];
				let len = 0;
				while (len < 96) {
					res.push((Math.random() * 50000 + 5).toFixed(1) - 0);
					len++;
				}
				return res;
			})()
		}
	]
};
const TurbeUpload = () => {
	const [isSubmit, setIsSubmit] = useState(false);

	return (
		<div style={{ width: "100%", height: "100%", display: "flex" }}>
			<Card style={{ height: "100%", width: "300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
				<Form>
					<Form.Item label="预测长度">
						<Input type="number" max={96} />
					</Form.Item>
					<Form.Item label="文件上传">
						<Upload style={{ width: "300px" }} {...props}>
							<Button icon={<UploadOutlined />}>上传.csv格式文件</Button>
						</Upload>
					</Form.Item>
					<Form.Item>
						<Button block onClick={() => setIsSubmit(true)}>
							提交
						</Button>
					</Form.Item>
				</Form>
			</Card>
			<div style={{ flex: 1, height: "100%" }}>
				{isSubmit ? (
					<ReactECharts style={{ width: "100%", height: "100%" }} option={lineOption} theme={"dark"} />
				) : (
					<div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Empty description="未上传数据" />
					</div>
				)}
			</div>
		</div>
	);
};

export default TurbeUpload;
