import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import qs from "qs";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(PORT1 + `/login`, params);
	return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};

// * 获取按钮权限
export const getAuthorButtons = () => {
	return {
		msg: "success",
		code: 0,
		list: [
			{
				path: "/home/index",
				title: "首页",
				icon: "HomeOutlined",
				children: []
			},
			{
				path: "/dataScreen/index",
				title: "数据大屏",
				icon: "AreaChartOutlined",
				children: []
			},
			{
				path: "/proTable",
				title: "管理中心",
				icon: "TableOutlined",
				children: [
					{
						path: "/proTable/useHooks",
						title: "景区管理",
						icon: "AppstoreOutlined",
						children: null
					},
					{
						path: "/proTable/useComponent",
						title: "游客管理",
						icon: "AppstoreOutlined",
						children: null
					}
				]
			},
			{
				path: "/error",
				title: "错误页面",
				icon: "ExclamationCircleOutlined",
				children: [
					{
						path: "/404",
						title: "404页面",
						icon: "AppstoreOutlined",
						children: null
					},
					{
						path: "/403",
						title: "403页面",
						icon: "AppstoreOutlined",
						children: null
					},
					{
						path: "/500",
						title: "500页面",
						icon: "AppstoreOutlined",
						children: null
					}
				]
			}
		]
	};
};

// * 获取菜单列表
export const getMenuList = () => {
	return {
		msg: "success",
		code: 0,
		list: [
			{
				path: "/home/index",
				title: "首页",
				icon: "HomeOutlined",
				children: []
			},
			{
				path: "/dataScreen/index",
				title: "数据大屏",
				icon: "AreaChartOutlined",
				children: []
			},
			{
				path: "/proTable",
				title: "管理中心",
				icon: "TableOutlined",
				children: [
					{
						path: "/proTable/useHooks",
						title: "景区管理",
						icon: "AppstoreOutlined",
						children: null
					},
					{
						path: "/proTable/useComponent",
						title: "游客管理",
						icon: "AppstoreOutlined",
						children: null
					}
				]
			},
			{
				path: "/error",
				title: "错误页面",
				icon: "ExclamationCircleOutlined",
				children: [
					{
						path: "/404",
						title: "404页面",
						icon: "AppstoreOutlined",
						children: null
					},
					{
						path: "/403",
						title: "403页面",
						icon: "AppstoreOutlined",
						children: null
					},
					{
						path: "/500",
						title: "500页面",
						icon: "AppstoreOutlined",
						children: null
					}
				]
			}
		]
	};
	// return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`);
};
