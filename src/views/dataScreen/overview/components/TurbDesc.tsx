import React from "react";
import { Decoration11 } from "@jiaminghi/data-view-react";
import styles from "./TurbDesc.module.less";
type Props = {
	onDescClick: (id: number) => void;
};
const TurbDesc: React.FC<Props> = ({ onDescClick }) => {
	const turbeConfig = [
		{
			id: 1,
			name: "1号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 2,
			name: "2号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 3,
			name: "3号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 4,
			name: "4号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 5,
			name: "5号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 6,
			name: "6号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 7,
			name: "7号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 8,
			name: "8号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 9,
			name: "9号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 10,
			name: "10号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 11,
			name: "11号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 12,
			name: "12号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 13,
			name: "13号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 14,
			name: "14号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 15,
			name: "15号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 16,
			name: "16号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 17,
			name: "17号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 18,
			name: "18号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 19,
			name: "19号风机",
			lat: 122,
			lon: 37,
			status: 1
		},
		{
			id: 20,
			name: "20号风机",
			lat: 122,
			lon: 37,
			status: 1
		}
	];
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Decoration11 style={{ height: "60px", fontSize: "24px" }}>风机总览</Decoration11>
			</div>

			<div style={{ width: "100%", height: "3px", backgroundColor: "#a8bac1" }}></div>
			<div className={styles.main}>
				{turbeConfig.map((item, _) => (
					<div
						onClick={() => {
							onDescClick(item.id);
						}}
						className={styles.turbeId}
						key={item.id}
					>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default TurbDesc;
