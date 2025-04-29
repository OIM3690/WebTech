document.getElementById('save').addEventListener('click', () => {
    const note = document.getElementById('note').value;
    chrome.storage.local.set({ note }, () => {
      alert('Note saved!');
    });
  });
  
  window.onload = () => {
    chrome.storage.local.get(['note'], (result) => {
      document.getElementById('note').value = result.note || '';
    });
  };
  