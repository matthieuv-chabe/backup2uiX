import {Avatar, Button, Card, Col, Descriptions, List, Row, Space, Statistic} from "antd";
import {PageContainer} from "@ant-design/pro-components";
import {useRequest} from "ahooks";
import React from "react";
import {CheckCircleFilled} from "@ant-design/icons";
import GeneralInformations from "./general_informations.tsx";
import DumpTimes from "./dumpTimes.tsx";

const content = (
    <Descriptions size="small" column={2}>
        <Descriptions.Item label="Etat sauvegarde">
            <span style={{color: 'green'}}>OK</span>
        </Descriptions.Item>
        <Descriptions.Item label="Missions sauvegardées">
            <a>123 456</a>
        </Descriptions.Item>
        <Descriptions.Item label="Sauvegarde mission">Il y a 15min.</Descriptions.Item>
        <Descriptions.Item label="Sauvegarde complète">Il y a 11h.</Descriptions.Item>
        <Descriptions.Item label="Prochaine sauvegarde">
            Sauvegarde des missions dans 2h.
        </Descriptions.Item>
    </Descriptions>
);

export default () => {



    return(
        <PageContainer

            title={'Sauvegarde des données'}

            content={content}
            tabList={[
                {
                    tab: 'Informations générales',
                    key: 'base',
                    children: <GeneralInformations />,
                },
                {
                    tab: 'Surveillance BDD OVH',
                    key: 'info',
                },
                {
                    tab: 'Surveillance BDD Locale',
                    key: 'rule',
                },
                {
                    tab: 'Logs temps réel',
                    key: 'log',
                },
                {
                    tab: 'Graphiques',
                    key: 'graph',
                    children: <DumpTimes />
                }
            ]}
            extraContent={
                <Space size={24}>
                    <Statistic
                        title="Missions"
                        value={123456}
                        // prefix={<LikeOutlined/>}
                    />
                    <Statistic title="Charge serveur" value={14} suffix="%"/>
                </Space>
            }
            extra={[
                <Button key="1" type="primary">
                    Forcer sauvegarde immédiatement
                </Button>,
            ]}
        >

        </PageContainer>
    )
}
