import 'antd/dist/antd.css';
import { BackTop, Typography, Layout, Tabs, Carousel, Image, List } from 'antd';
import Header from './Components/Header';

import central from "./Images/CENTRAL.jpg"
import image01 from "./Images/001.jpg"
import image03 from "./Images/003.jpg"
import image04 from "./Images/004.jpg"
import image09 from "./Images/009.jpg"
import image10 from "./Images/010.jpg"
import image11 from "./Images/011.jpg"
import image12 from "./Images/012.jpg"
import image14 from "./Images/014.jpg"
import image15 from "./Images/015.jpg"

const { Title, Paragraph, Text } = Typography;
const { Sider, Content } = Layout;
const { TabPane } = Tabs
const images = [central, image01, image03, image04, image09, image10, image11, image12, image14, image15]
const imageElements = []

for (const i of images) {
  imageElements.push(
    <Image
      height={"2%"}
      width={"100%"}
      src={i}
    />
  )
}

function Home() {
  return (
    <>
      <Header />
      <Typography style={{ padding: "2.5rem", backgroundColor:"#D01818"}}>
        <Layout style={{ backgroundColor: "#fff" }}>
          <Content style={{ padding: "2.5rem" }}>
            <Title style={{ textAlign: "center" }}>Welcome to Portage High School Business Club</Title>
            <Carousel autoplay>
              {imageElements}
            </Carousel>

            <Title>Introduction</Title>
            <Paragraph>
              <strong>Business Professionals of America</strong> is a program that puts high-schoolers and college students in fun competitions in business management, accounting, and IT categories. These competitions give endless opportunity to high-schoolers such as certification, resume fillers, and more.
            </Paragraph>
            <Title level={3}>Learn more about competitions</Title>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Regionals" key="1">
                <Paragraph>Compete at Regionals in the first step to showing what you know and taking home the first award of (hopefully!) many. Regionals is sometimes held at Ivy Tech, and sometimes held at Portage High School. </Paragraph>
              </TabPane>
              <TabPane tab="State" key="2">
                <Paragraph>Not too far away from home, BPA State is located in Indianapolis. Get the chance to come to Indianapolis for 3 days to compete in your favorite subjects! (If you get top 5 in regionals)</Paragraph>
              </TabPane>
              <TabPane tab="Nationals" key="3">
                <Paragraph>Embrace the opportunity to go to Texas, California, Florida, or Illinois to compete nationally, or compete virtually at home! (Only if you get top 5 in regionals and state)</Paragraph>
              </TabPane>
            </Tabs>
            <hr color={"#FFFFFF"} />
            <Paragraph>Want to see all contest listings? Click <a href="https://bpa.org/students/compete/competitive-event-listing/">here</a>. (Portage High School is Secondary/S - not Post Secondary/PS)</Paragraph>
            <Paragraph>Email Bryan Bernacki <a href="mailto:bryan.bernacki@portage.k12.in.us">(Quick link)</a> to learn more about joining BPA, or attend our annual callout meeting August 30th at Portage High School. <b>Note that only Portage High School students may attend the callout meeting or join the PHS BPA Chapter.</b></Paragraph>
          </Content>
        </Layout>
      </Typography>
      <BackTop />
    </>
  );
}

export default Home;
