import { turbeConfig } from "@/config/turbeConfig";
import { Button, Form, Popover, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
const content = (
	<>
		<div>确定关停吗</div>
		<div>
			<Button size="small">取消</Button>
			<Button size="small" type="primary">
				确定
			</Button>
		</div>
	</>
);
const columns: ColumnsType<any> = [
	{
		title: "风机名称",
		dataIndex: "name",
		key: "风机名称",
		render: text => <a>{text}</a>
	},
	{
		title: "所属风场",
		dataIndex: "ori",
		key: "所属风场"
	},
	{
		title: "连续运行时间",
		dataIndex: "time",
		key: "运行时间",
		render: (_, record) => (
			<div style={{ color: record.status ? "" : "red" }}>
				{record.status ? record.time + parseInt(Math.random() * 10) : "已关停"}
			</div>
		)
	},
	{
		title: "风机状态",
		dataIndex: "status",
		key: "风机状态",
		render: (value, record) => {
			return <Tag color={record.status === 1 ? "green" : "red"}>{record.status === 1 ? "运行" : "停止"}</Tag>;
		}
	},
	{
		title: "#",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<Popover content={content} trigger="click">
					<Button danger size="small" type="primary">
						关停
					</Button>
				</Popover>
			</Space>
		)
	}
];

const TurbeAdmin = () => {
	return <Table columns={columns} dataSource={turbeConfig}></Table>;
};

export default TurbeAdmin;
