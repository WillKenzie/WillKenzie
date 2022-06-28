import { Image, BackTop, Col, Row } from 'antd';
import Header from "./Components/Header"

/* Images */
import image01 from "./Images/001.jpg"
import image03 from "./Images/003.jpg"
import image04 from "./Images/004.jpg"
import image05 from "./Images/005.jpg"
import image06 from "./Images/006.jpg"
import image07 from "./Images/007.jpg"
import image09 from "./Images/009.jpg"
import image10 from "./Images/010.jpg"
import image11 from "./Images/011.jpg"
import image12 from "./Images/012.jpg"
import image14 from "./Images/014.jpg"
import image15 from "./Images/015.jpg"

const images = [image01, image03, image04, image05, image06, image07, image09, image10, image11, image12, image14, image15]
const imageElements = []

for (const i of images) {
    imageElements.push(
        <Col span={6}>
            <Image
                width={"16rem"}
                src={i}
                style={{padding:"1rem"}}
            />
        </Col>
    )
}

function Gallery() {
    return (<>

        <Header />
        <BackTop />
        <Row>
            {imageElements}
        </Row>

    </>
    )
}

export default Gallery;