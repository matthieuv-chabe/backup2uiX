import {UserOutlined} from '@ant-design/icons';
import type {ProSettings} from '@ant-design/pro-components';
import {ProLayout, SettingDrawer} from '@ant-design/pro-components';
import {Typography} from 'antd';
import React, {useState} from 'react';
import defaultProps from './_defaultProps.tsx';

import chabeLogoWhite from '../../assets/logo_chabe_blanc_500.png';
import chabeLogoBlue from '../../assets/logo_chabe_bleu_400.png';
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const {Text} = Typography;

export default () => {
	const navigate = useNavigate();
	const pathname = useLocation().pathname;
	const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({

		"fixSiderbar": true,
		"layout": "mix",
		"contentWidth": "Fluid",
		"colorPrimary": "#1677FF", // Chabe color, #061E3A, is too dark for the dark mode to be readable
		navTheme: 'light',


	});
	return (
		<div
			id="test-pro-layout"
			style={{
				height: '100vh',
			}}
		>
			<ProLayout

				title={'CHABE - Backup '}
				logo={ settings?.navTheme === "realDark" ? chabeLogoWhite : chabeLogoBlue }
				locale={"en-US"}
				{...defaultProps}
				location={{
					pathname,
				}}
				menuFooterRender={(props) => {
					return (
						<a
							style={{
								lineHeight: '48rpx',
								display: 'flex',
								height: 48,
								color: 'rgba(255, 255, 255, 0.65)',
								alignItems: 'center',
							}}
							// href="https://preview.pro.ant.design/dashboard/analysis"
							target="_blank"
							rel="noreferrer"
						>
							<div
								onClick={(e) => {
									e.preventDefault();
									setSetting({
										...settings,
										navTheme: settings?.navTheme === 'realDark' ? 'light' : 'realDark',
									})
								}}
							>
								<img
									alt="pro-logo"
									src="https://procomponents.ant.design/favicon.ico"
									style={{
										width: 16,
										height: 16,
										margin: '0 16px',
										marginInlineEnd: 10,
									}}
								/>
								{!props?.collapsed && <Text>Changer thème</Text>}
							</div>
						</a>
					);
				}}
				onMenuHeaderClick={(e) => console.log(e)}
				menuItemRender={(item, dom) => (
					<a
						onClick={() => {
							navigate(item.path || '/welcome');
						}}
					>
						{dom}
					</a>
				)}
				avatarProps={{
					icon: <UserOutlined/>,
				}}
				{...settings}
			>
				<Outlet />
			</ProLayout>
			<SettingDrawer
				pathname={pathname}
				// getContainer={() => document.getElementById('test-pro-layout')}
				settings={settings}
				onSettingChange={(changeSetting) => {
					setSetting(changeSetting);
				}}
			/>
		</div>
	);
};