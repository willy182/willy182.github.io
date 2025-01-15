import { urlCV } from '../utils'

export const Profile = () => {
    const handleClick = (): void => {
        window.location.href = urlCV(); // Mengalihkan pengguna ke halaman baru
    };
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5" />
                    <h5 className="mb-3">
                        Tech Lead | Software Engineer | Backend Engineer | Team Management
                    </h5>
                    <p className="mt-20">
                        Experienced Backend Engineer and Technical Lead skilled in building
                        scalable and efficient backend. Proven track record in leading teams,
                        optimizing performance, and delivering high-quality software.
                        Passionate about solving complex problems and driving impactful
                        projects forward. My career goal is to continue refining my technical
                        expertise, contribute to impactful projects, and be part of a team
                        that drives technological and business innovation.
                    </p>
                    <button className="btn btn-outline-danger" onClick={handleClick}>
                        <i className="icon-down-circled2" />
                        Download My CV
                    </button>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5" />
                    <ul className="mt40 info list-unstyled">
                        <li>
                            <span>Religion</span> : Moeslem
                        </li>
                        <li>
                            <span>Birthdate</span> : 05/17/1989
                        </li>
                        <li>
                            <span>Email</span> : willykristianto89@gmail.com
                        </li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item">
                            <a
                                className="social-link"
                                target="_blank"
                                href="https://linkedin.com/in/willy182"
                            >
                                <i className="ti-linkedin" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                className="social-link"
                                target="_blank"
                                href="https://github.com/willy182"
                            >
                                <i className="ti-github" aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">KEY ACHIEVEMENTS</h3>
                    <span className="line mb-5" />
                    <div className="row">
                        <div className="col-1 text-danger pt-1">
                            <i className="ti-agenda icon-lg" />
                        </div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Project Delivery Excellence</h6>
                            <p className="subtitle">
                                Led team to deliver 20+ projects on time.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1">
                            <i className="ti-pie-chart icon-lg" />
                        </div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Code Quality Improvement</h6>
                            <p className="subtitle">
                                Improved code quality, reduced bugs by 15%.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1">
                            <i className="ti-bar-chart-alt icon-lg" />
                        </div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Service Integration Success</h6>
                            <p className="subtitle">
                                Integrated services, saving 30% processing time.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1">
                            <i className="ti-stats-up icon-lg" />
                        </div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Scalable System Development</h6>
                            <p className="subtitle">
                                Developed system handling 500k transactions daily.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}