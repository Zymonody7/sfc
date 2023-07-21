import React from "react";
import styles from "./ChartBox.module.less";
import { BorderBox8 } from "@jiaminghi/data-view-react";
interface Props {
	width: number;
	height: number;
	title: string;
	children?: any;
	className?: any;
}
const ChartBox: React.FC<Props> = ({ width, height, title, children, className }) => {
	return (
		<BorderBox8
			reverse="{true}"
			className={`${styles.container} ${className}`}
			style={{ width: width + "px", height: height + "px" }}
		>
			<div className={styles.title}>{title}</div>
			{children}
		</BorderBox8>
	);
};

export default ChartBox;