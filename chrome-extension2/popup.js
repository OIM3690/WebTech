// CoinDesk API endpoint for Bitcoin price
const API_URL = 'https://data-api.coindesk.com/spot/v1/latest/tick?market=coinbase&instruments=BTC-USD';

// DOM elements
const loadingEl = document.getElementById('loading');
const priceContainerEl = document.getElementById('price-container');
const priceEl = document.getElementById('price');
const updatedEl = document.getElementById('updated');
const errorEl = document.getElementById('error');
const refreshBtn = document.getElementById('refresh-btn');

// Fetch Bitcoin price
async function fetchBitcoinPrice() {
  try {
    showLoading();
    
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
    
    // Extract price information
    const priceData = data.Data["BTC-USD"];
    const price = priceData.PRICE;
    // Timestamp is in seconds, Date takes milliseconds
    const updatedTime = new Date(priceData.PRICE_LAST_UPDATE_TS * 1000).toLocaleTimeString();
    
    // Update UI
    displayPrice(price, updatedTime);
    
    // Save to storage for quick access
    chrome.storage.local.set({ 
      lastPrice: price, 
      lastUpdated: updatedTime 
    });
    
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    showError();
  }
}

// Show loading state
function showLoading() {
  loadingEl.style.display = 'block';
  priceContainerEl.style.display = 'none';
  errorEl.style.display = 'none';
}

// Display price
function displayPrice(price, updatedTime) {
  priceEl.textContent = `$${price}`;
  updatedEl.textContent = updatedTime;
  
  loadingEl.style.display = 'none';
  priceContainerEl.style.display = 'block';
  errorEl.style.display = 'none';
}

// Show error
function showError() {
  loadingEl.style.display = 'none';
  priceContainerEl.style.display = 'none';
  errorEl.style.display = 'block';
}

// Load cached data first, then fetch fresh data
function loadData() {
  chrome.storage.local.get(['lastPrice', 'lastUpdated'], (result) => {
    if (result.lastPrice && result.lastUpdated) {
      displayPrice(result.lastPrice, result.lastUpdated);
    }
    // Fetch fresh data regardless
    fetchBitcoinPrice();
  });
}

// Event listeners
refreshBtn.addEventListener('click', fetchBitcoinPrice);

// Initialize
loadData();
