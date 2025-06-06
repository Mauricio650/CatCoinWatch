import { GitHubSvg, TwitterSvg } from './icons'
import '../assets/footer.css'

export function Footer() {
    return (
        <footer id="footer" className="page-footer">
            <div>
                <h1>Built with ❤️ by Mauricio I.</h1>
            </div>
           
            <div className='container-icons'>
                <a href="https://github.com/Mauricio650" target='blank'>
                    <GitHubSvg />
                </a>
                <a href="https://x.com/Mauricio23__" target='blank'>
                    <TwitterSvg />
                </a>
            </div>

        </footer>
    )
}