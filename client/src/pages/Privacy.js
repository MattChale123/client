import React from 'react'
import './pages.css'

export default function Privacy() {
    const styling = {
        backgroundColor: 'rgba(255, 255, 255, .15)',
        backdropFilter: 'blur(5px)',
        color: 'black',
        flexDirection: 'column',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        opacity: '.85',
        border: '2px solid black',
        width: '60%',
        padding: '10px',
    }
    const styling2 = {
        textAlign: "left",
        marginLeft: '15%',
        marginRight: '15%'
    }

    
    return (
        <div style={styling}>
            <h1 className="privacy">Privacy Policy of Matt Unincorporated</h1>
            <p>Matt Unincorporated operates the https://bit-and-bytes.herokuapp.com/ website, which provides the SERVICE.</p>
            <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Bits-and-Bytes website.</p>
            <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. Our Privacy Policy was created with the help of the <a href='https://www.privacypolicytemplate.net/'>Privacy Policy Template Generator</a>.</p>
            <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://bit-and-bytes.herokuapp.com/, unless otherwise defined in this Privacy Policy.</p>
            <h5>Information Collection and Use</h5>
            <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
            <h5>Log Data</h5>
            <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
            <h5>Cookies</h5>
            <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.</p>
            <p>Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
            <p>For more general information on cookies, please read <a href='https://www.generateprivacypolicy.com/#cookies'>"Cookies" article from the Privacy Policy Generator</a>.</p>
            <h5>Service Providers</h5>
            <p>We may employ third-party companies and individuals due to the following reasons:</p>
            <ul style={styling2}>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
            <h5>Security</h5>
            <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
            <h6>Children's Privacy</h6>
            <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
            <h5>Changes to This Privacy Policy</h5>
            <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
            <h5>Contact Us</h5>
            <p>If you have any questions or suggestions about our Privacy Policy, we will not respond. This is final</p>
        </div>
    )
}
