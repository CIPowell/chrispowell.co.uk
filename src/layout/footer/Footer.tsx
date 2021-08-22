import GithubIcon from '../../static/assets/icons/github.svg';
import TwitterIcon from '../../static/assets/icons/twitter.svg';
import LinkedInIcon from '../../static/assets/icons/linkedin.svg';

import './Footer.scss';
import { FunctionComponent } from 'react';

export const Footer : FunctionComponent<unknown> = () => {
        return <footer>
            <p>&copy; Chris I Powell 2020</p>
            <ul className="contact">
                <li>
                    <a href="https://twitter.com/ChrisIPowell" title="Chris on Twitter">
                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CIPowell" title="Chris on Github">
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/chris-i-powell/" title="Chris on LinkedIn" >
                        <LinkedInIcon />
                    </a>
                </li>
            </ul>
        </footer>;
    }