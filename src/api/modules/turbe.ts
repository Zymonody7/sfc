import http from "@/api";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serviceLoading";

export const getPreList = id => {
	showFullScreenLoading();
	setTimeout(() => {
		tryHideFullScreenLoading();
	}, 300);
	// return http.get(`https://34ec-171-117-18-132.ngrok-free.app/turbine/pred/data/scope?turbine_id=11&input_len=200&output_len=96`);
	return [
		{
			TURBID: "11",
			YD15: 12978.86707231464,
			ROUND_POWER: 7293.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 00:00:00"
		},
		{
			TURBID: "11",
			YD15: 13211.400193682777,
			ROUND_POWER: 65666.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 00:15:00"
		},
		{
			TURBID: "11",
			YD15: 37434.425689185475,
			ROUND_POWER: 115620.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 00:30:00"
		},
		{
			TURBID: "11",
			YD15: 44218.78562767123,
			ROUND_POWER: 141861.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 00:45:00"
		},
		{
			TURBID: "11",
			YD15: 22854.594502194403,
			ROUND_POWER: 98661.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 01:00:00"
		},
		{
			TURBID: "11",
			YD15: 23584.720166619274,
			ROUND_POWER: 55461.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 01:15:00"
		},
		{
			TURBID: "11",
			YD15: 10078.884049218517,
			ROUND_POWER: 49404.833333333336,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 01:30:00"
		},
		{
			TURBID: "11",
			YD15: 8198.415964293898,
			ROUND_POWER: 43348.666666666664,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 01:45:00"
		},
		{
			TURBID: "11",
			YD15: 11619.918181223742,
			ROUND_POWER: 37292.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 02:00:00"
		},
		{
			TURBID: "11",
			YD15: 7437.2595833909,
			ROUND_POWER: 31236.333333333332,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 02:15:00"
		},
		{
			TURBID: "11",
			YD15: 6906.620484270512,
			ROUND_POWER: 25180.166666666664,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 02:30:00"
		},
		{
			TURBID: "11",
			YD15: 5439.842408855686,
			ROUND_POWER: 19124.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 02:45:00"
		},
		{
			TURBID: "11",
			YD15: 3030.798315497213,
			ROUND_POWER: 13079.666666666668,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 03:00:00"
		},
		{
			TURBID: "11",
			YD15: 2529.5985226569096,
			ROUND_POWER: 7035.333333333334,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 03:15:00"
		},
		{
			TURBID: "11",
			YD15: 2274.7483846659034,
			ROUND_POWER: 991.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 03:30:00"
		},
		{
			TURBID: "11",
			YD15: 1834.5230083721551,
			ROUND_POWER: 1940.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 03:45:00"
		},
		{
			TURBID: "11",
			YD15: 1997.467003334143,
			ROUND_POWER: 2890.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 04:00:00"
		},
		{
			TURBID: "11",
			YD15: 2174.9915710511195,
			ROUND_POWER: 5966.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 04:15:00"
		},
		{
			TURBID: "11",
			YD15: 15014.718580011862,
			ROUND_POWER: 7705.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 04:30:00"
		},
		{
			TURBID: "11",
			YD15: 17926.96788792584,
			ROUND_POWER: 60090.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 04:45:00"
		},
		{
			TURBID: "11",
			YD15: 31781.650994576696,
			ROUND_POWER: 84830.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 05:00:00"
		},
		{
			TURBID: "11",
			YD15: 29612.156837263432,
			ROUND_POWER: 85090.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 05:15:00"
		},
		{
			TURBID: "11",
			YD15: 19070.985749463878,
			ROUND_POWER: 87370.25,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 05:30:00"
		},
		{
			TURBID: "11",
			YD15: 18410.487502076863,
			ROUND_POWER: 89650.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 05:45:00"
		},
		{
			TURBID: "11",
			YD15: 18292.308660808838,
			ROUND_POWER: 91930.75,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 06:00:00"
		},
		{
			TURBID: "11",
			YD15: 23905.604703029712,
			ROUND_POWER: 94211.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 06:15:00"
		},
		{
			TURBID: "11",
			YD15: 30886.793921781118,
			ROUND_POWER: 92906.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 06:30:00"
		},
		{
			TURBID: "11",
			YD15: 19923.533062681086,
			ROUND_POWER: 87281.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 06:45:00"
		},
		{
			TURBID: "11",
			YD15: 18408.664469584986,
			ROUND_POWER: 81656.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 07:00:00"
		},
		{
			TURBID: "11",
			YD15: 16125.752509307335,
			ROUND_POWER: 69980.42857142857,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 07:15:00"
		},
		{
			TURBID: "11",
			YD15: 8911.84080825663,
			ROUND_POWER: 58304.857142857145,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 07:30:00"
		},
		{
			TURBID: "11",
			YD15: 5178.230423289763,
			ROUND_POWER: 46629.28571428571,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 07:45:00"
		},
		{
			TURBID: "11",
			YD15: 5306.851635007188,
			ROUND_POWER: 34953.71428571428,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 08:00:00"
		},
		{
			TURBID: "11",
			YD15: 4445.827441561573,
			ROUND_POWER: 23278.142857142855,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 08:15:00"
		},
		{
			TURBID: "11",
			YD15: 2921.3120017110605,
			ROUND_POWER: 11602.57142857142,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 08:30:00"
		},
		{
			TURBID: "11",
			YD15: 3652.0853227196562,
			ROUND_POWER: -73.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 08:45:00"
		},
		{
			TURBID: "11",
			YD15: 530.4776133759365,
			ROUND_POWER: -72.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 09:00:00"
		},
		{
			TURBID: "11",
			YD15: 301.8199942384448,
			ROUND_POWER: -71.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 09:15:00"
		},
		{
			TURBID: "11",
			YD15: 311.13999279961615,
			ROUND_POWER: -70.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 09:30:00"
		},
		{
			TURBID: "11",
			YD15: 135.37779514215262,
			ROUND_POWER: -33.75,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 09:45:00"
		},
		{
			TURBID: "11",
			YD15: 313.10118892056056,
			ROUND_POWER: 2.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 10:00:00"
		},
		{
			TURBID: "11",
			YD15: 482.56469077005875,
			ROUND_POWER: 38.75,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 10:15:00"
		},
		{
			TURBID: "11",
			YD15: 186.11792709517874,
			ROUND_POWER: 75.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 10:30:00"
		},
		{
			TURBID: "11",
			YD15: 640.6154694069248,
			ROUND_POWER: 1857.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 10:45:00"
		},
		{
			TURBID: "11",
			YD15: 859.2236055314332,
			ROUND_POWER: 0.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 11:00:00"
		},
		{
			TURBID: "11",
			YD15: 17.426592282544874,
			ROUND_POWER: -9.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 11:15:00"
		},
		{
			TURBID: "11",
			YD15: -35.76649645186551,
			ROUND_POWER: -18.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 11:30:00"
		},
		{
			TURBID: "11",
			YD15: 400.8830288026031,
			ROUND_POWER: -27.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 11:45:00"
		},
		{
			TURBID: "11",
			YD15: 569.339538753378,
			ROUND_POWER: 386.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 12:00:00"
		},
		{
			TURBID: "11",
			YD15: 404.9116585126206,
			ROUND_POWER: 0.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 12:15:00"
		},
		{
			TURBID: "11",
			YD15: -251.86490004048528,
			ROUND_POWER: -114.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 12:30:00"
		},
		{
			TURBID: "11",
			YD15: 810.2021015012373,
			ROUND_POWER: -69.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 12:45:00"
		},
		{
			TURBID: "11",
			YD15: 357.2131131102055,
			ROUND_POWER: -24.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 13:00:00"
		},
		{
			TURBID: "11",
			YD15: 87.70235651671605,
			ROUND_POWER: 21.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 13:15:00"
		},
		{
			TURBID: "11",
			YD15: 153.5402250663915,
			ROUND_POWER: 66.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 13:30:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 474.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 13:45:00"
		},
		{
			TURBID: "11",
			YD15: 1093.8920408447243,
			ROUND_POWER: 1538.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 14:00:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 2843.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 14:15:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 3237.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 14:30:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 3631.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 14:45:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 4025.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 15:00:00"
		},
		{
			TURBID: "11",
			YD15: 116.65329242565726,
			ROUND_POWER: 2429.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 15:15:00"
		},
		{
			TURBID: "11",
			YD15: -250.09490293904935,
			ROUND_POWER: 458.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 15:30:00"
		},
		{
			TURBID: "11",
			YD15: 6149.990917921132,
			ROUND_POWER: 1591.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 15:45:00"
		},
		{
			TURBID: "11",
			YD15: 702.3460093495355,
			ROUND_POWER: 45076.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 16:00:00"
		},
		{
			TURBID: "11",
			YD15: 16555.807654478464,
			ROUND_POWER: 88562.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 16:15:00"
		},
		{
			TURBID: "11",
			YD15: 24488.149141508216,
			ROUND_POWER: 104240.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 16:30:00"
		},
		{
			TURBID: "11",
			YD15: 23121.025392964213,
			ROUND_POWER: 93532.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 16:45:00"
		},
		{
			TURBID: "11",
			YD15: 13282.147951828614,
			ROUND_POWER: 82825.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 17:00:00"
		},
		{
			TURBID: "11",
			YD15: 11319.420944599695,
			ROUND_POWER: 72117.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 17:15:00"
		},
		{
			TURBID: "11",
			YD15: 15440.788692494923,
			ROUND_POWER: 61410.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 17:30:00"
		},
		{
			TURBID: "11",
			YD15: 9428.254454957909,
			ROUND_POWER: 50702.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 17:45:00"
		},
		{
			TURBID: "11",
			YD15: 6276.29369502167,
			ROUND_POWER: 39995.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 18:00:00"
		},
		{
			TURBID: "11",
			YD15: 6173.676245719658,
			ROUND_POWER: 29287.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 18:15:00"
		},
		{
			TURBID: "11",
			YD15: 8833.4232314552,
			ROUND_POWER: 18580.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 18:30:00"
		},
		{
			TURBID: "11",
			YD15: 10418.39382663389,
			ROUND_POWER: 17755.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 18:45:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 39269.75,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 19:00:00"
		},
		{
			TURBID: "11",
			YD15: 0.0,
			ROUND_POWER: 60784.5,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 19:15:00"
		},
		{
			TURBID: "11",
			YD15: 139.0376762878635,
			ROUND_POWER: 82299.25,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 19:30:00"
		},
		{
			TURBID: "11",
			YD15: 20996.610385655073,
			ROUND_POWER: 103814.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 19:45:00"
		},
		{
			TURBID: "11",
			YD15: 29970.0487048626,
			ROUND_POWER: 98658.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 20:00:00"
		},
		{
			TURBID: "11",
			YD15: 10569.448306749779,
			ROUND_POWER: 82390.4,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 20:15:00"
		},
		{
			TURBID: "11",
			YD15: 7526.670654368698,
			ROUND_POWER: 66122.8,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 20:30:00"
		},
		{
			TURBID: "11",
			YD15: 6767.1136289788055,
			ROUND_POWER: 49855.2,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 20:45:00"
		},
		{
			TURBID: "11",
			YD15: 6210.030171050622,
			ROUND_POWER: 33587.6,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 21:00:00"
		},
		{
			TURBID: "11",
			YD15: 5048.49143726412,
			ROUND_POWER: 17320.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 21:15:00"
		},
		{
			TURBID: "11",
			YD15: 5650.390101865616,
			ROUND_POWER: 14824.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 21:30:00"
		},
		{
			TURBID: "11",
			YD15: 1017.4980141782377,
			ROUND_POWER: 14912.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 21:45:00"
		},
		{
			TURBID: "11",
			YD15: 2569.9135611034817,
			ROUND_POWER: 15000.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 22:00:00"
		},
		{
			TURBID: "11",
			YD15: 3349.3707865753527,
			ROUND_POWER: 12814.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 22:15:00"
		},
		{
			TURBID: "11",
			YD15: 1875.4729550378433,
			ROUND_POWER: 12349.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 22:30:00"
		},
		{
			TURBID: "11",
			YD15: 3713.175151049102,
			ROUND_POWER: 11884.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 22:45:00"
		},
		{
			TURBID: "11",
			YD15: 1107.8203398426726,
			ROUND_POWER: 7899.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 23:00:00"
		},
		{
			TURBID: "11",
			YD15: 579.7859875670716,
			ROUND_POWER: 3914.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 23:15:00"
		},
		{
			TURBID: "11",
			YD15: 703.5673004950459,
			ROUND_POWER: -71.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 23:30:00"
		},
		{
			TURBID: "11",
			YD15: 730.5569869138586,
			ROUND_POWER: -71.0,
			WIND_SPEED: null,
			DATATIME: "2022-06-30 23:45:00"
		}
	];
};
