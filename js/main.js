function showMessage() {
    alert('Hello from JavaScript!');
}

// 显示版本信息（从URL参数或构建信息获取）
const versionEl = document.getElementById('version');
if (versionEl) {
    versionEl.textContent = window.location.hostname.includes('v') ? 
        window.location.pathname.split('/')[3] : 'v1.0';
}
