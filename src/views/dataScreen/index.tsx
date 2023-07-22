import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import "./index.less";
import { useTimes } from "@/hooks/useTime";
import { useLayoutEffect, useRef } from "react";
import Router from "@/routers";

const DataScreen = () => {
	const navigate = useNavigate();
	const handleTo = () => {
		navigate(HOME_URL);
	};
	const dataScreenRef = useRef<HTMLDivElement>(null);
	/* 浏览器监听 resize 事件 */
	const resize = () => {
		if (dataScreenRef.current) {
			dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		}
	};
	/* 根据浏览器大小推断缩放比例 */
	const getScale = (width = 1920, height = 1080) => {
		let ww = window.innerWidth / width;
		let wh = window.innerHeight / height;
		return ww < wh ? ww : wh;
	};
	useLayoutEffect(() => {
		if (dataScreenRef.current) {
			dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
			dataScreenRef.current.style.width = `1920px`;
			dataScreenRef.current.style.height = `1080px`;
		}
		// 为浏览器绑定事件
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	const { time } = useTimes();

	return (
		<div className="dataScreen-container">
			<div className="dataScreen" ref={dataScreenRef}>
				<div className="dataScreen-header">
					<div className="header-left">
						<div className="header-title">
							<h1 style={{ color: "#fff" }}>龙源风电预警监控系统</h1>
						</div>
						<div className="header-info">
							<div>当前时间:{time}</div>
							<div>
								<img
									src="https://easyv.assets.dtstack.com/data/assets/jzmb2tfaxe_1631781760965_b7kmqg64rs.gif"
									style={{ width: "18px", height: "22px" }}
								></img>
								<div style={{ marginRight: "16px" }}>太原</div>
								<img
									src="https://easyv.assets.dtstack.com/components/static-image/weatherV2/%E5%A4%9A%E4%BA%91.png"
									style={{ width: "30px", height: "30px" }}
								/>
								<div>20°c</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataScreen;
