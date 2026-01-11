/**
 * @name discordlarpusernameby9ini
 * @version 1.5.0
 * @description ADVANCED PROTECTED VERSION - Multi-Layer Junk Injection.
 * @author by 9ini
 */

// --- LAYER 1: VIRTUAL ENTROPY GENERATOR (JUNK) ---
const _0xvirt = (function(){
    let _0xdb = []; for(let i=0; i<250; i++){ _0xdb.push(Math.random().toString(36).substring(2, 15)); }
    const _0xproc = (_0xsh) => _0xsh.split('').reverse().join('');
    return _0xdb.map(_0xproc);
})();

// --- LAYER 2: DUMMY LOGIC INJECTION ---
function _0xcheck_system_integrity() {
    let _0x1 = 0x1242; let _0x2 = 0x5532;
    const _0xcalc = (_0xa, _0xb) => (_0xa * _0xb) / 0x2;
    for(let i=0; i<100; i++) { _0x1 = _0xcalc(_0x1, 2) % _0x2; }
    return _0x1 !== 0;
}

const _0xext_data = "x72x65x61x64x46x69x6cx65x53x79x6ex63x5fx64x75x6dx6dx79x5fx62\
x79x39x69x6ex69x5fx70x72x6fx74x65x63x74x69x6fx6ex5fx6cx61x72x70";

// --- LAYER 3: PERSISTENT BUFFER (MORE JUNK) ---
const _0xbuffer = Array.from({length: 300}, (_, i) => String.fromCharCode(33 + (i % 94))).join('');

// --- THE CORE LOGIC (ENCRYPTED & HIDDEN) ---
const fs = require('fs');
const path = require('path');

const _0x1a2b = ['profileBadges', 'badges-', 'userPopoutInner', 'userProfileInner', 'data-larp-patched', 'createElement', 'img', 'success', 'BetterVolume Started!', 'utf8', 'existsSync', 'readFileSync'];
const _0x4f32 = (_0x2e1a) => _0x1a2b[_0x2e1a];

module.exports = class discordlarpusernameby9ini {
    constructor() {
        this._s = _0xvirt; this._b = _0xbuffer;
        this.configPath = path.join(BdApi.Plugins.folder, '\x64\x69\x73\x63\x6f\x72\x64\x6c\x61\x72\x70\x2e\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e');
        this.myBadges = [
            '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x6d\x65\x7a\x6f\x74\x76\x2f\x64\x69\x73\x63\x6f\x72\x64\x2d\x62\x61\x64\x67\x65\x73\x2f\x6d\x61\x69\x6e\x2f\x61\x73\x73\x65\x74\x73\x2f\x64\x69\x73\x63\x6f\x72\x64\x6e\x69\x74\x72\x6f\x2e\x73\x76\x67',
            '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x6d\x65\x7a\x6f\x74\x76\x2f\x64\x69\x73\x63\x6f\x72\x64\x2d\x62\x61\x64\x67\x65\x73\x2f\x6d\x61\x69\x6e\x2f\x61\x73\x73\x65\x74\x73\x2f\x64\x69\x73\x63\x6f\x72\x64\x62\x6f\x6f\x73\x74\x39\x2e\x73\x76\x67',
            '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x6d\x65\x7a\x6f\x74\x76\x2f\x64\x69\x73\x63\x6f\x72\x64\x2d\x62\x61\x64\x67\x65\x73\x2f\x6d\x61\x69\x6e\x2f\x61\x73\x73\x65\x74\x73\x2f\x61\x63\x74\x69\x76\x65\x64\x65\x76\x65\x6c\x6f\x70\x65\x72\x2e\x73\x76\x67'
        ];
        this.settings = { user: { username: "yy", display: "hay", userID: "1421243203738140803" } };
    }

    // INTERNAL FLOW OBFUSCATION
    _0xX9(_0xV) { if(_0xcheck_system_integrity()) return _0xV; return null; }

    loadSettings() {
        if (fs[_0x4f32(10)](this.configPath)) {
            try { this.settings = JSON.parse(fs[_0x4f32(11)](this.configPath, _0x4f32(9))); } catch (e) { }
        }
    }

    start() {
        this.loadSettings();
        this.startTimeout = setTimeout(() => {
            try {
                this.patchData();
                this.observer = new MutationObserver(() => this.injectBadges());
                this.observer.observe(document.body, { childList: true, subtree: true });
                BdApi.showToast(this._0xX9(_0x4f32(8)), { type: _0x4f32(7) });
            } catch (err) { }
        }, 3000);
    }

    injectBadges() {
        const _0xsel = '[class*="' + _0x4f32(0) + '"], [class*="' + _0x4f32(1) + '"]';
        document.querySelectorAll(_0xsel).forEach(c => {
            if (c.hasAttribute(_0x4f32(4))) return;
            const m = c.closest('[class*="' + _0x4f32(2) + '"], [class*="' + _0x4f32(3) + '"]');
            if (m) {
                c.setAttribute(_0x4f32(4), 'true');
                this.myBadges.forEach(l => {
                    const i = document.createElement(_0x4f32(6));
                    i.src = l; i.style = "width: 20px; height: 20px; margin: 0 2px;";
                    c.appendChild(i);
                });
            }
        });
    }

    patchData() {
        const _0xus = BdApi.Webpack.getModule(m => m.getCurrentUser, { searchExports: true });
        if (!_0xus) return;
        BdApi.Patcher.after("discordlarpusernameby9ini", _0xus, "getCurrentUser", (_, __, u) => {
            if (!u) return u;
            u.username = this.settings.user.username;
            u.globalName = this.settings.user.display;
            u.id = this.settings.user.userID;
            return u;
        });
    }

    stop() {
        clearTimeout(this.startTimeout);
        BdApi.Patcher.unpatchAll("discordlarpusernameby9ini");
        if (this.observer) this.observer.disconnect();
    }
};
// --- END OF PROTECTED SOURCE ---