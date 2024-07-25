import React from 'react';
import './pricingfooter.css';
// import './pricingfooter1.css';

const PricingFooter = () => {
  return (
   <div>
  <section className="pricingbox">
    <h6 className="compare">Compare <span id="plan">Plans</span></h6>
    <table className="table table-bordered container-fluid">
      <thead>
        <tr className="sticky">
          <th scope="col" className="col-6" id="choose">Choose Your Plans<br /><button type="submit" id="yearly" className="btn btn-primary rounded-pill ">Yearly</button></th>
          <th scope="col" className="col-3 content-pricing"><span className="text_basic">Basic</span><br /><span >$599/year</span><br /><button type="submit" className="learn ">Subscribe</button></th>
          <th scope="col" className="col-3 content-pricing"><span className="text_basic">Pro</span><br /><span >$999/year</span><br /><button type="submit" className="learn">Subscribe</button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bg" style={{backgroundColor: '#f4f4f4'}}><span className="fw-bolder heading-bolder"><i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum dolor sit amet. </span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span>
          </td>
          <td className='icon-center'><span className="icon_check" /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check" />
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span></td>
        </tr>
        <tr>
          <td className="bg" style={{backgroundColor: '#f4f4f4'}}><span className="fw-bolder heading-bolder"><i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum dolor sit amet. </span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span>
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span></td>
        </tr>
        <tr>
          <td className="bg" style={{backgroundColor: '#f4f4f4'}}><span className="fw-bolder heading-bolder"><i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum dolor sit amet. </span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span>
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span></td>
        </tr>
        <tr>
          <td className="bg" style={{backgroundColor: '#f4f4f4'}}><span className="fw-bolder heading-bolder"><i className="bi bi-layers-fill gradient-icon" /> Lorem ipsum dolor sit amet. </span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span><br /><br />
            <span className="table_text">Stock Price chart and News</span>
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br />
          </td>
          <td className='icon-center'><span /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span><br /><br />
            <span className="icon_check"><i className="bi bi-check-lg" /></span></td>
        </tr>
      </tbody>
    </table>
  </section>
</div>

  )
}

export default PricingFooter
