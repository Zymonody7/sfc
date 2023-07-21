import React from "react";
import { Decoration11 } from "@jiaminghi/data-view-react";
import styles from "./TurbDesc.module.less";
const TurbDesc = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Decoration11 style={{ height: "60px", fontSize: "24px" }}>风机分区域查找</Decoration11>
			</div>
			<div className={styles.category}>
				<div>1号风场</div>
				<div>2号风场</div>
				<div>3号风场</div>
				<div>4号风场</div>
				<div>5号风场</div>
				<div>6号风场</div>
			</div>
			<div style={{ width: "100%", height: "3px", backgroundColor: "#a8bac1" }}></div>
			<div className={styles.main}>
				<div className={styles.turbeId}>1号风机</div>
				<div className={styles.turbeId}>2号风机</div>
			</div>
		</div>
	);
};

export default TurbDesc;
