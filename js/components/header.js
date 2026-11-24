
export function createHeader() {
  const header = document.createElement("header");

  const basePath = "/Fraud_detector/";

  header.innerHTML = `
    <a id="fraud-detector" href="${basePath}index.html">
      Fraud Detector
    </a>

    <nav>
      <div id="underline"></div>
      <ul>
        <li><a id="alerts-link" href="${basePath}pages/alerts.html">Alerts</a></li>
        <li><a id="transactions-link" href="${basePath}pages/transactions.html">Transactions</a></li>
        <li><a id="accounts-link" href="${basePath}pages/accounts.html">Accounts</a></li>
      </ul>
    </nav>

    <div id="login-btn-container">
      <button id="darkmode-btn">
        <i class="bi bi-sun"></i>
      </button>
      <button id="login-btn">Log In</button>
    </div>
  `;

  return header;
}
