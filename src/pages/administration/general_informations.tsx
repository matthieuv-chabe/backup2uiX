import {Avatar, Button, Card, Col, Dropdown, List, Row, Space, Statistic, Typography} from "antd";
import {CheckCircleFilled, DownOutlined} from "@ant-design/icons";
import React from "react";
import SkeletonAvatar from "antd/es/skeleton/Avatar";

const { Text } = Typography;

export const GeneralInformations = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Etat Waynium"
                        value="EN LIGNE"
                        valueStyle={{ color: '#3f8600' }}
                    />
                    <Row gutter={16}>
                        <Col span={12}>
                            <List
                                size="small"
                                itemLayout="horizontal"
                                dataSource={[
                                    {
                                        name: 'chabe',
                                    },
                                    {
                                        name: 'chabelimited',
                                    },
                                ]}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<CheckCircleFilled style={{color: "green"}} />}
                                            description={item.name}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={12}>
                            <List
                                size="small"
                                itemLayout="horizontal"
                                dataSource={[
                                    {
                                        name: 'chabe',
                                    },
                                    {
                                        name: 'chabelimited',
                                    },
                                ]}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<CheckCircleFilled style={{color: "green"}} />}
                                            description={item.name}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>

                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{ height: "100%" }}
                    bodyStyle={{ height: "75%" }}
                    bordered={false} actions={
                    [
                        "Sauvegarder maintenant",
                        <>
                            <Dropdown
                                trigger={['click']}

                                menu={{ items: [
                                        {
                                            'key': 'd',
                                            'label': 'Désactiver sauvegarde automatique pendant :',
                                            'children': [
                                                { key: 5*60*1000, label: '5 minutes' },
                                                { key: 10*60*1000, label: '10 minutes' },
                                                { key: 30*60*1000, label: '30 minutes' },
                                                { key: 60*60*1000, label: '1 heure' },
                                                { key: 24*60*60*1000, label: '1 jour' },
                                            ]
                                        },
                                        {
                                            'key': 'a',
                                            'label': 'Desactiver jusqu\'à réactivation manuelle',
                                            'danger': true,
                                            disabled: true
                                        }
                                ] }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Text type={"danger"}>
                                            Désactiver sauvegarde
                                        </Text>
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </>
                    ]
                }>
                    <Statistic
                        style={{height: "100%"}}
                        title="Prochaine Backup"
                        value={5}
                        suffix={<span>minutes <Button loading={true} size={"small"} shape="circle" disabled={true} style={{transform:"translateY(-3px)"}} /></span>}
                        valueStyle={{ color: '#3f8600' }}
                    />

                </Card>
            </Col>
        </Row>
    )
}

export default GeneralInformations;
