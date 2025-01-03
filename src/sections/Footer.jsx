const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div>
          <a className="social-icon" href="https://github.com/danielUgochukwu">
            {' '}
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div>
          <a className="social-icon" href="https://x.com/Emperor_Slade">
            <img src="/assets/x.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div>
          <a className="social-icon" href="https://www.instagram.com/emperor_slade/">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div>
          <a className="social-icon" href="https://www.linkedin.com/in/daniel-ugochukwu-50104a216/">
            {' '}
            <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Daniel Ugochukwu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
