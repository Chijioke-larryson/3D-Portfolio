import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:itmes-start items-center">
            <a href="https://github.com/Chijioke-larryson/"  target="_blank">Visit My Github </a>
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
            {socialImgs.map((img) =>(
                <a className="icon" target="_blank" href={img.url} key={img.url}>
                    <img src={img.imgPath} />
                     
                </a>
            ))}

        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Larryson Chijioke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;