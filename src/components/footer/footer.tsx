export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer py-3">
            <div className="container">
                <p className="small mb-0 text-light">
                    &copy; {currentYear} Created With <i className="ti-heart text-danger" /> By 
                    <a href="http://devcrud.com" target="_blank">
                        <span
                            className="text-danger"
                            title="Bootstrap 4 Themes and Dashboards"
                        >
                            DevCRUD
                        </span>
                    </a>
                </p>
            </div>
        </footer>
    );
}