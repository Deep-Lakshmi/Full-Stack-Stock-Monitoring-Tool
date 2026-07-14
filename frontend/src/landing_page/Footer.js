import React from 'react';

function Footer() {
  return ( 
    <footer style={{backgroundColor: "rgb(240, 240, 240)"}}>
    <div
     className="container border-top mt-5">
      <div className='row mb-5 mt-5'>

        <div className="col">
          <img src="Media/images/logo.svg" alt="Zerodha Logo" style={{ width: "50%" }} />
          <p>&copy;2010 - 2024, Not Zerodha Broking Ltd. <br/> All rights reserved</p>
        </div>

        <div className="col">
          <h5>Company</h5>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>About us</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Products</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Referral programme</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Careers</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Zerodha tech</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Press & media</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Zerodha cares (CSR)</a>
        </div>

        <div className="col">
          <h5>Support</h5>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Support portal</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Z-Connect blog</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>List of charges</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Downloads & resources</a> <br/>
        </div>

        <div className="col">
          <h5>Account</h5>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Open an account</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>Fund transfer</a> <br/>
          <a href=" " style={{ textDecoration: 'none', color: 'inherit' }}>60 day challenge</a> <br/>
        </div>

      </div>

      <div className='mt-5 text-muted' style={{ fontSize: '12px' }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>

        <p>
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
      </div>

      <div className='text-center '></div>
        <ul className='d-flex flex-wrap justify-content-center list-unstyled' style={{ gap: '30px', fontSize: '13px' }}>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>NSE </a></li> 
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>BSE</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>MCX</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>MSEI</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>Terms & conditions</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>Policies & procedures</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>Privacy policy</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>Disclosure</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>For investor's attention</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>Investor charter</a> </li>
          <li><a href=" " style={{ textDecoration: 'none'}} className='text-muted'>Sitemap</a> </li>
        </ul>
    </div>
    </footer>
   );
}

export default Footer;