import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      caption: 'React.js'
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      caption: 'Bash'
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      caption: 'Git'
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        caption: 'JavaScript'
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        caption: 'Node'
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        caption: 'Python'
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg",
        caption: 'Solidity'
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
        caption: 'Vim'
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg",
        caption: 'Polygon'
    },
];

const properties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease"
};

function Skills() {
  return (
    <div className='Panel Skills-panel'>
        <div className='Panel-title'>
            Skills
        </div>
        <div className='Skills-content'>
        <div className='Panel-content Slideshow'>
            <Slide {...properties}>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                    <div className="Skills-icon" style={{'backgroundImage': `url(${slideImage.url})`, 'backgroundRepeat': 'no-repeat'}}></div>
                    <span>{slideImage.caption}</span>
                </div>
            ))} 
            </Slide>
        </div>
        </div>
    </div>
  )
}

export default Skills