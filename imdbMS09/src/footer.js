import React from 'react';
import './footer.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ForumIcon from '@material-ui/icons/Forum';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LaunchIcon from '@material-ui/icons/Launch';

function Footer() {

    const openInNewTab = (url) => {      //opens the web page in new tab     
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <footer className="footer">
            <div className="footer__icons" >
                <TwitterIcon className="icon" onClick={() => openInNewTab('https://twitter.com/imdb')} />
                <FacebookIcon className="icon" onClick={() => openInNewTab('https://www.facebook.com/imdb')} />
                <InstagramIcon className="icon" onClick={() => openInNewTab('https://www.instagram.com/imdb/')} />
                <ForumIcon className="icon" onClick={() => openInNewTab('https://www.twitch.tv/IMDb')} />
                <YouTubeIcon className="icon" onClick={() => openInNewTab('https://www.youtube.com/imdb')} />
            </div>

            <div className="footer__icons">
                <span className="explore__text" onClick={() => openInNewTab('https://apps.apple.com/us/app/id342792525?_branch_match_id=942781316055035033&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot')}>Get the IMDb App<LaunchIcon className="icon launch" /></span>
                <span className="explore__text" onClick={() => openInNewTab('https://help.imdb.com/imdb')}>Help<LaunchIcon className="icon launch" /></span>
                <span className="explore__text" onClick={() => openInNewTab('https://help.imdb.com/imdb')}>Site Index<LaunchIcon className="icon launch" /></span>
                <span className="explore__text" onClick={() => openInNewTab('https://pro.imdb.com/in?redirectUrl=https%3A%2F%2Fpro.imdb.com%2F%3Fref_%3Dft_pro%26rf%3Dcons_tf_pro')}>IMDbPro<LaunchIcon className="icon launch" /></span>
                <span className="explore__text" onClick={() => openInNewTab('https://www.boxofficemojo.com/')}>Box Office Mojo<LaunchIcon className="icon launch" /></span>
                <span className="explore__text" onClick={() => openInNewTab('https://developer.imdb.com/')}>IMDb Developer<LaunchIcon className="icon launch" /></span>
            </div>

            <div className="footer__icons">
                <span className="explore__text post" onClick={() => openInNewTab('https://www.imdb.com/pressroom/?ref_=ft_pr')}>Press Room</span>
                <span className="explore__text" onClick={() => openInNewTab('https://advertising.amazon.com/resources/ad-specs/imdb/')}>Advertising<LaunchIcon className="icon launch" /></span>
                <span className="explore__text" onClick={() => openInNewTab('https://www.amazon.jobs/en/teams/imdb')}>Jobs<LaunchIcon className="icon launch" /></span>
                <span className="explore__text post" onClick={() => openInNewTab('https://www.imdb.com/conditions?ref_=ft_cou')}>Condition of Use</span>
                <span className="explore__text post" onClick={() => openInNewTab('https://www.imdb.com/privacy?ref_=ft_pvc')}>Pivacy Policy</span>
                <span className="explore__text" onClick={() => openInNewTab('https://www.amazon.com/b?ie=UTF8&node=5160028011')}>Interest-Based Ads<LaunchIcon className="icon launch" /></span>
            </div>
            <div className="footer__icons">
                <span className="logo__text">an</span><img src="data:image/png;base64,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" alt="logo" style={{ "width": 50 }} className="amazon__image" /><span className="logo__text">company</span>
            </div>
        </footer>
    )
}

export default Footer