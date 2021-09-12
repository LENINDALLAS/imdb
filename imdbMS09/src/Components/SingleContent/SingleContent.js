import React from 'react';
import { img_300, unavailable } from '../config/config';
import './SingleContent.css'
import { Badge } from '@material-ui/core'
import ContentModal from '../ContentModal/ContentModal';

function SingleContent({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) {

    return (
        <ContentModal className="media" media_type={media_type} id={id}>
            <Badge color={vote_average > 6 ? "primary" : "secondary"} badgeContent={vote_average} />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === 'tv' ? "TV Series" : "Movie"}
            </span>
            <span className="subTitle" >{date}</span>
        </ContentModal>
    );
}

export default SingleContent;