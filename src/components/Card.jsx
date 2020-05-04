import React, { Component } from "react";
import cloud from "../img/vivi/cloud.jpg";
import egg from "../img/vivi/egg.png";
import geometric from "../img/vivi/geometric.jpg";
import easter from "../img/vivi/easter.jpg";
import cactus from "../img/vivi/cactus.jpg";
import fruity from "../img/vivi/fruity.jpg";
import bird from "../img/vivi/bird.jpg";
import bigfish from "../img/vivi/bigfish.jpg";
import icecream from "../img/vivi/icecream.png";
import logos from "../img/vivi/logos.png";
import mermaid from "../img/vivi/mermaid.png";
import midautumn from "../img/vivi/midautumn.jpg";
import mirrorflower from "../img/vivi/mirrorflower.jpg";
import moon from "../img/vivi/moon.jpg";
import moutainspencil from "../img/vivi/mountainspencil.jpg";
import moutains from "../img/vivi/mountains.jpg";
import netflix from "../img/vivi/netflix.jpg";
import nomi from "../img/vivi/nomi.png";
import noodles from "../img/vivi/noodles.jpg";
import plants from "../img/vivi/plants.png";
import river from "../img/vivi/river.jpg";
import spring from "../img/vivi/spring.jpg";
import sunny from "../img/vivi/sunny.jpg";
import supreme from "../img/vivi/supreme.jpg";
import tree from "../img/vivi/tree.png";
import valentine from "../img/vivi/valentine.jpg";
import wechat from "../img/vivi/wechat.jpg";
import windmill from "../img/vivi/windmill.png";
import youtube from "../img/vivi/youtube.jpg";
import cat from "../img/vivi/cat.jpg";
import welcome2020 from "../img/vivi/welcome2020.png";
import eagle from "../img/vivi/eagle.jpg";
import melody from "../img/vivi/melody.jpg";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.js";

class Card extends Component {
  state = {};

  imgNames = [
    "autumn spring.jpg",
    "big fish.jpg",
    "bird.jpg",
    "cactus.jpg",
    "cat.jpg",
    "cloud.jpg",
    "eagle.jpg",
    "easter.jpg",
    "egg.jpg",
    "fruity.jpg",
    "geometric.jpg",
    "house.png",
    "ice cream.png",
    "logos.png",
    "mermaid.jpg",
    "mid-autumn.jpg",
    "mirror flower.jpg",
    "moon.jpg",
    "mountains pencil.jpg",
    "mountains.jpg",
    "nexflix.jpg",
    "new year wishes.png",
    "nomi.png",
    "noodles.jpg",
    "plants.png",
    "river.jpg",
    "spring.jpg",
    "sunny.jpg",
    "supreme.jpg",
    "tree.png",
    "valentine.jpg",
    "wechat.jpg",
    "welcome2020.png",
    "windmill.png",
    "youtube.jpg",
  ];

  render() {
    return (
      <div class="d-flex flex-wrap container-fluid  justify-content-between align-items-start">
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={cloud} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Cloud</h4>
            <a
              href={cloud}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* </div> */}
        {/* ============================= */}

        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={bird} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Bird</h4>

            <a
              href={bird}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* </div> */}
        {/* ============= */}
        {/* <div className="mt-2">
          {" "} */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={easter} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Easter</h4>

            <a
              href={easter}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* </div> */}
        {/* ========================== */}
        {/* <div className="mt-2">
          {" "} */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img
            src={midautumn}
            class="card-img-top"
            alt="..."
            style={{ width: "300px", height: "auto" }}
          />
          <div class="card-body">
            <h4 class="card-title">Mid-Autumn</h4>

            <a
              href={midautumn}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* </div> */}
        {/* ================================ */}
        {/* <div className="mt-2">
          {" "} */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={cat} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Cat</h4>

            <a
              href={cat}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* </div> */}
        {/* ============================================= */}
        {/* <div className="mt-2">
          {" "} */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={egg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Egg</h4>

            <a
              href={egg}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ======================================== */}

        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={moon} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Moon</h4>

            <a
              href={moon}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ========================================== */}

        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={plants} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Plants</h4>

            <a
              href={plants}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ================================================ */}

        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={spring} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Spring</h4>

            <a
              href={spring}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ====================================== */}

        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={tree} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Tree</h4>

            <a
              href={tree}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ===================================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={valentine} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Valentine's Day</h4>
            <a
              href={valentine}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* =========================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={icecream} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Ice Cream</h4>
            <a
              href={icecream}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ========================================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={mermaid} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Mermaid</h4>
            <a
              href={mermaid}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* =================================================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={welcome2020} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Welcome2020</h4>
            <a
              href={welcome2020}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ===================================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={fruity} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Fruity</h4>
            <a
              href={fruity}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* =================================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={logos} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Logos</h4>
            <a
              href={logos}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ============================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={wechat} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Wechat</h4>
            <a
              href={wechat}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* =========================================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={netflix} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Netflix</h4>
            <a
              href={netflix}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ================================================ */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={supreme} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Supreme</h4>
            <a
              href={supreme}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={youtube} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Youtube</h4>
            <a
              href={youtube}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================== */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={sunny} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Sunny</h4>
            <a
              href={sunny}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================== */}

        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={noodles} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Noodles</h4>
            <a
              href={noodles}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "350px" }}
        >
          <img src={nomi} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Nomi</h4>
            <a
              href={nomi}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div class="card mx-2 my-3 " style={{ width: "300px", height: "450" }}>
          <img src={windmill} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Windmill</h4>
            <a
              href={windmill}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "450px" }}
        >
          <img src={cactus} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Cactus</h4>
            <a
              href={cactus}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "450px" }}
        >
          <img src={mirrorflower} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Mirror Flower</h4>
            <a
              href={mirrorflower}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ======================================================= */}
        <div class="card mx-2 my-3 " style={{ width: "300px", height: "450" }}>
          <img src={moutains} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Moutains</h4>
            <a
              href={moutains}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "520px" }}
        >
          <img src={eagle} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Eagle</h4>
            <a
              href={eagle}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "520px" }}
        >
          <img src={moutainspencil} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Mountains</h4>
            <a
              href={moutainspencil}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>

        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "520px" }}
        >
          <img src={geometric} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Geometric</h4>
            <a
              href={geometric}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "520px" }}
        >
          <img src={bigfish} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Big Fish</h4>
            <a
              href={bigfish}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "550px" }}
        >
          <img src={river} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">River</h4>
            <a
              href={river}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
        {/* ======================================================= */}
        <div
          class="card mx-2 my-3 "
          style={{ width: "300px", height: "550px" }}
        >
          <img src={melody} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Melody</h4>
            <a
              href={melody}
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-primary"
            >
              Full Size
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
