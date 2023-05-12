const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className=" w-full h-auto flex-shrink grid place-items-center sm:w-1/2 p-4">
            <div className="container mx-auto px-2">
                <div className="flex items-center justify-center">
                    <p className="text-sm text-white">
                        &copy; {currentYear} PsyBombay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
