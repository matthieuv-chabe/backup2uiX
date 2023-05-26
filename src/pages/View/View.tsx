import {Button, Descriptions, Space, Statistic} from "antd";
import {PageContainer} from "@ant-design/pro-components";
import Planning from "./planning.tsx";


export default () => {
    return(
        <>
        <PageContainer

            style={{width: '100%'}}
            >
            <Planning />
        </PageContainer>
        </>
    )
}
