
export function createHeader() {
  const header = document.createElement("header");


  header.innerHTML = `
    <a id="fraud-detector" href="../../index.html">
      Fraud Detector
    </a>

    <nav>
      <div id="underline"></div>
      <ul>
        <li><a id="alerts-link" href="../../pages/alerts.html">Alerts</a></li>
        <li><a id="transactions-link" href="../../pages/transactions.html">Transactions</a></li>
        <li><a id="accounts-link" href="../../pages/accounts.html">Accounts</a></li>
      </ul>
    </nav>

    <div id="login-btn-container">
      <button id="darkmode-btn">
        <i class="bi bi-sun"></i>
      </button>
      <button id="login-btn">Login</button>
    </div>
  `;

  return header;
}
