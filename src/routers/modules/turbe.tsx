import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 超级表格模块
const proTableRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "风机管理"
		},
		children: [
			{
				path: "/turbe/admin",
				element: lazyLoad(React.lazy(() => import("@/views/turbe/admin"))),
				meta: {
					requiresAuth: true,
					title: "风机管理",
					key: "风机管理"
				}
			},
			{
				path: "/turbe/log",
				element: lazyLoad(React.lazy(() => import("@/views/turbe/log"))),
				meta: {
					requiresAuth: true,
					title: "风机日志",
					key: "风机日志"
				}
			},
			{
				path: "/turbe/upload",
				element: lazyLoad(React.lazy(() => import("@/views/turbe/upload"))),
				meta: {
					requiresAuth: true,
					title: "上传预测",
					key: "上传预测"
				}
			}
		]
	}
];

export default proTableRouter;
