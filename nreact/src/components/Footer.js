const Footer = () => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    return(
        <div className = "footer">
            <div className="social-media">
            <h4>Connect with Us</h4>
            <a href="#" class="fa fa-facebook">f</a>
            <a href="#" class="fa fa-twitter">t</a>
            </div>
            <div className="hf">
            <h4>About us</h4>
            <h4>Contact us</h4>
            </div>
            <div className="copyright">
                <h5>Copyright ShopTop</h5>
            </div>
        </div>
    )
};

export default Footer;