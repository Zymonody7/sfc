import { Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
const data = [
	{
		name: "6号风机",
		reason: "环境恶劣",
		worker: "admin",
		other: "风速过大，紧急关停",
		time: "2023年7月4日 23:04:33"
	},
	{
		name: "6号风机",
		reason: "环境恶劣",
		worker: "admin",
		other: "风速过大，紧急关停",
		time: "2023年7月8日 23:04:42"
	},
	{
		name: "8号风机",
		reason: "环境恶劣",
		worker: "admin",
		other: "风速过大，紧急关停",
		time: "2023年7月4日 23:05:19"
	},
	{
		name: "19号风机",
		reason: "未知异常",
		worker: "admin",
		time: "2023年7月9日 21:08:33"
	}
];
const columns: ColumnsType<any> = [
	{
		title: "风机名称",
		dataIndex: "name",
		key: "风机名称",
		render: text => <a>{text}</a>
	},
	{
		title: "记录原因",
		dataIndex: "reason",
		key: "记录原因"
	},
	{
		title: "操作人",
		dataIndex: "worker",
		key: "操作人"
		// render: (_, record) => (
		// 	<div style={{ color: record.status ? "" : "red" }}>
		// 		{record.status ? record.time + parseInt(Math.random() * 10) : "已关停"}
		// 	</div>
		// )
	},
	{
		title: "备注",
		dataIndex: "other",
		key: "备注"
	},
	{
		title: "记录时间",
		dataIndex: "time",
		key: "时间"
	}
	// {
	// 	title: "风机状态",
	// 	dataIndex: "status",
	// 	key: "风机状态",
	// 	render: (value, record) => {
	// 		return <Tag color={record.status === 1 ? "green" : "red"}>{record.status === 1 ? "运行" : "停止"}</Tag>;
	// 	}
	// }
];
const TurbeLog = () => {
	return <Table columns={columns} dataSource={data}></Table>;
};

export default TurbeLog;
