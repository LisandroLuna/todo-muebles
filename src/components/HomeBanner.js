import React from "react";
import banner from "../media/img/home-banner.gif";

function HomeBanner(){
    return(
        <div className={"col-lg-12 banner"}>
            <img className={"img-fluid w-100"} src={banner} alt={"Promociones"} />
        </div>
    )
}

export default HomeBanner;