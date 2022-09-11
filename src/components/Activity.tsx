import React from "react";
import "../styles/Activities.scss";

export const Activity = (props: {
    text?: React.ReactElement;
    icon?: React.ReactElement;
    imageList?: Array<number>;
}) => {
    return (
        <div className="activity">
            <div className="desc">
                <div className="start-icon">{props?.icon}</div>
                <div className="text-middle">{props.text}</div>
            </div>
            <div className="act">
                <div className="people">
                    {props.imageList &&
                        props.imageList.map((image, index) => {
                            return (
                                <img src={`/profile/image(${image}).jpg`} key={index} className="avatar" />
                                    );
                                })}
                </div>
                <div className="three-points">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </div>
    );
};
