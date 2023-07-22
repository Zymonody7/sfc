/* eslint-disable react/no-children-prop */
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useTimes } from "@/hooks/useTime";
import "./index.less";
import TurbPHM from "./components/TurbPHM";
import ChartBox from "../components/ChartBox";
import TurbDesc from "./components/TurbDesc";
// import TurbModel from "/public/model/32.gltf";
import { ScrollBoard } from "@jiaminghi/data-view-react";
// import * as Cesium from "cesium";
import {
	Camera,
	Viewer,
	CameraFlyTo,
	Entity,
	BoxGraphics,
	LabelGraphics,
	PointGraphics,
	EllipseGraphics,
	ModelGraphics
} from "resium";
import { Cartesian3, Color, HeightReference } from "cesium";
import TurbProduct from "./components/TurbProduct";
import { HOME_URL } from "@/config/config";
import { useLocation, useNavigate } from "react-router-dom";
import { turbeConfig } from "@/config/turbeConfig";
const OverViewScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();
	// const data = turbeConfig[location.pathname]

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
	// const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
	const handleChange = () => {
		// console.log(viewerRef.current);
	};
	const handleClick = e => {
		// console.log(e);
		e;
	};
	useEffect(() => {
		// setTimeout(() => {
		// 	console.log(screenHandlerRef.current.cesiumElement);
		// 	if (sceneRef.current && screenHandlerRef.current) {
		// 		console.log("加载到了");
		// 		const viewer = viewerRef.current.cesiumElement;
		// 		const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
		// 		handler.setInputAction(function (movement) {
		// 			// let pick = viewer.scene.pick(e.position);
		// 			if (viewer.scene.mode !== Cesium.SceneMode.MORPHING) {
		// 				let pick = viewer.scene.pick(movement.position);
		// 				if (Cesium.defined(pick)) {
		// 					console.log(pick.id);
		// 					let popBox = document.getElementById("popoverBox"); //这个是Popover包裹的盒子
		// 					if (!popBox) return;
		// 					console.log(popBox);
		// 					if (pick.id.id.split("_")[1] == "waterQuality") {
		// 						//这里是判断鼠标是否滑动到了你想要的标记点上，判断条件因代码而异
		// 						//设置弹出框位置
		// 						let winpos = viewer.scene.cartesianToCanvasCoordinates(pick.id.position._value); //这里拿到你的标记点的坐标转换成屏幕坐标用来定位你的Popover包裹的盒子
		// 						popBox.style.display = "block";
		// 						popBox.style.left = winpos.x + "px";
		// 						popBox.style.top = winpos.y - 36 + "px"; //根据你标记点的位置调整下，使你的标记点刚好被盒子包裹住
		// 						trackPop = pick.id.position._value;
		// 					} else {
		// 						//如果鼠标没有滑动到你想要的标记点盒子是透明的
		// 						popBox.style.display = "none";
		// 					}
		// 				}
		// 			}
		// 		}, ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
		// 	}
		// }, 1);
		// return () => {
		// 	if (sceneRef.current) {
		// 		sceneRef.current.removeEventListener("click", handleClick);
		// 	}
		// };
	}, []);
	const logOption = {
		data: [
			["行1列1", "行1列2", "行1列3"],
			["行2列1", "行2列2", "行2列3"],
			["行3列1", "行3列2", "行3列3"],
			["行4列1", "行4列2", "行4列3"],
			["行5列1", "行5列2", "行5列3"],
			["行6列1", "行6列2", "行6列3"],
			["行7列1", "行7列2", "行7列3"],
			["行8列1", "行8列2", "行8列3"],
			["行9列1", "行9列2", "行9列3"],
			["行10列1", "行10列2", "行10列3"]
		]
	};
	const [showModal, setShowModal] = useState(false);
	const [activeTurb, setActiveTurb] = useState(1);
	const handleDescClick = id => {
		setActiveTurb(id);
		setShowModal(true);
	};
	let elem: any;
	let navBtn: any;
	useEffect(() => {
		elem = document.querySelector("elem");
		navBtn = document.querySelector("nav");
	}, []);
	// document.addEventListener("click", e => {
	// 	console.log(e.target.classList + "");

	// 	if (e.target !== elem || e.target !== navBtn || !(e.target.classList + "").includes("#turbe")) {
	// 		setShowModal(false);
	// 	}
	// });
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
								<div>28°c</div>
							</div>
						</div>
					</div>
					<div className="header-right">
						<div onClick={() => navigate(HOME_URL)}>首页</div>
						<div className={`${location.pathname === "/dataScreen/index" ? "active" : ""}`}>可视化大屏</div>
					</div>
				</div>
				<div className="dataScreen-main">
					<div className="dataScreen-main-top">
						<div style={{ width: "1360px", height: "600px", display: "flex" }}>
							<div style={{ flex: 1, position: "relative" }}>
								<Viewer
									homeButton={false}
									sceneModePicker={false}
									baseLayerPicker={false}
									navigationHelpButton={false}
									timeline={false}
									animation={false}
									geocoder={false}
									fullscreenButton={false}
									infoBox={false}
									// selectionIndicator={false}
									navigationInstructionsInitiallyVisible={false}
									id="cesiumViewer"
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "1360px",
										height: "600px"
									}}
								>
									<Camera onChange={handleChange} />
									<CameraFlyTo
										duration={1}
										destination={new Cartesian3(-1727417.330142537, 4500398.706174378, 4162748.205198835)}
										orientation={{
											heading: 3.4615846104228423,
											// 视角
											pitch: -0.2603732683468909,
											roll: 6.263176738373746
										}}
										once={true}
									/>
									<Entity
										onClick={e => handleClick(e)}
										position={new Cartesian3(-1727280.330142537, 4500810.706174378, 4162200.205198835)}
									>
										<ModelGraphics
											uri={"/public/model/turbe.glb"}
											color={new Color(1, 0, 0)}
											silhouetteColor={new Color(1, 0, 0)}
											silhouetteSize={3}
										/>
									</Entity>
									<Entity
										onClick={e => handleClick(e)}
										position={new Cartesian3(-1727280.330142537, 4500870.706174378, 4162150.205198835)}
									>
										<ModelGraphics
											uri={"/public/model/turbe.glb"}
											color={new Color(0, 1, 1)}
											silhouetteColor={new Color(0, 1, 1)}
											silhouetteSize={3}
										/>
									</Entity>
									<Entity
										onClick={e => handleClick(e)}
										position={new Cartesian3(-1727280.330142537, 4500950.706174378, 4162080.205198835)}
									>
										<ModelGraphics
											uri={"/public/model/turbe.glb"}
											color={new Color(0, 1, 1)}
											silhouetteColor={new Color(0, 1, 1)}
											silhouetteSize={3}
										/>
									</Entity>
									<Entity
										onClick={e => handleClick(e)}
										position={new Cartesian3(-1727280.330142537, 4501000.706174378, 4162040.205198835)}
									>
										<ModelGraphics
											uri={"/public/model/turbe.glb"}
											color={new Color(0, 1, 1)}
											silhouetteColor={new Color(0, 1, 1)}
											silhouetteSize={3}
										/>
									</Entity>
									{/* {turbeConfig.map((item, index) => {
										return (
											<Entity
												key={item.id}
												onClick={e => handleClick(e)}
												position={new Cartesian3(-1727280.330142537 + item.lat, 4500840.706174378 + item.lon, 4162200.205198835)}
											>
												<ModelGraphics
													uri={"/public/model/turbe.glb"}
													color={item.status ? new Color(0, 1, 1) : new Color(1, 0, 0)}
													silhouetteColor={item.status ? new Color(0, 1, 1) : new Color(1, 0, 0)}
													silhouetteSize={3}
												/>
											</Entity>
										);
									})} */}
									{/* <Entity
										onClick={e => handleClick(e)}
										position={new Cartesian3(-1727600.330142537, 4500800.706174678, 4162200.205198835)}
										name="turb"
									>
										<PointGraphics pixelSize={5} color={Color.BLUE}></PointGraphics>
										<BoxGraphics dimensions={new Cartesian3(8, 8, 100)} material={Color.RED} />
										<LabelGraphics text={"小风机"}></LabelGraphics>
									</Entity>
									<Entity
										onClick={e => handleClick(e)}
										position={new Cartesian3(-1727280.330142537, 4500810.706174378, 4162200.205198835)}
									>
										<BoxGraphics
											heightReference={HeightReference.CLAMP_TO_GROUND}
											dimensions={new Cartesian3(8, 8, 100)}
											material={Color.RED}
										/>
									</Entity> */}
								</Viewer>
								<ChartBox id={"elem"} width={`${showModal ? 280 : 0}`} height={280} title={activeTurb + "号风机"}>
									<div style={{ padding: "20px 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
										<div style={{ display: "flex", justifyContent: "space-between" }}>
											<div>状态</div>
											<div>运行中</div>
										</div>
										<div style={{ display: "flex", justifyContent: "space-between" }}>
											<div>环境温度</div>
											<div>27℃</div>
										</div>
										<div style={{ display: "flex", justifyContent: "space-between" }}>
											<div>机舱温度</div>
											<div>58℃</div>
										</div>
										<div style={{ display: "flex", justifyContent: "space-between" }}>
											<div>环境湿度</div>
											<div>27°</div>
										</div>
										<div
											id="nav"
											style={{
												width: "100%",
												height: "40px",
												borderRadius: "8px",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												background: "linear-gradient(#0d2940 26%, #2437af)",
												cursor: "pointer"
											}}
											onClick={() => {
												navigate(`/dataScreen/${activeTurb}`);
											}}
										>
											查看详情
										</div>
									</div>
								</ChartBox>
								{/* <div
									style={{
										width: "280px",
										height: "280px",
										position: "absolute",
										top: "30px",
										zIndex: 9999,
										opacity: 1,
										backgroundColor: "red"
									}}
								></div> */}
							</div>
							<TurbDesc config={turbeConfig} onDescClick={id => handleDescClick(id)}></TurbDesc>
						</div>

						<div style={{ display: "flex", flexDirection: "column", width: "510px" }}>
							<TurbPHM />
							<ChartBox width={510} height={360} title="企业概况">
								<div></div>
							</ChartBox>
						</div>
					</div>
					<div className="dataScreen-main-bottom">
						<TurbProduct />
						<ChartBox width={510} height={360} title="风机运行日志">
							<div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
								<ScrollBoard config={logOption} style={{ width: "480px", height: "280px" }} />
							</div>
						</ChartBox>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverViewScreen;
