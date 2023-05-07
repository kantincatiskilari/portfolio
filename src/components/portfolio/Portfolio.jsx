import "./portfolio.css";
import gamebook1 from "../../components/assets/gamebook1.jpeg";
import gamebook2 from "../../components/assets/gamebook2.jpeg";
import pawdictionary1 from "../../components/assets/pawdictionary1.jpeg";
import pawdictionary2 from "../../components/assets/pawdictionary2.jpeg";
import shopapp1 from "../../components/assets/shopapp1.jpeg";
import shopapp2 from "../../components/assets/shopapp2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    Project: "Twitter Clone",
    Name: "gamebook",
    Language: "mongoDB, ExpressJS, ReactJS, NodeJS",
    Repo: "https://github.com/kantincatiskilari/gamebook",
    Image: gamebook1,
  },
  {
    Project: "Twitter Clone",
    Name: "gamebook",
    Language: "mongoDB, ExpressJS, ReactJS, NodeJS",
    Repo: "https://github.com/kantincatiskilari/gamebook",
    Image: gamebook2,
  },
  {
    Project: "Dictionary Clone",
    Name: "pawdictionary",
    Language: "mongoDB, ExpressJS, ReactJS, NodeJS",
    Repo: "https://github.com/kantincatiskilari/dictionary",
    Image: pawdictionary1,
  },
  {
    Project: "Dictionary Clone",
    Name: "pawdictionary",
    Language: "mongoDB, ExpressJS, ReactJS, NodeJS",
    Repo: "https://github.com/kantincatiskilari/dictionary",
    Image: pawdictionary2,
  },
  {
    Project: "Shop App",
    Name: "e-Commerce",
    Language: "mongoDB, ExpressJS, ReactJS, NodeJS",
    Repo: "https://github.com/kantincatiskilari/shopapp",
    Image: shopapp1,
  },
  {
    Project: "Shop App",
    Name: "e-Commerce",
    Language: "mongoDB, ExpressJS, ReactJS, NodeJS",
    Repo: "https://github.com/kantincatiskilari/shopapp",
    Image: shopapp2,
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolioTitle">
        <span>My </span>
        <span>Portfolio</span>
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
            <LazyLoadImage
              src={item.Image}
              className="swiperImg"
              effect="blur"
            />
            <div className="itemDescContainer">
              <h3 className="itemDescTitle">{item.Project}</h3>
              <div className="itemDescElement">
                <span>
                  <WebIcon /> Project Name:{" "}
                </span>
                <span>{item.Name}</span>
              </div>
              <div className="itemDescElement">
                <span>
                  <CodeIcon />
                  Languages:{" "}
                </span>
                <span>{item.Language}</span>
              </div>
              <div className="itemDescElement">
                <span>
                  <GitHubIcon /> github Repo:{" "}
                </span>
                <a href={item.Repo} className="link">
                  Click Here
                </a>
              </div>
              <div className="itemDescElement">
                <span>
                  <DescriptionIcon /> Project Name:{" "}
                </span>
                <span>{item.Name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
