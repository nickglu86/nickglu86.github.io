import ReactLogo from '../assets/react.png';

const Skills = () => {
    return (
        <section className="skills">
            <div className="inner">
                <div className="sec-title">
                   <h2>My Skills</h2>
                </div>
                <div className="skills">
                    <figure>
                        <figcaption>HTML5</figcaption>
                        <svg viewBox="0 0 452 520">
                        <title>HTML5 Logo Badge</title>
                        <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                        <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                        <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </figure>
                    <figure>
                        <figcaption>CSS3</figcaption>
                        <svg viewBox="0 0 452 520">
                        <title>Javascript Logo Badge</title>
                        <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                        <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                        <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </figure>
                    <figure>
                        <figcaption>Javascript</figcaption>
                        <svg viewBox="0 0 452 520">
                        <title>CSS3 Logo Badge</title>
                        <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                        <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                        <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                        </svg>
                    </figure>
                    <figure>
                        <figcaption>React JS</figcaption>
                        <img src={ReactLogo}  alt="react-js" />
                    </figure>
                </div>
                    
            </div>
        </section>
      );
}

export default Skills;