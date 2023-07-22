import React from "react";
import styles from "./ChartBox.module.less";
import { BorderBox8 } from "@jiaminghi/data-view-react";
interface Props {
	width: number;
	height: number;
	title: string;
	children?: any;
	className?: any;
	style?: any;
}
const ChartBox: React.FC<Props> = ({ width, height, title, children, className, style }) => {
	return (
		<BorderBox8
			reverse="{true}"
			className={`${styles.container} ${className}`}
			style={{ width: width + "px", height: height + "px", transition: "all 0.5s ease-out;" }}
		>
			<div className={styles.title} style={style}>
				{title}
			</div>
			{children}
		</BorderBox8>
	);
};

export default ChartBox;
