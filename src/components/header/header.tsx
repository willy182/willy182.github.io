import { urlCV } from '../utils'

export const Header = () => {
    const handleClick = (): void => {
        window.location.href = urlCV(); // Mengalihkan pengguna ke halaman baru
    };
    return (
        <header className="header">
            <div className="container">
                <ul className="social-icons pt-3">
                    <li className="social-item">
                        <a
                            className="social-link text-light"
                            target="_blank"
                            href="https://linkedin.com/in/willy182"
                        >
                            <i className="ti-linkedin" aria-hidden="true" />
                        </a>
                    </li>
                    <li className="social-item">
                        <a
                            className="social-link text-light"
                            target="_blank"
                            href="https://github.com/willy182"
                        >
                            <i className="ti-github" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
                <div className="header-content">
                    <h4 className="header-subtitle">Hello, I am</h4>
                    <h1 className="header-title">Willy Kristianto</h1>
                    <h6 className="header-mono">Tech Lead | Software Engineer</h6>
                    <button
                        className="btn btn-primary btn-rounded"
                        onClick={handleClick}
                    >
                        <i className="ti-printer pr-2" />
                        Download My CV
                    </button>
                </div>
            </div>
        </header>
    );
}