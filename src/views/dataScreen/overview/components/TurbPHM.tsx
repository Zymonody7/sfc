import React from "react";
import ChartBox from "../../components/ChartBox";
import styles from "./TurbPHM.module.less";
const TurbPHM = () => {
	return (
		<ChartBox width={510} height={240} title="业务系统PHM">
			<div className={styles.box} style={{ flex: 1 }}>
				<div className={styles.left}>
					<div className={styles.title}>
						<div>故障风机个数</div>
						<div className={`${styles.point} ${styles.red}`}></div>
					</div>
					<div className={styles.stat}>
						<span style={{ fontSize: "20px", color: "#fff" }}>16</span>
						<span>个</span>
					</div>
					<div className={styles.title}>
						<div>运作风机占比</div>
						<div className={`${styles.green} ${styles.point}`}></div>
					</div>
					<div className={styles.stat}>
						<span style={{ fontSize: "20px", color: "#fff" }}>96</span>
						<span>%</span>
					</div>
				</div>
				<div className={styles.center}>
					<img
						src="https://easyv.assets.dtstack.com/data/assets/uib7952rq_1630499590909_c8ainytt8a.png"
						width={150}
						height={150}
					/>
				</div>
				<div className={styles.right}>
					<div className={`${styles.reverse} ${styles.title}`}>
						<div>风场数目</div>
						<div className={`${styles.blue} ${styles.point}`}></div>
					</div>
					<div className={styles.stat}>
						<span style={{ fontSize: "20px", color: "#fff" }}>70</span>
					</div>
				</div>
			</div>
		</ChartBox>
	);
};

export default TurbPHM;
