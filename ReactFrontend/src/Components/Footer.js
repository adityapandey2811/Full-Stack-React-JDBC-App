export default function Footer() {
    let footerStyle={
        padding: "10px 0px",
        backgroundColor: "#2D4250",
        textAlign: "center",
        color: "#FFFFFF",
    }
    return(
        <div className="footer" style={footerStyle}>
            <p><a href="https://www.highradius.com/privacy-policy/" target="_blank" rel="noreferrer"> Privacy Policy</a>| &copy; 2022 HighRadius Corporation. All rights reserved.</p>
        </div>
    );
}