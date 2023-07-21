import React, { useEffect } from "react";
import * as Cesium from "cesium";
const TurbMap = () => {
	let viewer: any = null;
	useEffect(() => {
		if (viewer == null) {
			viewer = new Cesium.Viewer("cesiumViewer", {
				homeButton: false,
				sceneModePicker: false,
				baseLayerPicker: false,
				navigationHelpButton: false,
				timeline: false,
				animation: false,
				geocoder: false,
				fullscreenButton: false,
				infoBox: false,
				selectionIndicator: false,
				navigationInstructionsInitiallyVisible: false
			});
		}

		viewer.scene.camera.setView({
			destination: new Cesium.Cartesian3(-1727217.330142537, 4500698.706174378, 4162348.205198835), // 相机的位置
			orientation: {
				heading: 3.4695846104228423,
				// 视角
				pitch: -0.2803732683468909,
				roll: 6.283176738373746
			}
		});
		viewer.entities.add(
			new Cesium.Entity({
				description: "小风机",
				position: new Cesium.Cartesian3(-1727303.330142537, 4500968.706174378, 4162388.20519883),
				box: new Cesium.BoxGraphics({
					heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
					dimensions: new Cesium.Cartesian3(4, 4, 30),
					material: Cesium.Color.BLUE
				}),
				label: new Cesium.LabelGraphics({
					text: "1号风机"
				})
			})
		);
		const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
		handler.setInputAction(movement => {
			let pick = viewer.scene.pick(movement.position);
			console.log(pick);

			if (Cesium.defined(pick) && pick.id && pick.id.id) {
				// let popBox = document.getElementById("popoverBox"); //这个是Popover包裹的盒子
				// if (!popBox) return;
				// console.log(popBox);
				// // 屏幕坐标转世界坐标——关键点
				// const ellipsoid = viewer.scene.globe.ellipsoid;
				// const cartesian = viewer.camera.pickEllipsoid(click.position, ellipsoid);
				// if (cartesian) {
				// 	//判断点击的是否是地球
				// 	//将笛卡尔坐标转换为地理坐标
				// 	const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
				// 	//将弧度转为度的十进制度表示
				// 	const lon = Cesium.Math.toDegrees(cartographic.longitude);
				// 	const lat = Cesium.Math.toDegrees(cartographic.latitude);
				// 	const click_point = { longitude: lon, latitude: lat };
				// 	// addPoint(click_point); //将点击点的经纬度传入addPoint
				// 	console.log(click_point);
			}
		}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
	}, []);
	return <div id={"cesiumViewer"} style={{ position: "absolute", top: 0, left: 0, width: "1360px", height: "600px" }}></div>;
};

export default TurbMap;
