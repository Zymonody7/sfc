import logo from "@/assets/images/logo.png";
import { connect } from "react-redux";

const Logo = (props: any) => {
	const { isCollapse } = props;
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? (
				<h2 style={{ fontSize: "16px" }} className="logo-text">
					龙源风电监控运维系统
				</h2>
			) : null}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(Logo);
