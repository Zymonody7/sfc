import { useTimes } from "@/hooks/useTime";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "@three-ts/orbit-controls";
import "./index.less";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ChartBox from "../components/ChartBox";
import ReactECharts from "echarts-for-react";
const TurbDetail = () => {
	const params = useParams();
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
	let camera;
	let renderer;
	let scene;
	let fans = new THREE.Group();
	let beam = new THREE.Group();
	let controls;
	function render() {
		renderer.render(scene, camera); //执行渲染操作
		// mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
		// controls.update();
		// requestAnimationFrame(render); //请求再次执行渲染函数render
	}
	const animate = () => {
		requestAnimationFrame(animate);
		fans.rotation.x -= 0.05;
		render();
	};
	useEffect(() => {
		let container = document.getElementById("container");
		if (container == null) return;
		// 创建渲染器
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		// renderer.setPixelRatio(window.devicePixelRatio);
		// 设置画布的宽高
		renderer.setSize(1920, 960);
		// renderer.setSize(1200, 720);
		// 判断容器中子元素的长度
		let childs = container.childNodes;
		if (container.childNodes.length > 0) {
			container.removeChild(childs[0]);
			container.appendChild(renderer.domElement);
		} else {
			container.appendChild(renderer.domElement);
		}
		//   container.appendChild(renderer.domElement);

		// 创建场景
		scene = new THREE.Scene();
		// 创建相机
		// camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);
		camera = new THREE.PerspectiveCamera(30, (window.innerWidth - 20) / (window.innerHeight - 20), 0.1, 1000);
		// camera.up.set(0, 1, 0);
		camera.position.set(50, -5, -80);
		// camera.up.set(0, 0, 0);
		camera.lookAt(new THREE.Vector3(0, -5, 0));
		// controls = new OrbitControls(camera);
		// 材质、天空盒暂时没用
		let material = new THREE.MeshBasicMaterial({ color: 0xff00000 });
		// {color: 0xffff00} //材质

		// 平行光源
		let light = new THREE.SpotLight(0xfafafa);
		light.position.set(100, 100, 0);
		// light.lookAt(0, 0, 0);
		light.castShadow = true;
		scene.add(light);
		const axes = new THREE.AxesHelper();
		// 环境光
		let ambientLight = new THREE.AmbientLight(0xff0000);
		// ambientLight.visible = true;
		scene.add(ambientLight);
		scene.add(axes);
		let loader = new GLTFLoader();
		loader.load(
			// 路径
			"model/turbe.glb",
			// 当模型加载完成（100%）后执行
			glb => {
				console.log(glb);
				// scene.add(glb.scene);
				let object = glb.scene;
				console.log(object);
				// // 风机叶片group，旋转
				let l0 = object.children[2];
				let l1 = object.children[3];
				let l2 = object.children[4];
				let l3 = object.children[5];
				let l4 = object.children[6];
				// // let l5 = object.children[7];
				// // 柱子group，不动
				let m0 = object.children[0];
				let m1 = object.children[1];
				l1.material.color.set(0x00ffffdd);

				fans.add(l1);
				fans.add(l2);
				fans.add(l3);
				fans.add(l4);
				fans.add(l0);
				beam.add(m0);
				beam.add(m1);
				// // 添加到场景
				scene.add(beam);
				scene.add(fans);
				// // //scene.add(object);
				// // renderer.render(scene, camera);
				// // object.scale.set(3, 3, 3);
				// scene.add(object);
				// // object.scene.translateX(100);
				// object.position.set(0, 0, 0);
				animate();
				// render();
			}
		);
	}, []);
	return (
		<div className="dataScreen-container">
			<div className="dataScreen" ref={dataScreenRef}>
				<div className="dataScreen-header">
					<div className="header-left">
						<div className="header-title">
							<h1 style={{ color: "#fff" }}>{params.id}号风机详情</h1>
						</div>
						<div className="header-info">
							<div>当前时间:{time}</div>
							<div>
								<img
									src="https://easyv.assets.dtstack.com/data/assets/jzmb2tfaxe_1631781760965_b7kmqg64rs.gif"
									style={{ width: "18px", height: "22px" }}
								></img>
								<div style={{ marginRight: "16px" }}>深圳</div>
								<img
									src="https://easyv.assets.dtstack.com/components/static-image/weatherV2/%E5%A4%9A%E4%BA%91.png"
									style={{ width: "30px", height: "30px" }}
								/>
								<div>28°c</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="dataScreen-main"
					style={{ position: "relative", display: "flex", width: "100%", height: "100%", alignItems: "flex-end" }}
				>
					<div id="container" style={{ position: "absolute", left: "-300px", right: 0 }}></div>
					<div className="">
						<ChartBox width={700} height={500} title="风机实时信息">
							{/* <ReactECharts /> */}
						</ChartBox>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TurbDetail;
