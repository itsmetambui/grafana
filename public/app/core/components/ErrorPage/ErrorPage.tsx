import React, { PureComponent } from 'react';
import { config } from '@grafana/runtime';

export class ErrorPage extends PureComponent {
  render() {
    return (
      <div className="error-panel-wrapper">
        <div className="number-not-found">404</div>
        <div className="title">PAGE NOT FOUND</div>
        <div className="sub-title">We can't find the page you're looking for.</div>
        <div className="sub-title">
          You can either return to previous page, visit out homepage contact out support team.
        </div>
        <div className="error-button-group">
          <a href={config.appSubUrl} className="error-button">
            Home Dashboard
          </a>
          <a href="https://community.grafana.com" className="error-button">
            Community Site
          </a>
        </div>
        <svg width="380px" height="500px" viewBox="0 0 837 1045" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
              className="polygon-1"
              stroke="#007FB2"
              strokeWidth="6"
            ></path>
            <path
              d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
              className="polygon-2"
              stroke="#EF4A5B"
              strokeWidth="6"
            ></path>
            <path
              d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
              className="polygon-3"
              stroke="#795D9C"
              strokeWidth="6"
            ></path>
            <path
              d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
              className="polygon-4"
              stroke="#F2773F"
              strokeWidth="6"
            ></path>
            <path
              d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
              className="polygon-5"
              stroke="#36B455"
              strokeWidth="6"
            ></path>
          </g>
        </svg>
      </div>
    );
  }
}

export default ErrorPage;
