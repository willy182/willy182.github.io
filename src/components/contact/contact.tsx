export const Contact = () => {
    const handleClick = (): void => {
        window.location.href = 'mailto:willykristianto89@gmail.com'; // Mengalihkan pengguna ke halaman baru
    };
    return (
        <section className="section bg-dark py-5" id="contact">
            <div className="container text-center">
                <h2 className="text-light mb-5 font-weight-normal">
                    I Am Available For FreeLance
                </h2>
                <button
                    className="btn bg-primary w-lg"
                    onClick={handleClick}
                >
                    Hire me
                </button>
            </div>
        </section>
    );
}