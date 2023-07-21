import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		// path: "/dataScreen/index",
		// element: lazyLoad(React.lazy(() => import("@/views/dataScreen/index"))),
		// meta: {
		// 	requiresAuth: true,
		// 	title: "数据大屏",
		// 	key: "dataScreen"
		// },
		path: "/dataScreen/index",
		element: lazyLoad(React.lazy(() => import("@/views/dataScreen/overview"))),
		meta: {
			requiresAuth: true,
			title: "风机概览",
			key: "screenOverview"
		}
	},
	{
		path: "/dataScreen/:id",
		element: lazyLoad(React.lazy(() => import("@/views/dataScreen/TurbDetail"))),
		meta: {
			requiresAuth: true,
			title: "风机详情",
			key: "screenDetail"
		}
	}
];

export default dataScreenRouter;
