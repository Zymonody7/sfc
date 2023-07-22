import React from "react";
import { Decoration11 } from "@jiaminghi/data-view-react";
import styles from "./TurbDesc.module.less";
type Props = {
	config: any;
	onDescClick: (id: number) => void;
};
const TurbDesc: React.FC<Props> = ({ config, onDescClick }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Decoration11 style={{ height: "60px", fontSize: "24px" }}>风机总览</Decoration11>
			</div>

			<div style={{ width: "100%", height: "3px", backgroundColor: "#a8bac1" }}></div>
			<div className={styles.main}>
				{config.map((item, _) => (
					<div
						onClick={() => {
							onDescClick(item.id);
						}}
						style={{ cursor: "pointer" }}
						className={`${styles.turbeId} '#turbe'`}
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
